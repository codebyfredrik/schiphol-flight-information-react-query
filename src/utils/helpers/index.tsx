import React from 'react';
import { bp } from '../../styles/constants';
import { lightTheme } from '../../components/Theme';
import { render } from '@testing-library/react';
import { ThemeProvider, DefaultTheme } from 'styled-components';
import { MemoryRouter } from 'react-router-dom';
import { ReactQueryConfigProvider } from 'react-query';

const theme: DefaultTheme = {
  colors: lightTheme,
  breakpoints: bp,
};

const Wrapper = ({children}: any): JSX.Element => {
return (
  <MemoryRouter>
    <ReactQueryConfigProvider config={{}}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ReactQueryConfigProvider>
  </MemoryRouter>)
}

const customRender = (ui: any, options: any) => render(ui, {wrapper: Wrapper, ...options})

// const renderWithTheme = (component: ReactNode) => {
//   return render(<ThemeProvider theme={theme}>{component}</ThemeProvider>);
// };

export * from '@testing-library/react'
export { customRender as render}

// export { renderWithTheme };
