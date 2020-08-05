import React from 'react';
import styled from 'styled-components';
import { useFormatTime } from '../hooks/index';
import PropTypes from 'prop-types';

export const StyledDateTime = styled.span`
  color: ${({ theme }) => theme.colors.text};

  @media screen and (prefers-reduced-motion: no-preference) {
    transition: color var(--transition-time) ease-in;
  }
`;

const DateTime = ({ date, format, className }) => {
  const { formattedTimestamp } = useFormatTime(date, format);

  return (
    <StyledDateTime
      className={className}
    >{`${formattedTimestamp}`}</StyledDateTime>
  );
};

DateTime.propTypes = {
  date: PropTypes.string,
};

export { DateTime };
