import React, { useState } from 'react';
import styled from 'styled-components';
import { useQuery, usePaginatedQuery } from 'react-query';
import Flight from './components/Flight';

import './App.css';

const PageTitle = styled.h1`
  font-family: 'Source Sans Pro', sans-serif;
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
  } = usePaginatedQuery(`/flights?page=${page}&sort=+scheduleTime`);

  return (
    <div className="App">
      <PageTitle>Schipol Traffic Information</PageTitle>
      <div>
        {isLoading ? (
          <div>Loading...</div>
        ) : isError ? (
          <div>Error: {error.message}</div>
        ) : (
          <div>
            {resolvedData.flights.map((item) => (
              <Flight key={item.id} flight={item} />
            ))}
          </div>
        )}
        <span>Current page: {page + 1}</span>
        <button
          onClick={() => setPage((old) => Math.max(old - 1, 0))}
          disabled={page === 0}
        >
          Previous page
        </button>
        <button
          onClick={() =>
            setPage((old) =>
              !latestData || !latestData.hasMore ? old : old + 1
            )
          }
          disabled={!latestData || !latestData.hasMore}
        >
          Next page
        </button>
        {isFetching ? <span>Loading...</span> : null}
      </div>
    </div>
  );
};

export default App;
