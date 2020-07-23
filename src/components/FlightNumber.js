import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledFlightNumber = styled.span`
  color: ${({ theme }) => theme.colors.text};
  font-size: 0.875rem;
  transition: color var(--transition-time) ease-in;
`;

const FlightNumber = ({ flightName, className }) => {
  return (
    <StyledFlightNumber className={className}>{flightName}</StyledFlightNumber>
  );
};

FlightNumber.propTypes = {
  flightName: PropTypes.string,
  className: PropTypes.string,
};

export { FlightNumber };
