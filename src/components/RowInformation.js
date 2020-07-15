import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Date } from './Date';

const StyledRowInformation = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  list-style-type: none;
  font-weight: bold;
  color: ${({ theme }) => theme.text};
  transition: color var(--transition-time) ease-in;
`;

export const RowInformation = ({ date, index, page }) => {
  return (
    <StyledRowInformation>
      <Date date={date} />
    </StyledRowInformation>
  );
};

RowInformation.propTypes = {
  date: PropTypes.string,
  index: PropTypes.number,
  page: PropTypes.number,
};
