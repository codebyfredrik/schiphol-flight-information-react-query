import React from 'react';
import styled from 'styled-components';

const StyledNotApplicable = styled.div`
  display: inline-flex;
  /* grid-template-columns: 50px; */
  /* max-width: 100px; */
  /* height: 100px; */
  /* height: 1rem; */
  /* justify-content: center; */
  align-items: center;
  background: rgba(0, 0, 0, 0.05);
  color: rgba(0, 0, 0, 0.4);
  border-radius: 2px;
  /* padding: 0rem 0.3rem 0rem 0.3rem; */
  padding: 0rem 0.4rem;
  font-size: 0.4rem;
  /* line-height: 0.rem; */
  border: 1px solid rgba(0, 0, 0, 0.1);
  /* margin: auto; */
  text-transform: uppercase;
  /* font-weight: bold; */
`;

const NotApplicable = () => {
  return (
    <StyledNotApplicable>
      <span>No data</span>
    </StyledNotApplicable>
  );
};

export default NotApplicable;
