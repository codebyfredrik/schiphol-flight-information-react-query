import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { ReactQueryDevtools } from 'react-query-devtools';
import { usePaginatedQuery, queryCache } from 'react-query';
import GlobalStyle from './components/GlobalStyle';
import dataFetchConfig from './config/dataFetchConfig';
import { Button } from './styles/Styles';
import Flight from './components/Flight';

const defaultQueryFn = async (key, page = 0) => {
  const { data } = await axios.get(
    `${process.env.REACT_APP_API_BASE_URL}/${key}?page=${page}`,
    dataFetchConfig
  );
  return data;
};

const StyledApp = styled.div`
  max-width: 1000px;
  margin: auto;
  padding: 1rem;
`;

const Title = styled.h1`
  margin: 1rem 0 2rem 0;
  font-family: 'Source Sans Pro', sans-serif;
`;

const ListFlights = styled.ul`
  display: grid;
  grid-gap: 1rem;
  padding: 0;
  margin-top: 2rem;
`;

const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 435px) {
     {
      flex-direction: row;
      justify-content: space-between;
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

const App = () => {
  const [page, setPage] = useState(39);
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
      // console.log('prefetcing');
    }
  }, [latestData, page, defaultQueryFn]);

  // usePaginatedQuery(`/flights?page=${page}&sort=+scheduleTime`);

  if (!isFetching && !isLoading && !error)
    console.log('latestData', latestData.flights);

  return (
    <>
      <ReactQueryDevtools initialIsOpen={false} />
      <GlobalStyle />
      <StyledApp>
        <Title>Schipol Traffic Information</Title>
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
          <span>Current page: {page + 1}</span>
        </FlexContainer>
        <div>
          {/* {isFetching ? <span>Loading...</span> : null} */}
          {isLoading ? (
            <div>Loading...</div>
          ) : isError ? (
            <div>Error: {error.message}</div>
          ) : (
            <ListFlights>
              {resolvedData.flights
                .filter((item) => item.flightName === item.mainFlight)
                .map((item) => (
                  <Flight key={item.id} flight={item} />
                ))}
            </ListFlights>
          )}
        </div>
      </StyledApp>
    </>
  );
};

export default App;
