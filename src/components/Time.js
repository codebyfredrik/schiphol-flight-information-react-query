import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useFormatTime } from '../hooks/useFormatTime';

const StyledTime = styled.span`
  display: inline-block;
  color: ${({ theme }) => theme.colors.text};

  @media screen and (prefers-reduced-motion: no-preference) {
    transition: color var(--transition-time) ease-in;
  }
`;

const Time = ({ time, className }) => {
  const { formattedTimestamp } = useFormatTime(time, 'HH:mm');

  return <StyledTime className={className}>{formattedTimestamp}</StyledTime>;
};

Time.propTypes = {
  time: PropTypes.string,
  className: PropTypes.string,
};

export { Time };
