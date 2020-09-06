import React from 'react';
import styled from 'styled-components';
import { useFormatTime } from '../hooks/index';

interface ILastUpdatedProps {
  timestamp: string;
}

const StyledLastUpdated = styled.span`
  display: inline-block;
  font-size: 1rem;
  color: #0d49c0;
`;

const LastUpdated = ({
  timestamp,
  ...restProps
}: ILastUpdatedProps): JSX.Element => {
  const { formattedTimestamp } = useFormatTime(timestamp, 'HH:mm');

  return (
    <StyledLastUpdated
      {...restProps}
    >{`Last updated ${formattedTimestamp}`}</StyledLastUpdated>
  );
};

export { LastUpdated };
