import React from 'react';
import styled from 'styled-components';
import { Date } from './Date';

const StyledRowInformation = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  list-style-type: none;
  font-weight: bold;
  color: ${({ theme }) => theme.text};
  transition: color 150ms ease-in;
`;

export const RowInformation = ({ date, index, page }) => {
  return (
    <StyledRowInformation>
      <Date date={date} />
    </StyledRowInformation>
  );
};
