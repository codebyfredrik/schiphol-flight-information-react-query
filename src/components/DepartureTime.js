import React from 'react';
import styled from 'styled-components';
import { Time } from './../components/Time';
import { ScheduleTime } from './../styles/index';

const StyledDepartureTime = styled.div`
  display: inline-block;
  font-size: 1.125rem;
  font-weight: 900;
`;

const ActualTime = styled(Time)`
  margin-left: 0.5rem;
`;

const DepartureTime = ({
  scheduleDateTime,
  actualOffBlockTime,
  ...restProps
}) => {
  // let actualTime = null;

  // if (actualOffBlockTime) actualTime = actualOffBlockTime;

  return (
    <StyledDepartureTime {...restProps}>
      <ScheduleTime time={scheduleDateTime} estimated={actualOffBlockTime} />
      {actualOffBlockTime && <ActualTime time={actualOffBlockTime} />}
    </StyledDepartureTime>
  );
};

export { DepartureTime };
