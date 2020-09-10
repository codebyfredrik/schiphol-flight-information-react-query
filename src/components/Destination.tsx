import React from 'react';
import styled from 'styled-components';
import { useDestination } from '../hooks/index';

export interface IDestinationProps {
  route: {
    destinations: string[];
    eu: string;
    visa: boolean;
  };
}

interface IDestination {}

const StyledDestination = styled.span`
  color: ${({ theme }) => theme.colors.text};
  font-weight: 600;

  @media screen and (prefers-reduced-motion: no-preference) {
    transition: color var(--transition-time) ease-in;
  }
`;

const Destination = ({
  route,
  ...restProps
}: IDestinationProps): JSX.Element => {
  console.log(route);
  const { result, error, isLoading, isSuccess } = useDestination(route);

  return (
    <>
      {isLoading ? (
        <StyledDestination {...restProps}>Loading...</StyledDestination>
      ) : error ? (
        <StyledDestination {...restProps}>Error</StyledDestination>
      ) : isSuccess ? (
        <StyledDestination {...restProps}>
          {result.city} ({result.iata})
        </StyledDestination>
      ) : (
        <StyledDestination {...restProps}>No data</StyledDestination>
      )}
    </>
  );
};

export { Destination };
