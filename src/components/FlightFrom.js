import React from 'react';
import styled from 'styled-components';
import { useAirline } from './../hooks/useAirline';

const StyledFlightFrom = styled.span`
  display: inline-block;
  color: ${({ theme }) => theme.colors.text};
`;

const FlightFrom = ({ prefixICAO, flightName, direction, ...restProps }) => {
  const { result: airline } = useAirline(prefixICAO);

  return (
    <>
      {airline ? (
        <StyledFlightFrom
          {...restProps}
        >{`${airline.publicName} (${flightName}) flight ${direction}`}</StyledFlightFrom>
      ) : (
        <StyledFlightFrom
          {...restProps}
        >{`Flight ${direction}`}</StyledFlightFrom>
      )}
    </>
  );
};

export { FlightFrom };
