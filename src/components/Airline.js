import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { useQuery } from 'react-query';
import dataFetchConfig from './../config/dataFetchConfig';
import NoData from './NoData';

const defaultQueryFn = async (key) => {
  const { data } = await axios.get(
    `${process.env.REACT_APP_API_BASE_URL}${key}`,
    dataFetchConfig
  );
  return data;
};

const StyledAirline = styled.span`
  color: #262b2f;
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
        <StyledAirline>Loading...</StyledAirline>
      ) : error ? (
        <StyledAirline>Error</StyledAirline>
      ) : result ? (
        <StyledAirline className={className}>
          {/* {result.publicName.length > 28
            ? `${result.publicName.slice(0, 24)}...`
            : result.publicName} */}
          {result.publicName}
        </StyledAirline>
      ) : null}
    </>
  );
};
