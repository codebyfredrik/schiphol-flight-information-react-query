import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { FlightDirection } from './FlightDirection';

const StyledFlightDirectionTag = styled.div`
  display: inline-block;
  background-color: ${({ theme }) => theme.bgDirectionTag};
  color: #ffd700;
  font-weight: bold;
  padding: 0.1rem 0.3rem;
  border-radius: 2px;
  font-size: 0.6rem;
  transition: background-color var(--transition-time) ease-in;
`;

export const FlightDirectionTag = ({ flightDirection, className }) => {
  return (
    <StyledFlightDirectionTag className={className}>
      <FlightDirection flightDirection={flightDirection} />
    </StyledFlightDirectionTag>
  );
};

FlightDirectionTag.propTypes = {
  flightDirection: PropTypes.string,
  className: PropTypes.string,
};
