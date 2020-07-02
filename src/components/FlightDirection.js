import React from 'react';

const FlightDirection = ({ flightDirection }) => {
  return <span>{flightDirection === 'A' ? 'Arrival' : 'Departure'}</span>;
};

export default FlightDirection;
