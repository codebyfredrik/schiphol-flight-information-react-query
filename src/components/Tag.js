import React from 'react';
import styled from 'styled-components';

const StyledTag = styled.span`
  display: inline-block;
  font-weight: bold;
  padding: 0.1rem 0.3rem;
  border-radius: 4px;
  text-transform: uppercase;
  font-size: 0.8rem;
  color: ${({ theme }) => theme.textTag};
  transition: color 150ms ease-in;
`;

export const Tag = ({ label, className }) => {
  return (
    <StyledTag className={className}>
      <span>{label}</span>
    </StyledTag>
  );
};
