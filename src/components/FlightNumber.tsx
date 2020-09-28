import React from 'react';
import styled from 'styled-components';

interface IFlightNumberProps extends React.HTMLAttributes<HTMLSpanElement> {
  flightName: string;
}

const StyledFlightNumber = styled.span`
  color: ${({ theme }) => theme.colors.text};
  font-size: 0.875rem;

  @media screen and (prefers-reduced-motion: no-preference) {
    transition: color var(--transition-time) ease-in;
  }
`;

const FlightNumber = ({
  flightName,
  ...restProps
}: IFlightNumberProps): JSX.Element => {
  return <StyledFlightNumber {...restProps}>{flightName}</StyledFlightNumber>;
};

export { FlightNumber };
