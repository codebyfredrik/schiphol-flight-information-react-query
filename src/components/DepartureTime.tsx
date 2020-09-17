import React from 'react';
import styled from 'styled-components';
import { Time } from './Time';
import { ScheduleTime } from '../styles/index';

interface IDepartureTimeProps {
  scheduleDateTime: string;
  actualOffBlockTime: string;
}

const StyledDepartureTime = styled.div`
  display: inline-block;
  font-size: 1.125rem;
`;

const ActualTime = styled(Time)`
  margin-left: 0.5rem;
`;

const DepartureTime = ({
  scheduleDateTime,
  actualOffBlockTime,
  ...restProps
}: IDepartureTimeProps): JSX.Element => {
  return (
    <StyledDepartureTime {...restProps}>
      <ScheduleTime time={scheduleDateTime} estimated={actualOffBlockTime} />
      {actualOffBlockTime && <ActualTime time={actualOffBlockTime} />}
    </StyledDepartureTime>
  );
};

export { DepartureTime };
