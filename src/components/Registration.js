import React from 'react';
import NoData from './NoData.js';

const Registration = ({ registration }) => {
  return <span>{registration ? registration : <NoData />}</span>;
};

export default Registration;
