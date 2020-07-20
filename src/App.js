import React, { useState, useEffect } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import axios from 'axios';
import moment from 'moment';
import { useToggle } from './hooks/useToggle';
import { lightTheme, darkTheme } from './components/Theme';
import { ReactQueryDevtools } from 'react-query-devtools';
import { usePaginatedQuery, queryCache } from 'react-query';
import { GlobalStyle } from './components/GlobalStyle';
import { Button } from './styles/Styles';
import { Flight } from './components/Flight';
import { RowInformation } from './components/RowInformation';
import { Overlay } from './components/Overlay';

const query = async (key, { page = 0, flightDirection = '' }) => {
  const dateTimeString = moment().format('YYYY-MM-DDTHH:mm:ss');
  let url;

  if (flightDirection) {
    url = `${process.env.REACT_APP_API_BASE_URL}/${key}?flightDirection=${flightDirection}&fromDateTime=${dateTimeString}&page=${page}&searchDateTimeField=scheduleDateTime&sort=+scheduleDate,+scheduleTime`;
  } else {
    url = `${process.env.REACT_APP_API_BASE_URL}/${key}?fromDateTime=${dateTimeString}&page=${page}&searchDateTimeField=scheduleDateTime&sort=+scheduleDate,+scheduleTime`;
  }
  const { data } = await axios.get(url);
  return data;
};

const WrapperContainer = styled.div`
  position: relative;
`;

const StyledApp = styled.div`
  max-width: 1000px;
  margin: auto;
  padding: 1rem;
`;

const HeaderContainer = styled.div`
  max-width: 1000px;
  margin: auto;
  padding: 1.5rem 1rem;
`;

const Header = styled.header`
  background-color: #0b0e10;
  margin-bottom: 2rem;
  border-bottom: 2px solid #ffd700;
`;

const Title = styled.h1`
  margin: 0;
  font-size: 1.5rem;
  font-family: 'Source Sans Pro', sans-serif;
  color: #ffd700;

  @media screen and (min-width: 380px) {
    font-size: 2rem;
  }

  @media screen and (min-width: 520px) {
    font-size: 2.5rem;
  }
`;

const SubTitle = styled.h3`
  margin: 0;
  font-size: 1rem;
  font-family: 'Source Sans Pro', sans-serif;
  color: #fff;

  @media screen and (min-width: 520px) {
    font-size: 1.5rem;
  }
`;

const Flights = styled.ul`
  display: grid;
  grid-gap: 1rem;
  padding: 0;
  margin: 3rem 0 2rem 0;
`;

const FlexContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-gap: 0.5rem;

  @media screen and (min-width: 680px) {
    grid-template-columns: 9em 9em auto 9em 9em;
    grid-template-rows: 1fr;
  }
`;

const Spacer = styled.div`
  display: none;

  @media screen and (min-width: 680px) {
    display: inline-block;
  }
`;

const StyledButton = styled(Button)`
  color: ${({ theme }) => theme.text};
  transition-property: color, background-color;
  transition-duration: 150ms;
  transition-timing-function: ease-in;

  &:disabled {
    cursor: default;
    opacity: 0.5;

    &:hover {
      background-color: ${({ theme }) => theme.bgButton};
    }
  }
`;

const Loading = styled.span`
  display: inline-block;
  margin: 2rem 0;
  font-weight: bold;
`;

const Error = styled.span`
  display: inline-block;
  margin: 2rem 0;
  font-weight: bold;
  color: #ff0800;
`;

const App = () => {
  const [page, setPage] = useState(0);
  const [flightDirection, setFlightDirection] = useState('');
  const [overlayIsVisible, setOverlayIsVisible] = useToggle();
  const [theme, setTheme] = useState('light');
  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  };
  const {
    isLoading,
    isError,
    error,
    resolvedData,
    latestData,
    isFetching,
  } = usePaginatedQuery(['flights', { page, flightDirection }], query, {});

  useEffect(() => {
    if (
      !isFetching &&
      !isLoading &&
      !error &&
      !latestData.flights.length < 20
    ) {
      queryCache.prefetchQuery(
        ['flights', { page: page + 1, flightDirection }],
        query
      );
    }
  }, [latestData, page, isFetching, isLoading, error]);

  const renderList = () => {
    let currentDate = null;
    return resolvedData.flights
      .filter((item) => item.flightName === item.mainFlight)
      .map((item, index) => {
        if (item.scheduleDate !== currentDate) {
          currentDate = item.scheduleDate;
          return (
            <React.Fragment key={item.id}>
              <RowInformation
                date={item.scheduleDate}
                index={index}
                page={page}
              />
              <Flight flight={item} />
            </React.Fragment>
          );
        } else {
          return <Flight key={item.id} flight={item} />;
        }
      });
  };

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <>
        <ReactQueryDevtools initialIsOpen={false} />
        <GlobalStyle />
        <Header>
          <HeaderContainer>
            <Title>Amsterdam Schipol Airport</Title>
            <SubTitle>Flight Information</SubTitle>
          </HeaderContainer>
        </Header>
        {overlayIsVisible && (
          <Overlay
            setFlightDirection={setFlightDirection}
            setOverlayIsVisible={setOverlayIsVisible}
            setPage={setPage}
            overlayIsVisible={overlayIsVisible}
            flightDirection={flightDirection}
          />
        )}
        <WrapperContainer>
          <StyledApp>
            <FlexContainer>
              <StyledButton
                onClick={() =>
                  setPage((prevState) => Math.max(prevState - 1, 0))
                }
                data-testid="previous-page"
                disabled={page === 0 || isFetching}
              >
                Previous page
              </StyledButton>
              <StyledButton
                onClick={() =>
                  setPage((prevState) =>
                    !latestData ? prevState : prevState + 1
                  )
                }
                disabled={
                  !latestData || latestData.flights.length < 20 || isFetching
                }
              >
                Next page
              </StyledButton>
              <Spacer />
              <StyledButton onClick={themeToggler}>
                {theme === 'light' ? 'Dark ' : 'Light '} theme
              </StyledButton>
              <StyledButton onClick={setOverlayIsVisible}>Filter</StyledButton>
            </FlexContainer>
            <div>
              {isLoading ? (
                <Loading>Loading flights...</Loading>
              ) : isError ? (
                <Error>Error: {error.message}</Error>
              ) : (
                <Flights>{renderList()}</Flights>
              )}
            </div>
          </StyledApp>
        </WrapperContainer>
      </>
    </ThemeProvider>
  );
};

export { App };
