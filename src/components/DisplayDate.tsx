import React from 'react';
import styled from 'styled-components';
import moment from 'moment';
import { useFormatTime } from '../hooks/index';

interface IDisplayDateProps {
  date: string;
}

export const StyledDate = styled.div`
  color: ${({ theme }) => theme.colors.text};
  font-weight: bold;

  @media screen and (prefers-reduced-motion: no-preference) {
    transition: color var(--transition-time) ease-in;
  }
`;

const DisplayDate = ({
  date,
  ...restProps
}: IDisplayDateProps): JSX.Element => {
  const { momentTimestamp, formattedTimestamp } = useFormatTime(date, 'MMMM D');
  const today = moment().endOf('day');
  const tomorrow = moment().add(1, 'day').endOf('day');
  let phrase = '';

  if (momentTimestamp !== null) {
    if (momentTimestamp < today) {
      phrase = 'Today, ';
    } else if (momentTimestamp < tomorrow) {
      phrase = 'Tomorrow, ';
    }
  }

  return (
    <StyledDate {...restProps}>{`${phrase}${formattedTimestamp}`}</StyledDate>
  );
};

export { DisplayDate };
