import React from 'react';
import styled from 'styled-components';
import { FlightDirection } from './FlightDirection';

const StyledFlightDirectionTag = styled.div`
  display: inline-block;
  background-color: ${({ theme }) => theme.bgDirectionTag};
  color: #ffd700;
  font-weight: bold;
  padding: 0.1rem 0.3rem;
  border-radius: 2px;
  /* text-transform: uppercase; */
  font-size: 0.6rem;
  transition: background-color 150ms ease-in;
`;

export const FlightDirectionTag = ({ flightDirection, className }) => {
  return (
    <StyledFlightDirectionTag className={className}>
      <FlightDirection flightDirection={flightDirection} />
    </StyledFlightDirectionTag>
  );
};
