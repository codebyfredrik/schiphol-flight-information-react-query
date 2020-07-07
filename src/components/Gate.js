import React from 'react';
import styled from 'styled-components';

const StyledGate = styled.span`
  display: inline-block;
  position: relative;
  text-decoration: none;
`;

const GateNumber = styled.span`
  display: inline-block;
  background-color: #ffd700;
  color: #262b2f;
  line-height: 1;
  margin-bottom: 1px;
  padding: 7px 9px;
  position: relative;
  border-radius: 4px;
  font-weight: bold;
`;

export const Gate = ({ gate, className }) => {
  return (
    <StyledGate className={className}>
      <GateNumber>{gate}</GateNumber>
    </StyledGate>
  );
};
