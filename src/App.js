import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import moment from 'moment';
import { ReactQueryDevtools } from 'react-query-devtools';
import { usePaginatedQuery, queryCache } from 'react-query';
import GlobalStyle from './components/GlobalStyle';
import dataFetchConfig from './config/dataFetchConfig';
import { Button } from './styles/Styles';
import Flight from './components/Flight';

const defaultQueryFn = async (key, page = 0) => {
  const dateTimeString = moment().format('YYYY-MM-DDThh:mm:ss');
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
  margin: 2rem 0;
`;

const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 435px) {
     {
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }
  }
`;

const SkipButton = styled(Button)`
  margin-right: 1rem;
  margin-bottom: 1rem;

  @media screen and (min-width: 435px) {
     {
      margin-bottom: 0;
    }
  }
`;

const PageNumber = styled.span`
  font-weight: bold;
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
    console.log('latestData', latestData.flights);
    console.log(filteredResolvedData);
  }

  return (
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
          <div>
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
          </div>
          <span>
            Current page: <PageNumber>{page + 1}</PageNumber>
          </span>
        </FlexContainer>
        <div>
          {/* {isFetching ? <span>Loading...</span> : null} */}
          {isLoading ? (
            <Loading>Loading flights...</Loading>
          ) : isError ? (
            <Error>Error: {error.message}</Error>
          ) : (
            <Flights>
              {resolvedData &&
                resolvedData.flights
                  .filter((item) => item.flightName === item.mainFlight)
                  .map((item) => <Flight key={item.id} flight={item} />)}
            </Flights>
          )}
        </div>
      </StyledApp>
    </>
  );
};

export default App;
