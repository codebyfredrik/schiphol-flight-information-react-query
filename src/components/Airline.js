import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useAirline } from './../hooks/useAirline';

const StyledAirline = styled.span`
  color: ${({ theme }) => theme.colors.text};
  font-size: 0.875rem;

  @media screen and (prefers-reduced-motion: no-preference) {
    transition: color var(--transition-time) ease-in;
  }
`;

const Airline = ({ prefixICAO, className }) => {
  const { result, error, isSuccess, isLoading } = useAirline(prefixICAO);

  return (
    <>
      {isLoading ? (
        <StyledAirline className={className}>Loading...</StyledAirline>
      ) : error ? (
        <StyledAirline className={className}>Error</StyledAirline>
      ) : isSuccess ? (
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
