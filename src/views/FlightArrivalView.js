import React from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { useFlight } from '../hooks/index';
import { FlightFrom } from './../components/FlightFrom';
import { City } from './../components/City';

const StyledCity = styled.span`
  display: block;
  font-size: 3.6rem;
  font-weight: 600;
  margin: 1rem 0;
`;

const FlightArrivalView = () => {
  const { id } = useParams();
  const { result: flight } = useFlight(id);

  console.log(flight);

  return (
    <>
      {flight && (
        <FlightFrom
          prefixICAO={flight.prefixICAO}
          flightName={flight.flightName}
        />
      )}
      {flight?.route && (
        <StyledCity>
          <City route={flight.route} />
        </StyledCity>
      )}
    </>
  );
};

export { FlightArrivalView };
