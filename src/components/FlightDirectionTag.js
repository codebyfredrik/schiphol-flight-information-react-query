import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useFlightDirection } from './../hooks/index';

const StyledFlightDirectionTag = styled.span`
  display: inline-block;
  background-color: ${({ theme }) => theme.colors.bgDirectionTag};
  color: ${({ theme }) => theme.colors.yellow};
  font-weight: bold;
  padding: 0px 5px;
  border-radius: 2px;
  font-size: 10px;
  line-height: 16px;
  height: 16px;

  @media screen and (prefers-reduced-motion: no-preference) {
    transition-property: background-color, color;
    transition-duration: var(--transition-time);
    transition-timing-function: ease-in;
  }
`;

const FlightDirectionTag = ({ flightDirection, ...restProps }) => {
  const text = useFlightDirection(flightDirection);

  return (
    <StyledFlightDirectionTag {...restProps}>{text}</StyledFlightDirectionTag>
  );
};

FlightDirectionTag.propTypes = {
  flightDirection: PropTypes.string,
};

export { FlightDirectionTag };
