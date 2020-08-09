import React from 'react';
import styled from 'styled-components';
import { useFormatTime } from './../hooks/index';

const StyledLastUpdated = styled.span`
  color: ${({ theme }) => theme.colors.text};
`;

const LastUpdated = ({ timestamp, className }) => {
  const { formattedTimestamp } = useFormatTime(timestamp, 'HH:mm');
  return (
    <StyledLastUpdated
      className={className}
    >{`Last updated ${formattedTimestamp}`}</StyledLastUpdated>
  );
};

export { LastUpdated };
