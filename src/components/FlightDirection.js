import React from 'react';

export const FlightDirection = ({ flightDirection, className }) => {
  return (
    <span className={className}>
      {flightDirection === 'A' ? 'Arrival' : 'Departure'}
    </span>
  );
};
