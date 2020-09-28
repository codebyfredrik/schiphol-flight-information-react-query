import React from 'react';
import { Box, Text, SubHeading, HeadingDetails } from '../styles/index';
import { Time } from './Time';

interface IBoardingDetailsProps {
  expectedTimeBoarding: string;
  expectedTimeGateClosing: string;
  expectedTimeGateOpen: string;
}

const BoardingDetails = ({
  expectedTimeBoarding,
  expectedTimeGateClosing,
  expectedTimeGateOpen,
  ...restProps
}: IBoardingDetailsProps): JSX.Element => {
  console.log('expectedTimeBoarding', expectedTimeBoarding);
  console.log('expectedTimeGateClosing', expectedTimeGateClosing);
  console.log('expectedTimeGateOpen', expectedTimeGateOpen);

  return (
    <Box {...restProps}>
      <HeadingDetails>Boarding details</HeadingDetails>
      {expectedTimeGateOpen && (
        <>
          <SubHeading>Gate open</SubHeading>
          <Text>
            <Time time={expectedTimeGateOpen} />
          </Text>
        </>
      )}
      {expectedTimeBoarding && (
        <>
          <SubHeading>Boarding</SubHeading>
          <Text>
            <Time time={expectedTimeBoarding} />
          </Text>
        </>
      )}
      {expectedTimeGateClosing && (
        <>
          <SubHeading>Gate closing</SubHeading>
          <Text>
            <Time time={expectedTimeGateClosing} />
          </Text>
        </>
      )}
    </Box>
  );
};

export { BoardingDetails };
