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

const StyledDestination = styled.span`
  color: ${({ theme }) => theme.text};
  font-weight: bold;
  transition: color var(--transition-time) ease-in;
`;

const Destination = ({ route, className }) => {
  const { status, data: result, error, isFetching } = useQuery(
    `/destinations/${route.destinations[0]}`,
    query,
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

Destination.propTypes = {
  route: PropTypes.object,
  className: PropTypes.string,
};

export { Destination };
