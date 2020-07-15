import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { useQuery } from 'react-query';
import dataFetchConfig from './../config/dataFetchConfig';

const defaultQueryFn = async (key) => {
  const { data } = await axios.get(
    `${process.env.REACT_APP_API_BASE_URL}${key}`,
    dataFetchConfig
  );

  return data;
};

const StyledAirline = styled.span`
  color: ${({ theme }) => theme.text};
  font-size: 0.875rem;
  transition: color var(--transition-time) ease-in;
`;

export const Airline = ({ prefixICAO, className }) => {
  const { status, data: result, error, isFetching } = useQuery(
    `/airlines/${prefixICAO}`,
    defaultQueryFn,
    {
      staleTime: Infinity,
      cacheTime: Infinity,
    }
  );

  return (
    <>
      {isFetching ? (
        <StyledAirline className={className}>Loading...</StyledAirline>
      ) : error ? (
        <StyledAirline className={className}>Error</StyledAirline>
      ) : result ? (
        <StyledAirline className={className}>{result.publicName}</StyledAirline>
      ) : null}
    </>
  );
};
