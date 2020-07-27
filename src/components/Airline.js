import React from 'react';
import axios from './../helpers/axios';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useQuery } from 'react-query';

const query = async (key) => {
  const { data } = await axios.get(key);

  return data;
};

const StyledAirline = styled.span`
  color: ${({ theme }) => theme.colors.text};
  font-size: 0.875rem;

  @media screen and (prefers-reduced-motion: no-preference) {
    transition: color var(--transition-time) ease-in;
  }
`;

const Airline = ({ prefixICAO, className }) => {
  const { data: result, error, isFetching } = useQuery(
    `/airlines/${prefixICAO}`,
    query,
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

Airline.propTypes = {
  prefixICAO: PropTypes.string,
  className: PropTypes.string,
};

export { Airline };
