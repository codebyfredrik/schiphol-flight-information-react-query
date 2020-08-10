import React from 'react';
import styled from 'styled-components';
import { useAirline } from './../hooks/useAirline';

const StyledFlightFrom = styled.span`
  display: inline-block;
  color: ${({ theme }) => theme.colors.text};
`;

const FlightFrom = ({ prefixICAO, flightName, direction, className }) => {
  const { result: airline } = useAirline(prefixICAO);

  return (
    <>
      {airline ? (
        <StyledFlightFrom
          className={className}
        >{`${airline.publicName} (${flightName}) flight ${direction}`}</StyledFlightFrom>
      ) : (
        <StyledFlightFrom
          className={className}
        >{`Flight ${direction}`}</StyledFlightFrom>
      )}
    </>
  );
};

export { FlightFrom };
