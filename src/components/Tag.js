import React from 'react';
import styled from 'styled-components';

const StyledTag = styled.div`
  display: inline-block;
  background-color: #262b2f;
  color: #ffffff;
  font-weight: bold;
  padding: 0.1rem 0.3rem;
  border-radius: 4px;
  text-transform: uppercase;
  font-size: 0.8rem;
`;

const Wrapper = styled.span``;

export const Tag = ({ label, className }) => {
  return (
    <div>
      <StyledTag className={className}>
        <Wrapper>{label}</Wrapper>
      </StyledTag>
    </div>
  );
};
