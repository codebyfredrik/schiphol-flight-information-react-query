import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledTag = styled.span`
  display: inline-block;
  border-radius: 4px;
  font-weight: bold;
  padding: 0px 5px;
  text-transform: uppercase;
  font-size: 12px;
  height: 18px;
  line-height: 18px;
  color: ${({ theme }) => theme.colors.textTag};
  transition: color var(--transition-time) ease-in;
`;

const Tag = ({ label, className }) => {
  return <StyledTag className={className}>{label}</StyledTag>;
};

Tag.propTypes = {
  label: PropTypes.string,
  className: PropTypes.string,
};

export { Tag };
