import React from 'react';
import styled from 'styled-components';
import moment from 'moment';

export const StyledDate = styled.div`
  list-style-type: none;
  font-weight: bold;
  color: ${({ theme }) => theme.text};
  transition: color 150ms ease-in;
`;

export const Date = ({ date }) => {
  const rawDate = moment(date);
  const today = moment().endOf('day');
  const tomorrow = moment().add(1, 'day').endOf('day');
  let phrase = '';

  if (rawDate < today) {
    phrase = 'Today, ';
  } else if (rawDate < tomorrow) {
    phrase = 'Tomorrow, ';
  }

  return <StyledDate>{`${phrase}${rawDate.format('D MMMM')}`}</StyledDate>;
};
