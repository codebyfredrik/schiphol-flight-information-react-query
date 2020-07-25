import React from 'react';
import styled from 'styled-components';
import moment from 'moment';
import PropTypes from 'prop-types';

export const StyledDate = styled.div`
  color: ${({ theme }) => theme.colors.text};
  font-weight: bold;

  @media screen and (prefers-reduced-motion: no-preference) {
    transition: color var(--transition-time) ease-in;
  }
`;

const DisplayDate = ({ date }) => {
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

DisplayDate.propTypes = {
  date: PropTypes.string,
};

export { DisplayDate };
