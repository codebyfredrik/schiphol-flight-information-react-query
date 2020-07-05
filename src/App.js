import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { ReactQueryDevtools } from 'react-query-devtools';
import GlobalStyle from './components/GlobalStyle';
import axios from 'axios';
import { usePaginatedQuery, queryCache } from 'react-query';
import dataFetchConfig from './config/dataFetchConfig';
import Flight from './components/Flight';

// import './App.css';

const defaultQueryFn = async (key, page = 0) => {
  const { data } = await axios.get(
    `${process.env.REACT_APP_API_BASE_URL}/${key}?page=${page}`,
    dataFetchConfig
  );
  return data;
};

const StyledApp = styled.div`
  max-width: 1300px;
  margin: auto;
  padding: 2rem;
`;

const PageTitle = styled.h1`
  margin-top: 1rem;
  font-family: 'Source Sans Pro', sans-serif;
`;

const ListFlights = styled.ul`
  display: grid;
  grid-gap: 0.7rem;
  padding: 0;
  margin-top: 2rem;
  /* border: 1px solid red; */
`;

const App = () => {
  const [page, setPage] = useState(0);
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
      console.log('prefetcing');
    }
  }, [latestData, page, defaultQueryFn]);

  // usePaginatedQuery(`/flights?page=${page}&sort=+scheduleTime`);

  // if (!isFetching && !isLoading && !error)
  //   console.log('latestData', latestData.flights);

  return (
    <>
      <ReactQueryDevtools initialIsOpen={false} />
      <GlobalStyle />
      <StyledApp>
        <PageTitle>Schipol Traffic Information</PageTitle>
        <div>
          <span>Current page: {page + 1}</span>
          <button
            onClick={() => setPage((prevState) => Math.max(prevState - 1, 0))}
            disabled={page === 0}
          >
            Previous page
          </button>
          <button
            onClick={() =>
              setPage((prevState) => (!latestData ? prevState : prevState + 1))
            }
            disabled={!latestData || latestData.flights.length < 20}
          >
            Next page
          </button>
          {isFetching ? <span>Loading...</span> : null}
          {isLoading ? (
            <div>Loading...</div>
          ) : isError ? (
            <div>Error: {error.message}</div>
          ) : (
            <ListFlights>
              {resolvedData.flights.map((item) => (
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
