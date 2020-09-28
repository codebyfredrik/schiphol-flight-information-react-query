import React from 'react';
import { useAircraft } from './../hooks/index';
import { Box, Text, SubHeading, HeadingDetails } from './../styles/index';

interface IAircraftDetailsProps {
  aircraftRegistration: string;
  aircraftType: string;
}

const AircraftDetails = ({
  aircraftRegistration,
  aircraftType,
  ...restProps
}: IAircraftDetailsProps): JSX.Element => {
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
