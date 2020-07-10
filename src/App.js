import React, { useState, useEffect } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import axios from 'axios';
import moment from 'moment';
import { lightTheme, darkTheme } from './components/Theme';
import { ReactQueryDevtools } from 'react-query-devtools';
import { usePaginatedQuery, queryCache } from 'react-query';
import GlobalStyle from './components/GlobalStyle';
import dataFetchConfig from './config/dataFetchConfig';
import { Button } from './styles/Styles';
import Flight from './components/Flight';
import { RowInformation } from './components/RowInformation';

const defaultQueryFn = async (key, page = 0) => {
  const dateTimeString = moment().format('YYYY-MM-DDTHH:mm:ss');
  const { data } = await axios.get(
    `${process.env.REACT_APP_API_BASE_URL}/${key}?fromDateTime=${dateTimeString}&page=${page}&searchDateTimeField=scheduleDateTime&sort=+scheduleDate,+scheduleTime`,
    dataFetchConfig
  );
  return data;
};

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
  /* border: 1px solid green; */
`;

const FlexContainer = styled.div`
  display: flex;
  /* margin-bottom: 0rem; */
  /* border: 1px solid red; */
  /* width: 100%; */
  /* flex-direction: column; */

  @media screen and (min-width: 435px) {
     {
      /* flex-direction: row; */
      /* justify-content: space-between; */
      /* align-items: center; */
    }
  }
`;

const SkipButton = styled(Button)`
  margin-right: 1rem;
  /* margin-bottom: 1rem; */
  color: ${({ theme }) => theme.text};
  transition-property: color, background-color;
  transition-duration: 150ms;
  transition-timing-function: ease-in;

  @media screen and (min-width: 435px) {
     {
      /* margin-bottom: 0; */
    }
  }
`;

const ThemeButton = styled(Button)`
  margin-left: auto;
  /* margin-inline-start: auto; */
  /* margin-bottom: 1rem; */
  color: ${({ theme }) => theme.text};
  transition-property: color, background-color;
  transition-duration: 150ms;
  transition-timing-function: ease-in;

  @media screen and (min-width: 435px) {
     {
      /* margin-bottom: 0; */
    }
  }
`;

const CurrentPage = styled.span`
  font-weight: bold;
  color: ${({ theme }) => theme.text};
`;

const DisplayPage = styled.span`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.text};
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
  const [theme, setTheme] = useState('light');
  const [displayDate, setDisplayDate] = useState(true);
  const [date, setDate] = useState();
  const [filteredArrayLength, setFilteredArrayLength] = useState(0);
  const themeToggler = () => {
    // console.log(theme);
    theme === 'light' ? setTheme('dark') : setTheme('light');
  };
  let filteredResolvedData = null;
  const {
    isLoading,
    isError,
    error,
    resolvedData,
    latestData,
    isFetching,
  } = usePaginatedQuery(['flights', page], defaultQueryFn, {});

  useEffect(() => {
    if (
      !isFetching &&
      !isLoading &&
      !error &&
      !latestData.flights.length < 20
    ) {
      queryCache.prefetchQuery(['flights', page + 1], defaultQueryFn);
    }
  }, [latestData, page, isFetching, isLoading, error]);

  if (resolvedData?.flights)
    filteredResolvedData = resolvedData.flights.filter(
      (item) => item.flightName === item.mainFlight
    );

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
        <StyledApp>
          <FlexContainer>
            {/* <div> */}
            <SkipButton
              onClick={() => setPage((prevState) => Math.max(prevState - 1, 0))}
              disabled={page === 0}
            >
              Previous page
            </SkipButton>
            <SkipButton
              onClick={() =>
                setPage((prevState) =>
                  !latestData ? prevState : prevState + 1
                )
              }
              disabled={!latestData || latestData.flights.length < 20}
            >
              Next page
            </SkipButton>
            <ThemeButton onClick={themeToggler}>Switch Theme</ThemeButton>
            {/* </div> */}
            {/* <DisplayPage>
              Current page: <CurrentPage>{page + 1}</CurrentPage>
            </DisplayPage> */}
          </FlexContainer>
          <div>
            {/* {isFetching ? <span>Loading...</span> : null} */}
            {isLoading ? (
              <Loading>Loading flights...</Loading>
            ) : isError ? (
              <Error>Error: {error.message}</Error>
            ) : (
              <Flights>{renderList()}</Flights>
            )}
          </div>
        </StyledApp>
      </>
    </ThemeProvider>
  );
};

export default App;
