import React from 'react';
import styled from 'styled-components';
import { Time } from './../components/Time';
import { ScheduleTime } from './../styles/Styles';

const StyledDepartureTime = styled.div`
  display: inline-block;
  font-size: 1.125rem;
  font-weight: 900;
`;

const ActualTime = styled(Time)`
  font-weight: bold;
  margin-left: 0.5rem;
`;

const DepartureTime = ({ scheduleDateTime, actualOffBlockTime, className }) => {
  // let actualTime = null;

  // if (actualOffBlockTime) actualTime = actualOffBlockTime;

  return (
    <StyledDepartureTime className={className}>
      <ScheduleTime time={scheduleDateTime} estimated={actualOffBlockTime} />
      {actualOffBlockTime && <ActualTime time={actualOffBlockTime} />}
    </StyledDepartureTime>
  );
};

export { DepartureTime };
