import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { DisplayDate } from './DisplayDate';

const StyledRowInformation = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  list-style-type: none;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.text};

  @media screen and (prefers-reduced-motion: no-preference) {
    transition: color var(--transition-time) ease-in;
  }
`;

const RowInformation = ({ date }) => {
  return (
    <StyledRowInformation>
      <DisplayDate date={date} />
    </StyledRowInformation>
  );
};

RowInformation.propTypes = {
  date: PropTypes.string,
  index: PropTypes.number,
  page: PropTypes.number,
};

export { RowInformation };
