import React from 'react';
import styled from 'styled-components';
import Airline from './Airline';
import Destination from './Destination';
import FlightDirection from './FlightDirection';

const StyledFlight = styled.li`
  display: grid;
  /* grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); */
  grid-template-columns: 0.3fr 0.5fr 0.3fr 0.3fr 0.3fr 0.5fr 0.5fr;
  list-style-type: none;
  /* box-shadow: rgba(0, 0, 0, 0.09) -1px 0px 10px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  background-color: rgba(255, 255, 255, 1);
  border-radius: 4px;
  padding: 0.5rem; */
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
