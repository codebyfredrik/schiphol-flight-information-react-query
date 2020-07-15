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
  color: ${({ theme }) => theme.text};
  font-weight: bold;
  transition: color var(--transition-time) ease-in;
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
        <StyledDestination className={className}>Loading...</StyledDestination>
      ) : error ? (
        <StyledDestination className={className}>Error</StyledDestination>
      ) : result ? (
        <StyledDestination className={className}>
          {result.city} ({result.iata})
        </StyledDestination>
      ) : (
        <StyledDestination className={className}>No data</StyledDestination>
      )}
    </>
  );
};
