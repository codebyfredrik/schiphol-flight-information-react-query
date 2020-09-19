import React from 'react';
import styled from 'styled-components';
import { useFormatTime } from '../hooks/index';

export interface ITimeProps extends React.HTMLAttributes<HTMLSpanElement> {
  time: string;
  estimated?: string | null;
}

const StyledTime = styled.span`
  display: inline-block;
  color: ${({ theme }) => theme.colors.text};

  @media screen and (prefers-reduced-motion: no-preference) {
    transition: color var(--transition-time) ease-in;
  }
`;

const Time = ({ time, ...restProps }: ITimeProps): JSX.Element => {
  const { formattedTimestamp }: { formattedTimestamp: any } = useFormatTime(
    time,
    'HH:mm'
  );

  return <StyledTime {...restProps}>{formattedTimestamp}</StyledTime>;
};

export { Time };
