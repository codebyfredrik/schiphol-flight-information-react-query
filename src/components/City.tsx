import React from 'react';
import styled from 'styled-components';
import { useDestination } from '../hooks/useDestination';

interface ICityProps extends React.HTMLAttributes<HTMLSpanElement> {
  route: {
    destinations: string[];
    eu: string;
    visa: boolean;
  };
}

const StyledCity = styled.span`
  display: inline-block;
`;

const City = ({ route, ...restProps }: ICityProps): JSX.Element => {
  const { result, error, isLoading, isSuccess } = useDestination(route);

  return (
    <>
      {isLoading ? (
        <StyledCity {...restProps}>Loading...</StyledCity>
      ) : error ? (
        <StyledCity {...restProps}>Error</StyledCity>
      ) : isSuccess ? (
        <StyledCity {...restProps}>{result.city}</StyledCity>
      ) : (
        <StyledCity {...restProps}>No data</StyledCity>
      )}
    </>
  );
};

export { City };
