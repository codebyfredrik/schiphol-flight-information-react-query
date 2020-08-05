import React from 'react';
import styled from 'styled-components';
import { Time } from './../components/Time';

const StyledArrivalTime = styled.div`
  display: inline-block;
  font-size: 1.125rem;
  font-weight: 900;
`;

// const ActualArrivalTime = styled(Time)`
//   font-weight: bold;
// `;

const ArrivalTime = ({ scheduleDateTime, estimatedTime, className }) => {
  return (
    <StyledArrivalTime className={className}>Arrival time</StyledArrivalTime>
  );
};

export { ArrivalTime };
