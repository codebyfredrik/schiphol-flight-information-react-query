import React from 'react';
import styled from 'styled-components';
import { useDestination } from '../hooks/useDestination';

const StyledCity = styled.span`
  display: inline-block;
`;

const City = ({ route, className }) => {
  const { result } = useDestination(route);

  if (result) {
    return <StyledCity className={className}>{result.city}</StyledCity>;
  }

  return null;
};

export { City };
