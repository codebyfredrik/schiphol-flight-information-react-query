import React from 'react';
import styled, { keyframes } from 'styled-components';
import { ISvgIcon } from './interfaces';

const StyledSun = styled.svg`
  transform: rotate(90deg);

  &:hover {
    cursor: pointer;
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: scale(0);
  }

  to {
    visibility: visible;
    opacity: 1;
    transform: scale(1)
  }
`;

const Circle1 = styled.circle`
  visibility: hidden;
  transform-origin: center center;
  fill: black;
  animation: ${fadeIn};
  animation-duration: 600ms;
  animation-delay: 100ms;
  animation-fill-mode: forwards;
  animation-timing-function: ease-out;
`;

const Circle2 = styled.circle`
  visibility: hidden;
  transform-origin: center center;
  fill: black;
  animation: ${fadeIn};
  animation-duration: 600ms;
  animation-delay: 200ms;
  animation-fill-mode: forwards;
  animation-timing-function: ease-out;
`;

const Circle3 = styled.circle`
  visibility: hidden;
  transform-origin: center center;
  fill: black;
  animation: ${fadeIn};
  animation-duration: 600ms;
  animation-delay: 300ms;
  animation-fill-mode: forwards;
  animation-timing-function: ease-out;
`;

const Circle4 = styled.circle`
  visibility: hidden;
  transform-origin: center center;
  fill: black;
  animation: ${fadeIn};
  animation-duration: 600ms;
  animation-delay: 400ms;
  animation-fill-mode: forwards;
  animation-timing-function: ease-out;
`;

const Circle5 = styled.circle`
  visibility: hidden;
  transform-origin: center center;
  fill: black;
  animation: ${fadeIn};
  animation-duration: 600ms;
  animation-delay: 500ms;
  animation-fill-mode: forwards;
  animation-timing-function: ease-out;
`;

const Circle6 = styled.circle`
  visibility: hidden;
  transform-origin: center center;
  fill: black;
  animation: ${fadeIn};
  animation-duration: 600ms;
  animation-delay: 600ms;
  animation-fill-mode: forwards;
  animation-timing-function: ease-out;
`;

const Sun = ({ fillColor, ...restProps }: ISvgIcon): JSX.Element => (
  <StyledSun width="20" height="20" viewBox="0 0 20 20" {...restProps}>
    <mask id="moon-mask-iefr">
      <rect x="0" y="0" width="20" height="20" fill="#FFF"></rect>
      <circle cx="25" cy="0" r="8" fill="black"></circle>
    </mask>
    <circle
      cx="10"
      cy="10"
      fill="black"
      mask="url(#moon-mask-iefr)"
      r="5"
    ></circle>
    <g>
      <Circle1 cx="18" cy="10" r="1.5"></Circle1>
      <Circle2 cx="14" cy="16.928203230275509" r="1.5"></Circle2>
      <Circle3 cx="6.000000000000002" cy="16.92820323027551" r="1.5"></Circle3>
      <Circle4 cx="2" cy="10.000000000000002" r="1.5"></Circle4>
      <Circle5 cx="5.9999999999999964" cy="3.071796769724492" r="1.5"></Circle5>
      <Circle6 cx="14" cy="3.0717967697244912" r="1.5"></Circle6>
    </g>
  </StyledSun>
);

export { Sun };
