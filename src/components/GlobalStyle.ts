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

    @media screen and (prefers-reduced-motion: no-preference) {
      transition: background-color var(--transition-time) ease-in;
    }
  }

  :root {
  --transition-time: 150ms;
  --min-tap-target-height: 48px;
  --container-margin: 1.5rem;
    
    @media (min-width: ${(props) => props.theme.breakpoints.desktop}) {
    --min-tap-target-height: 32px;
    --container-margin: 2rem;
    }
}
`;
