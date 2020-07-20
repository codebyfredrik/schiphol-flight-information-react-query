import React from 'react';
import PropTypes from 'prop-types';

const FlightDirection = ({ flightDirection, className }) => {
  let phrase;

  if (flightDirection === 'A') {
    phrase = 'Arrival';
  } else if (flightDirection === 'D') {
    phrase = 'Departure';
  }

  return <span className={className}>{phrase}</span>;
};

FlightDirection.propTypes = {
  flightDirection: PropTypes.string,
  className: PropTypes.string,
};

export { FlightDirection };
