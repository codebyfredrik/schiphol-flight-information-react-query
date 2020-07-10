import React from 'react';
import styled from 'styled-components';
import { Date } from './Date';
import { PageCounter } from './PageCounter';

const StyledRowInformation = styled.li`
  /* border: 1px solid red; */
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
      {/* {index < 1 ? <PageCounter page={page} /> : null} */}
    </StyledRowInformation>
  );
};
