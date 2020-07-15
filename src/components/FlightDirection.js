import React from 'react';
import PropTypes from 'prop-types';

export const FlightDirection = ({ flightDirection, className }) => {
  return (
    <span className={className}>
      {flightDirection === 'A' ? 'Arrival' : 'Departure'}
    </span>
  );
};

FlightDirection.propTypes = {
  flightDirection: PropTypes.string,
  className: PropTypes.string,
};
