import React from 'react';
import styled from 'styled-components';
import moment from 'moment';
import { useFormatTime } from './../hooks/index';
import PropTypes from 'prop-types';

export const StyledDate = styled.div`
  color: ${({ theme }) => theme.colors.text};
  font-weight: bold;

  @media screen and (prefers-reduced-motion: no-preference) {
    transition: color var(--transition-time) ease-in;
  }
`;

const DisplayDate = ({ date }) => {
  const { momentTimestamp, formattedTimestamp } = useFormatTime(date, 'MMMM D');
  const today = moment().endOf('day');
  const tomorrow = moment().add(1, 'day').endOf('day');
  let phrase = '';

  if (momentTimestamp < today) {
    phrase = 'Today, ';
  } else if (momentTimestamp < tomorrow) {
    phrase = 'Tomorrow, ';
  }

  return <StyledDate>{`${phrase}${formattedTimestamp}`}</StyledDate>;
};

DisplayDate.propTypes = {
  date: PropTypes.string,
};

export { DisplayDate };
