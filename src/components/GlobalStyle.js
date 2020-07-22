import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    border-width: 0px;
    vertical-align: baseline;
  }
  html, body {
    width: 100%;
    height: 100%;
  }
  html {
    overflow-y: scroll;
    -webkit-text-size-adjust: 100%;
  }
  body {
    font-family: 'Roboto', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
    background-color: ${({ theme }) => theme.body};
    transition: background-color var(--transition-time) ease-in;
  }

  :root {
  --transition-time: 100ms;
}
`;
