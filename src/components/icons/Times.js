import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledTimes = styled.svg`
  display: inline-block;
`;

export const Times = ({ height, width, fillColor, className, onClick }) => {
  return (
    <StyledTimes
      onClick={onClick}
      className={className}
      aria-hidden="true"
      height={height}
      width={width}
      focusable="false"
      data-prefix="fas"
      data-icon="times"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 352 512"
    >
      <path
        fill={fillColor}
        d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"
      ></path>
    </StyledTimes>
  );
};

Times.propTypes = {
  height: PropTypes.number,
  width: PropTypes.number,
  fillColor: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func,
};
