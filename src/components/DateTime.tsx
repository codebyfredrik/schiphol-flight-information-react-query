import React from 'react';
import styled from 'styled-components';
import { useFormatTime } from '../hooks/index';

interface IDateTimeProps extends React.HTMLAttributes<HTMLSpanElement> {
  date: string;
  format: string;
}

const StyledDateTime = styled.span`
  color: ${({ theme }) => theme.colors.text};

  @media screen and (prefers-reduced-motion: no-preference) {
    transition: color var(--transition-time) ease-in;
  }
`;

const DateTime = ({
  date,
  format,
  ...restProps
}: IDateTimeProps): JSX.Element => {
  const { formattedTimestamp } = useFormatTime(date, format);

  return (
    <StyledDateTime {...restProps}>{`${formattedTimestamp}`}</StyledDateTime>
  );
};

export { DateTime };
