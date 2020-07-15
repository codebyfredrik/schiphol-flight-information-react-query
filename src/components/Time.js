import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledTime = styled.span`
  display: inline-block;
  color: ${({ theme }) => theme.text};
  transition: color var(--transition-time) ease-in;
`;

export const Time = ({ time, className }) => {
  const formattedTime = time.split(':');

  return (
    <StyledTime
      className={className}
    >{`${formattedTime[0]}:${formattedTime[1]}`}</StyledTime>
  );
};

Time.propTypes = {
  time: PropTypes.string,
  className: PropTypes.string,
};
