import React from 'react';
import styled from 'styled-components';
import { useDestination } from '../hooks/useDestination';

const StyledCity = styled.span`
  display: inline-block;
`;

const City = ({ route, ...restProps }) => {
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
