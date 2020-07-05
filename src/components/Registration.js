import React from 'react';
import styled from 'styled-components';
import NoData from './NoData.js';

const Registration = ({ registration }) => {
  return <span>{registration ? registration : <NoData />}</span>;
};

export default Registration;
