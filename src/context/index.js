import * as React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ReactQueryConfigProvider } from 'react-query';
import { HelmetProvider } from 'react-helmet-async';

const queryCache = {};

const AppProviders = ({ children }) => {
  return (
    <ReactQueryConfigProvider config={queryCache}>
      <HelmetProvider>
        <Router>{children}</Router>
      </HelmetProvider>
    </ReactQueryConfigProvider>
  );
};

export { AppProviders };
