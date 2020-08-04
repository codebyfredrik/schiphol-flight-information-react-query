import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useDestination } from './../hooks/index';

const StyledDestination = styled.span`
  color: ${({ theme }) => theme.colors.text};
  font-weight: bold;

  @media screen and (prefers-reduced-motion: no-preference) {
    transition: color var(--transition-time) ease-in;
  }
`;

const Destination = ({ route, className }) => {
  const { result, error, isLoading, isSuccess } = useDestination(route);

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

export { Destination };
