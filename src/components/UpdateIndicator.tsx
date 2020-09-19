import React from 'react';
import styled, { keyframes } from 'styled-components';

interface IUpdateIndicator extends React.HTMLAttributes<HTMLDivElement> {}

const StyledUpdateIndicator = styled.div`
  display: inline-block;
`;

const showHideDot = keyframes`
  0% { opacity: 0; transform: scale(0) }
  50% { opacity: 1; transform: scale(1.4) }
  60% { opacity: 1; transform: scale(1.4) }
  100% { opacity: 0; transform: scale(0)}
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
  background-color: ${({ theme }) => theme.colors.text};
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

const UpdateIndicator = ({ ...restProps }: IUpdateIndicator): JSX.Element => {
  return (
    <StyledUpdateIndicator {...restProps}>
      <Dot className="one" />
      <Dot className="two" />
      <Dot className="three" />
    </StyledUpdateIndicator>
  );
};

export { UpdateIndicator };
