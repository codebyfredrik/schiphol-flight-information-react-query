import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useFormatTime } from './../hooks/index';

const StyledTime = styled.span`
  display: inline-block;
  color: ${({ theme }) => theme.colors.text};

  @media screen and (prefers-reduced-motion: no-preference) {
    transition: color var(--transition-time) ease-in;
  }
`;

const Time = ({ time, ...restProps }) => {
  const { formattedTimestamp } = useFormatTime(time, 'HH:mm');

  return <StyledTime {...restProps}>{formattedTimestamp}</StyledTime>;
};

Time.propTypes = {
  time: PropTypes.string,
};

export { Time };
