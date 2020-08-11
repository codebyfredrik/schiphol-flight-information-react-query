import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledGate = styled.span`
  display: inline-block;
  height: 24px;
  line-height: 24px;
  text-decoration: none;
  text-transform: uppercase;
  background-color: ${({ theme }) => theme.colors.yellow};
  color: #262b2f;
  font-size: 16px;
  padding: 0px 5px;
  border-radius: 4px;
  font-weight: bold;

  @media screen and (prefers-reduced-motion: no-preference) {
    transition: background-color var(--transition-time) ease-in;
  }
`;

const Gate = ({ gate, ...restProps }) => {
  return <StyledGate {...restProps}>{gate}</StyledGate>;
};

Gate.propTypes = {
  gate: PropTypes.string,
};

export { Gate };
