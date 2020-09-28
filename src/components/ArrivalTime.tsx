import React from 'react';
import styled from 'styled-components';
import { Time } from './Time';
import { ScheduleTime } from '../styles/index';

interface IArrivalTimeProps extends React.HTMLAttributes<HTMLDivElement> {
  scheduleDateTime: string;
  estimatedLandingTime: string;
  actualLandingTime: string;
}

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
  ...restProps
}: IArrivalTimeProps): JSX.Element => {
  let estimatedTime: string = '';
  let actualTime: string = '';

  if (estimatedLandingTime) estimatedTime = estimatedLandingTime;
  if (actualLandingTime) actualTime = actualLandingTime;

  return (
    <StyledArrivalTime {...restProps}>
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
