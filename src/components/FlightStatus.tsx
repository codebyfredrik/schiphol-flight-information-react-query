import React from 'react';
import styled from 'styled-components';
import { darken } from 'polished';
import { useFlightStatus } from '../hooks/index';
import { Tag } from './Tag';

interface IFlightStatus {
  publicFlightState: any;
  flightDirection: string;
  isDarkMode: boolean;
}

const StyledFlightStatus = styled(Tag)`
  font-size: 12px;
  height: 18px;
  line-height: 18px;
  background-color: ${(props) =>
    props.isDarkMode
      ? darken(0.1, props.backgroundColor)
      : props.backgroundColor};
`;

const FlightStatus = ({
  publicFlightState,
  flightDirection,
  isDarkMode,
  ...restProps
}: IFlightStatus) => {
  const { flightStatus } = useFlightStatus(publicFlightState, flightDirection);

  return flightStatus.map((item: any) => (
    <StyledFlightStatus
      key={item.status}
      backgroundColor={item.backgroundColor}
      isDarkMode={isDarkMode}
      label={item.status}
      {...restProps}
    />
  ));
};

export { FlightStatus };
