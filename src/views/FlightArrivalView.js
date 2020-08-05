import React from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { useFlight } from '../hooks/index';
import { FlightFrom } from './../components/FlightFrom';
import { City } from './../components/City';

const StyledCity = styled(City)`
  display: block;
  font-size: 3.6rem;
  margin: 0;
  padding: 0;
  border: 1px solid red;
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
      {flight?.route && <StyledCity route={flight.route} />}
    </>
  );
};

export { FlightArrivalView };
