import React from 'react';
import styled from 'styled-components';

const StyledTime = styled.span`
  display: inline-block;
  color: #262b2f;
`;

export const Time = ({ time, className }) => {
  const formattedTime = time.split(':');

  return (
    <StyledTime
      className={className}
    >{`${formattedTime[0]}:${formattedTime[1]}`}</StyledTime>
  );
};
