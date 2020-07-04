import React from 'react';
import styled from 'styled-components';

const StyledNotApplicable = styled.div`
  display: inline-flex;
  /* width: 200px;
  height: 100px; */
  height: 1rem;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.05);
  color: rgba(0, 0, 0, 0.4);
  border-radius: 2px;
  padding: 0rem 0.3rem 0rem 0.3rem;
  font-size: 0.7rem;
  line-height: 1rem;
  text-transform: uppercase;
`;

const NotApplicable = () => {
  return <StyledNotApplicable>No data</StyledNotApplicable>;
};

export default NotApplicable;
