import * as React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ReactQueryConfigProvider } from 'react-query';

const queryConfig = {};

const AppProviders = ({ children }) => {
  return (
    <ReactQueryConfigProvider config={queryConfig}>
      <Router>{children}</Router>
    </ReactQueryConfigProvider>
  );
};

export { AppProviders };
