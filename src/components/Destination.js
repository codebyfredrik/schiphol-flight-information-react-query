import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import dataFetchConfig from './../config/dataFetchConfig';
import { useQuery } from 'react-query';

const defaultQueryFn = async (key, page = 0) => {
  const { data } = await axios.get(
    `${process.env.REACT_APP_API_BASE_URL}${key}`,
    dataFetchConfig
  );
  return data;
};

const StyledDestination = styled.span`
  /* color: #262b2f; */
  color: ${({ theme }) => theme.text};
  font-weight: bold;
  font-size: 0.875rem;
  transition: color 150ms ease-in;
`;

export const Destination = ({ route, className }) => {
  const { status, data: result, error, isFetching } = useQuery(
    `/destinations/${route.destinations[0]}`,
    defaultQueryFn,
    {
      staleTime: Infinity,
      cacheTime: Infinity,
    }
  );

  return (
    <>
      {isFetching ? (
        <StyledDestination>Loading...</StyledDestination>
      ) : error ? (
        <StyledDestination>Error</StyledDestination>
      ) : result ? (
        <StyledDestination className={className}>
          {result.city} ({result.iata})
        </StyledDestination>
      ) : (
        <StyledDestination>No data</StyledDestination>
      )}
    </>
  );
};
