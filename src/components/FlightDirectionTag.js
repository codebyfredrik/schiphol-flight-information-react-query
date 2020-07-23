import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { FlightDirection } from './FlightDirection';

const StyledFlightDirectionTag = styled.span`
  display: inline-block;
  background-color: ${({ theme }) => theme.colors.bgDirectionTag};
  color: #ffd700;
  font-weight: bold;
  padding: 3px 5px;
  border-radius: 2px;
  font-size: 10px;
  line-height: 10px;
  transition: background-color var(--transition-time) ease-in;
`;

const FlightDirectionTag = ({ flightDirection, className }) => {
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

export { FlightDirectionTag };
