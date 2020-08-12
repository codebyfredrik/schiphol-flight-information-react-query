import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useAirline } from './../hooks/index';

const StyledAirline = styled.span`
  color: ${({ theme }) => theme.colors.text};
  font-size: 0.875rem;

  @media screen and (prefers-reduced-motion: no-preference) {
    transition: color var(--transition-time) ease-in;
  }
`;

const Airline = ({ prefixICAO, ...restProps }) => {
  const { result, error, isSuccess, isLoading } = useAirline(prefixICAO);

  return (
    <>
      {isLoading ? (
        <StyledAirline {...restProps}>Loading...</StyledAirline>
      ) : error ? (
        <StyledAirline {...restProps}>Error</StyledAirline>
      ) : isSuccess ? (
        <StyledAirline {...restProps}>{result.publicName}</StyledAirline>
      ) : null}
    </>
  );
};

Airline.propTypes = {
  prefixICAO: PropTypes.string,
};

export { Airline };
