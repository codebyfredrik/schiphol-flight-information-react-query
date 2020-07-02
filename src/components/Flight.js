import React from 'react';
import styled from 'styled-components';
import Airline from './Airline';
import Destination from './Destination';
import FlightDirection from './FlightDirection';

const StyledFlight = styled.div`
  display: grid;
  grid-template-columns: 150px 1.3fr repeat(5, 1fr);
`;

const Flight = ({ flight }) => {
  const {
    flightDirection,
    scheduleTime,
    prefixICAO,
    flightName,
    aircraftType,
    aircraftRegistration,
    route,
  } = flight;

  return (
    <StyledFlight>
      <FlightDirection flightDirection={flightDirection} />
      <Destination route={route} />
      <span>{scheduleTime}</span>
      <span>{flightName}</span>
      <span>{aircraftType.iataMain}</span>
      <span>{aircraftRegistration}</span>
      <Airline prefixICAO={prefixICAO} />
    </StyledFlight>
  );
};

export default Flight;
