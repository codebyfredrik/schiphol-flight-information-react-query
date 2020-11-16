import React from 'react';
import styled from 'styled-components';
import { useAirline } from '../hooks/useAirline';

interface IFlightFromProps extends React.HTMLAttributes<HTMLSpanElement> {
  prefixICAO: string;
  flightName: string;
  direction: string;
}

const StyledFlightFrom = styled.span`
  display: inline-block;
  color: ${({ theme }) => theme.colors.text};
`;

const FlightFrom = ({
  prefixICAO,
  flightName,
  direction,
  ...restProps
}: IFlightFromProps): JSX.Element => {
  const { result: airline } = useAirline(prefixICAO);
  return (
    <>
      {airline && flightName && direction ? (
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
