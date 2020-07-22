import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledGate = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  position: relative;
  text-decoration: none;
  background-color: #ffd700;
  color: #262b2f;
  font-size: 14px;
  line-height: 14px;
  padding: 7px 9px;
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
