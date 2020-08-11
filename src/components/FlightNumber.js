import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledFlightNumber = styled.span`
  color: ${({ theme }) => theme.colors.text};
  font-size: 0.875rem;

  @media screen and (prefers-reduced-motion: no-preference) {
    transition: color var(--transition-time) ease-in;
  }
`;

const FlightNumber = ({ flightName, ...restProps }) => {
  return <StyledFlightNumber {...restProps}>{flightName}</StyledFlightNumber>;
};

FlightNumber.propTypes = {
  flightName: PropTypes.string,
};

export { FlightNumber };
