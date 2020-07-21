import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useQuery } from 'react-query';

const query = async (key) => {
  const { data } = await axios.get(
    `${process.env.REACT_APP_API_BASE_URL}${key}`
  );

  return data;
};

const StyledAirline = styled.span`
  color: ${({ theme }) => theme.text};
  font-size: 0.875rem;
  transition: color var(--transition-time) ease-in;
`;

const Airline = ({ prefixICAO, className }) => {
  const { status, data: result, error, isFetching } = useQuery(
    `/airlines/${prefixICAO}`,
    query,
    {
      staleTime: Infinity,
      cacheTime: Infinity,
    }
  );
  // if (!isFetching && result) console.log(result);
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
