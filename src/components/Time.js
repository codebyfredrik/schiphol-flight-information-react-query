import React from 'react';
import styled from 'styled-components';

const StyledTime = styled.span`
  display: inline-block;
  color: ${({ theme }) => theme.text};
  transition: color var(--transition-time) ease-in;
`;

export const Time = ({ time, className }) => {
  const formattedTime = time.split(':');

  return (
    <StyledTime
      className={className}
    >{`${formattedTime[0]}:${formattedTime[1]}`}</StyledTime>
  );
};
