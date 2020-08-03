import React from 'react';
import styled, { keyframes } from 'styled-components';

const StyledUpdateIndicator = styled.div`
  display: inline-block;
`;

const showHideDot = keyframes`
  0% { opacity: 0; }
  50% { opacity: 1; }
  60% { opacity: 1; }
  100% { opacity: 0; }
`;

const Dot = styled.span`
  display: inline-block;
  position: relative;
  height: 4px;
  width: 4px;
  border-radius: 50%;
  margin-right: 0.15em;
  font-size: 2em;
  opacity: 1;
  background-color: ${({ theme }) => theme.colors.pageHeading};
  animation: ${showHideDot} 1s ease-in-out infinite;

  &.one {
    animation-delay: 0.15s;
  }
  &.two {
    animation-delay: 0.25s;
  }
  &.three {
    animation-delay: 0.35s;
  }
`;

const UpdateIndicator = ({ className }) => {
  return (
    <StyledUpdateIndicator className={className}>
      <Dot className="one" />
      <Dot className="two" />
      <Dot className="three" />
    </StyledUpdateIndicator>
  );
};

export { UpdateIndicator };
