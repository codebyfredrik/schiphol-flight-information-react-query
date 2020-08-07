import React from 'react';
import styled from 'styled-components';
import { Time } from './../components/Time';
import { ScheduleTime } from './../styles/Styles';

const StyledDepartureTime = styled.div`
  display: inline-block;
  font-size: 1.125rem;
  font-weight: 900;
`;

const ActualDepartureTime = styled(Time)`
  font-weight: bold;

  @media screen and (min-width: 490px) {
    margin-left: 0.5rem;
  }
`;

const DepartureTime = ({ scheduleDateTime, actualOffBlockTime, className }) => {
  let estimatedTime = null;

  if (actualOffBlockTime) estimatedTime = actualOffBlockTime;

  return (
    <StyledDepartureTime className={className}>
      <ScheduleTime time={scheduleDateTime} estimated={estimatedTime} />
      {estimatedTime && <ActualDepartureTime time={estimatedTime} />}
    </StyledDepartureTime>
  );
};

export { DepartureTime };
