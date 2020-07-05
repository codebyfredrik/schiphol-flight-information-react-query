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
    /* font-family: 'Roboto', sans-serif; */
    font-family: 'Inter', sans-serif;
    /* font-family: 'Source Sans Pro', sans-serif; */
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: rgb(250, 250, 250)
  }
`;

export default GlobalStyle;
