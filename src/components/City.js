import React from 'react';
import styled from 'styled-components';
import { useDestination } from '../hooks/useDestination';

const StyledCity = styled.span`
  display: inline-block;
`;

const City = ({ route, className }) => {
  const { result, error, isLoading, isSuccess } = useDestination(route);

  return (
    <>
      {isLoading ? (
        <StyledCity className={className}>Loading...</StyledCity>
      ) : error ? (
        <StyledCity className={className}>Error</StyledCity>
      ) : isSuccess ? (
        <StyledCity className={className}>{result.city}</StyledCity>
      ) : (
        <StyledCity className={className}>No data</StyledCity>
      )}
    </>
  );
};

// City.defaultProps = {
//   name: "Guest"
// };

export { City };
