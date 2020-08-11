import React from 'react';
import styled from 'styled-components';
import { useFormatTime } from '../hooks/index';
import PropTypes from 'prop-types';

const StyledDateTime = styled.span`
  color: ${({ theme }) => theme.colors.text};

  @media screen and (prefers-reduced-motion: no-preference) {
    transition: color var(--transition-time) ease-in;
  }
`;

const DateTime = ({ date, format, ...restProps }) => {
  const { formattedTimestamp } = useFormatTime(date, format);

  return (
    <StyledDateTime {...restProps}>{`${formattedTimestamp}`}</StyledDateTime>
  );
};

DateTime.propTypes = {
  date: PropTypes.string,
};

export { DateTime };
