import React, { ReactNode } from 'react';
import { bp } from '../../styles/constants';
import { lightTheme } from '../../components/Theme';
import { render } from '@testing-library/react';
import { ThemeProvider, DefaultTheme } from 'styled-components';

const theme: DefaultTheme = {
  colors: lightTheme,
  breakpoints: bp,
};

const renderWithTheme = (component: ReactNode) => {
  return render(<ThemeProvider theme={theme}>{component}</ThemeProvider>);
};

export { renderWithTheme };
