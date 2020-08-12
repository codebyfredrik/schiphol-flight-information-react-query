import React from 'react';
import styled from 'styled-components';
import { useAircraft } from './../hooks/index';

const StyledAircraftDetails = styled.div`
  width: 50%;
  background-color: ${({ theme }) => theme.colors.cardBackground};
  padding: 1.25rem;
  margin: 2rem 0;
  border-radius: 4px;
`;

const SubHeading = styled.h4`
  color: ${({ theme }) => theme.colors.text};
  margin: 1rem 0 0.5rem 0;
  font-weight: 600;
`;

const Details = styled.span`
  color: ${({ theme }) => theme.colors.text};
  display: inline-block;
`;

const AircraftDetails = ({
  aircraftRegistration,
  aircraftType,
  ...restProps
}) => {
  const { result: aircraft, isLoading } = useAircraft(aircraftType);
  console.log(aircraft);
  return (
    <StyledAircraftDetails {...restProps}>
      <h3>Aircraft details</h3>
      <SubHeading>Type</SubHeading>
      {!isLoading &&
        aircraft.aircraftTypes.map((item) => (
          <Details key={item.longDescription}>{item.longDescription}</Details>
        ))}
      <SubHeading>Registration</SubHeading>
      <Details>{aircraftRegistration}</Details>
    </StyledAircraftDetails>
  );
};

export { AircraftDetails };
