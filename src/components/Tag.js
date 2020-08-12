import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledTag = styled.span`
  display: inline-block;
  border-radius: 4px;
  font-weight: 500;
  padding: 0px 5px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.textTag};

  @media screen and (prefers-reduced-motion: no-preference) {
    transition: color var(--transition-time) ease-in,
      background-color var(--transition-time) ease-in;
  }
`;

const Tag = ({ label, ...restProps }) => {
  return <StyledTag {...restProps}>{label}</StyledTag>;
};

Tag.propTypes = {
  label: PropTypes.string,
};

export { Tag };
