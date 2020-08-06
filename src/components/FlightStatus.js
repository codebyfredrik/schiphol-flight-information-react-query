import React from 'react';
import styled from 'styled-components';
import { darken } from 'polished';
import { useFlightStatus } from './../hooks/index';
import { Tag } from './Tag';

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
  className,
}) => {
  const { flightStatus } = useFlightStatus(publicFlightState, flightDirection);

  return flightStatus.map((item) => (
    <StyledFlightStatus
      className={className}
      backgroundColor={item.backgroundColor}
      isDarkMode={isDarkMode}
      label={item.status}
    />
  ));
};

export { FlightStatus };
