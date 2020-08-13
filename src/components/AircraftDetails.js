import React from 'react';
import { useAircraft } from './../hooks/index';
import { Box, Text, SubHeading, HeadingDetails } from './../styles/index';

const AircraftDetails = ({
  aircraftRegistration,
  aircraftType,
  ...restProps
}) => {
  const { result: aircraft, isLoading } = useAircraft(aircraftType);

  return (
    <Box {...restProps}>
      <HeadingDetails>Aircraft details</HeadingDetails>
      <SubHeading>Type</SubHeading>
      {isLoading ? (
        <Text>Loading...</Text>
      ) : (
        <Text>{aircraft.aircraftTypes[0].shortDescription}</Text>
      )}
      <SubHeading>Registration</SubHeading>
      <Text>{aircraftRegistration}</Text>
    </Box>
  );
};

export { AircraftDetails };
