import React from 'react';
import styled from 'styled-components';
import { useAirline } from '../hooks/index';

interface IAirlineProps {
  prefixICAO: string;
}

const StyledAirline = styled.span`
  color: ${({ theme }) => theme.colors.text};
  font-size: 0.875rem;

  @media screen and (prefers-reduced-motion: no-preference) {
    transition: color var(--transition-time) ease-in;
  }
`;

const Airline = ({ prefixICAO, ...restProps }: IAirlineProps): JSX.Element => {
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

export { Airline };
