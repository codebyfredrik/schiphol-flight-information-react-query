import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  html, body {
    width: 100%;
    height: 100%;
  }
  html {
    overflow-y: scroll;
  }
  body {
    font-family: 'Roboto', sans-serif;
    /* font-family: 'Inter', sans-serif; */
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    /* background-color: rgb(235, 235, 235); */
    background-color: ${({ theme }) => theme.body};
    transition: background-color 150ms ease-in;
  }
`;

export default GlobalStyle;
