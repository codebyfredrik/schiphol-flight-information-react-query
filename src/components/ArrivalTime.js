import React from 'react';
import styled from 'styled-components';
import { Time } from './../components/Time';
import { ScheduleTime } from './../styles/index';

const StyledArrivalTime = styled.div`
  display: inline-block;
  font-size: 1.125rem;
  font-weight: 900;
`;

const StyledTime = styled(Time)`
  margin-left: 0.5rem;
`;

const ArrivalTime = ({
  scheduleDateTime,
  estimatedLandingTime,
  actualLandingTime,
  className,
}) => {
  let estimatedTime = null;
  let actualTime = null;

  if (estimatedLandingTime) estimatedTime = estimatedLandingTime;
  if (actualLandingTime) actualTime = actualLandingTime;

  return (
    <StyledArrivalTime className={className}>
      <>
        <ScheduleTime time={scheduleDateTime} estimated={estimatedTime} />
        {actualLandingTime ? (
          <StyledTime time={actualTime} />
        ) : estimatedTime ? (
          <StyledTime time={estimatedTime} />
        ) : null}
      </>
    </StyledArrivalTime>
  );
};

export { ArrivalTime };
