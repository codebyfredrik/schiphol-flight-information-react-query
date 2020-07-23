import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledGate = styled.span`
  display: inline-block;
  height: 20px;
  line-height: 20px;
  text-decoration: none;
  background-color: #ffd700;
  color: #262b2f;
  font-size: 14px;
  padding: 0px 5px;
  border-radius: 4px;
  font-weight: bold;
`;

const Gate = ({ gate, className }) => {
  return <StyledGate className={className}>{gate}</StyledGate>;
};

Gate.propTypes = {
  gate: PropTypes.string,
  className: PropTypes.string,
};

export { Gate };
