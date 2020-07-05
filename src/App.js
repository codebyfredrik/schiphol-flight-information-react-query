import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { ReactQueryDevtools } from 'react-query-devtools';
import { usePaginatedQuery, queryCache } from 'react-query';
import GlobalStyle from './components/GlobalStyle';
import dataFetchConfig from './config/dataFetchConfig';
import { Button } from './styles/Styles';
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

const Title = styled.h1`
  margin: 1rem 0 2rem 0;
  font-family: 'Source Sans Pro', sans-serif;
`;

const ListFlights = styled.ul`
  display: grid;
  grid-gap: 1rem;
  padding: 0;
  margin-top: 2rem;
  /* border: 1px solid red; */
`;

const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const SkipButton = styled(Button)`
  margin-right: 1rem;
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
