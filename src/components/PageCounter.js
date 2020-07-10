import React from 'react';
import styled from 'styled-components';

const StyledPageCounter = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1.7rem;
  height: 1.7rem;
  /* border-radius: 50%; */
  border-radius: 4px;
  font-size: 0.7rem;
  background-color: ${({ theme }) => theme.pageCounterBg};
  color: ${({ theme }) => theme.text};
  transition-property: color, background-color;
  transition-duration: 150ms;
  transition-timing-function: ease-in;
`;

export const PageCounter = ({ page }) => {
  return (
    <StyledPageCounter>
      <span>{page + 1}</span>
    </StyledPageCounter>
  );
};
