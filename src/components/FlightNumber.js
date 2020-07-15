import React from 'react';
import styled from 'styled-components';

const StyledFlightNumber = styled.span`
  color: ${({ theme }) => theme.text};
  font-size: 0.875rem;
  transition: color var(--transition-time) ease-in;
`;

export const FlightNumber = ({ flightName, className }) => {
  return (
    <StyledFlightNumber className={className}>{flightName}</StyledFlightNumber>
  );
};
