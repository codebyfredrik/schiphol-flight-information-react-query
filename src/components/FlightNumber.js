import React from 'react';
import styled from 'styled-components';

const StyledFlightNumber = styled.span`
  color: #262b2f;
`;

export const FlightNumber = ({ flightName, className }) => {
  return (
    <StyledFlightNumber className={className}>{flightName}</StyledFlightNumber>
  );
};
