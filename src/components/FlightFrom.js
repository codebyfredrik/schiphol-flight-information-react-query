import React from 'react';
import styled from 'styled-components';
import { useAirline } from './../hooks/useAirline';

const StyledFlightFrom = styled.span`
  display: block;
`;

const FlightFrom = ({ prefixICAO, flightName, className }) => {
  const { result: airline } = useAirline(prefixICAO);

  return (
    <>
      {airline && (
        <StyledFlightFrom
          className={className}
        >{`${airline.publicName} (${flightName}) flight from`}</StyledFlightFrom>
      )}
    </>
  );
};

export { FlightFrom };
