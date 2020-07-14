import React, { useState, useEffect } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import axios from 'axios';
import moment from 'moment';
import { lightTheme, darkTheme } from './components/Theme';
import { ReactQueryDevtools } from 'react-query-devtools';
import { usePaginatedQuery, queryCache } from 'react-query';
import GlobalStyle from './components/GlobalStyle';
import { Button } from './styles/Styles';
import Flight from './components/Flight';
import { RowInformation } from './components/RowInformation';
import { Overlay } from './components/Overlay';

const defaultQueryFn = async (key, { page = 0, flightDirection = '' }) => {
  const dateTimeString = moment().format('YYYY-MM-DDTHH:mm:ss');
  let url;
  // console.log('Page', page);
  // console.log('FlightDirection', flightDirection);

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
  border-bottom: 1px solid #ffd700;
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
  display: flex;
`;

const SkipButton = styled(Button)`
  margin-right: 1rem;
  color: ${({ theme }) => theme.text};
  transition-property: color, background-color;
  transition-duration: 150ms;
  transition-timing-function: ease-in;

  &:disabled {
    cursor: default;

    &:hover {
      background-color: ${({ theme }) => theme.bgButton};
    }
  }
`;

const ThemeButton = styled(Button)`
  margin-left: auto;
`;

const FilterButton = styled(Button)`
  margin-left: 1rem;
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
  const [overlayIsVisible, setOverlayIsVisible] = useState(false);
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
  } = usePaginatedQuery(
    ['flights', { page, flightDirection }],
    defaultQueryFn,
    {}
  );

  useEffect(() => {
    if (
      !isFetching &&
      !isLoading &&
      !error &&
      !latestData.flights.length < 20
    ) {
      queryCache.prefetchQuery(
        ['flights', { page: page + 1, flightDirection }],
        defaultQueryFn
      );
    }
  }, [latestData, page, isFetching, isLoading, error]);

  if (!isFetching && !isLoading && !error) {
    // console.log('resolvedData', resolvedData);
    // console.log('latestData', latestData.flights);
    // console.log('filtered', filteredResolvedData);
    // setFilteredArrayLength(filteredResolvedData.length);
  }

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
            <Title>Amsterdam Airport Schipol</Title>
            <SubTitle>Flight Information</SubTitle>
          </HeaderContainer>
        </Header>
        {overlayIsVisible && (
          <Overlay
            setFlightDirection={setFlightDirection}
            setOverlayIsVisible={setOverlayIsVisible}
            setPage={setPage}
            flightDirection={flightDirection}
          />
        )}
        <WrapperContainer>
          <StyledApp>
            <FlexContainer>
              <SkipButton
                onClick={() =>
                  setPage((prevState) => Math.max(prevState - 1, 0))
                }
                disabled={page === 0 || isFetching}
              >
                Previous page
              </SkipButton>
              <SkipButton
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
              </SkipButton>
              <ThemeButton onClick={themeToggler}>Switch Theme</ThemeButton>
              <FilterButton onClick={() => setOverlayIsVisible('true')}>
                Filter
              </FilterButton>
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

export default App;
