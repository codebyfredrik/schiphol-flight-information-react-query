import React from 'react';
import styled from 'styled-components';
import { ISvgIcon } from './interfaces';
import { animated } from 'react-spring'
import { space } from 'styled-system'
import { useHasMounted } from '../../hooks/index'

const StyledArrowRight = styled(animated.svg)`
  display: inline-block;
  ${space}
`;

const ArrowRight = ({
  height = 12,
  width = 12,
  fillColor = "#000",
  ...delegated
}: ISvgIcon): JSX.Element | null => {
  const hasMounted = useHasMounted()

  if(!hasMounted) return null;
  
  return (
    <StyledArrowRight
      aria-hidden="true"
      height={height}
      width={width}
      focusable="false"
      data-icon="arrow-right"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 448 512"
      {...delegated}
    >
      <path
        fill={fillColor}
        d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"
      ></path>
    </StyledArrowRight>
  );
};

export { ArrowRight };
