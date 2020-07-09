import React from 'react';
import styled from 'styled-components';

const StyledFlightNumber = styled.span`
  /* color: #262b2f; */
  color: ${({ theme }) => theme.text};
  font-size: 0.875rem;
  transition: color 150ms ease-in;
`;

export const FlightNumber = ({ flightName, className }) => {
  return (
    <StyledFlightNumber className={className}>{flightName}</StyledFlightNumber>
  );
};
