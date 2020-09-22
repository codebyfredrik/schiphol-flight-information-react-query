import React from 'react';
import styled from 'styled-components';

const StyledStickyWrapper = styled.div`
  position: relative;
  width: 100%;
`;

export const StickyWrapper = React.forwardRef(
  (props: any, ref: any): JSX.Element => {
    return (
      <StyledStickyWrapper ref={ref}>{props.children}</StyledStickyWrapper>
    );
  }
);
