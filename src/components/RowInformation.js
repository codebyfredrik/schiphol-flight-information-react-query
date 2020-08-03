import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { DisplayDate } from './DisplayDate';
import { UpdateIndicator } from './../components/UpdateIndicator';

const StyledRowInformation = styled.li`
  display: flex;
  justify-content: space-between;
  color: ${({ theme }) => theme.colors.text};
  list-style-type: none;
  font-weight: bold;

  @media screen and (prefers-reduced-motion: no-preference) {
    transition: color var(--transition-time) ease-in;
  }
`;

const Update = styled(UpdateIndicator)`
  margin-left: 5px;
`;

const RowInformation = ({ date, isFetching }) => {
  return (
    <StyledRowInformation>
      <DisplayDate date={date} />
      {isFetching && <Update />}
    </StyledRowInformation>
  );
};

RowInformation.propTypes = {
  date: PropTypes.string,
  index: PropTypes.number,
  page: PropTypes.number,
};

export { RowInformation };
