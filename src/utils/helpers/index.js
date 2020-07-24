import React from 'react';
import { bp } from './../../styles/constants';
import { lightTheme } from './../../components/Theme';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';

const theme = {
  colors: lightTheme,
  breakpoints: bp,
};

const renderWithTheme = (component) => {
  return render(<ThemeProvider theme={theme}>{component}</ThemeProvider>);
};

export { renderWithTheme };
