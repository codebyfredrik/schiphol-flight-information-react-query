import React from 'react';
import axios from './../helpers/axios';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useQuery } from 'react-query';

const query = async (key) => {
  const { data } = await axios.get(key);
  return data;
};

const StyledDestination = styled.span`
  color: ${({ theme }) => theme.colors.text};
  font-weight: bold;

  @media screen and (prefers-reduced-motion: no-preference) {
    transition: color var(--transition-time) ease-in;
  }
`;

const Destination = ({ route, className }) => {
  const { data: result, error, isLoading, isSuccess } = useQuery(
    `/destinations/${route.destinations[0]}`,
    query,
    {
      staleTime: Infinity,
      cacheTime: Infinity,
    }
  );

  return (
    <>
      {isLoading ? (
        <StyledDestination className={className}>Loading...</StyledDestination>
      ) : error ? (
        <StyledDestination className={className}>Error</StyledDestination>
      ) : isSuccess ? (
        <StyledDestination className={className}>
          {result.city} ({result.iata})
        </StyledDestination>
      ) : (
        <StyledDestination className={className}>No data</StyledDestination>
      )}
    </>
  );
};

Destination.propTypes = {
  route: PropTypes.object,
  className: PropTypes.string,
};

export { Destination, query };
