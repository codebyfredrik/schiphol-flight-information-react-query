import React, { ReactNode } from 'react';
import { bp } from '../../styles/constants';
import { lightTheme } from '../../components/Theme';
import { render } from '@testing-library/react';
import { ThemeProvider, DefaultTheme } from 'styled-components';
import { BrowserRouter as Router } from 'react-router-dom';
import { ReactQueryConfigProvider } from 'react-query';

const theme: DefaultTheme = {
  colors: lightTheme,
  breakpoints: bp,
};

const renderWithTheme = (component: ReactNode) => {
  return render(<ThemeProvider theme={theme}>{component}</ThemeProvider>);
};

const renderWithRouterAndReactQuery = (component: ReactNode) => {
  return render(<Router><ReactQueryConfigProvider config={{}}>{component}</ReactQueryConfigProvider></Router>)
}

export { renderWithTheme };
