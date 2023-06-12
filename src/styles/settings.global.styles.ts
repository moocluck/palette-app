import { createGlobalStyle } from 'styled-components';
import { colors } from './settings.colors.styles';
import { typography } from './settings.typography.styles';

const GlobalStyles = createGlobalStyle`
  :root {
    --background: ${colors.core};
    --foreground: ${colors.dark};
    --font: ${typography.family};
    --copy: inherit;
  }

  *,
  *:before,
  *:after {
    box-sizing: border-box;
    color: inherit;
  }

  html {
    font-size: 16px;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    height: 100%;
  }

  body {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0;
    background-color: var(--background);
    color: var(--foreground);
    font-family: var(--font);
    transition: background-color 0.3s ease-in-out;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    height: 100%;
  }

  body ::-moz-selection {
    background: var(--foreground);
    color: var(--background);
  }

  body ::selection {
    background: var(--foreground);
    color: var(--background);
  }

  h1, h2, h3, h4, h5, p {
    margin-block-start: 0px;
    margin-block-end: 0px;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
  }

  button {
    padding: 0;
    background-color: transparent;
    border: none;
    border-radius: 0;
    font-family: inherit;
    cursor: pointer;
    appearance: none;
  }

  a {
    text-decoration: none;
  }

  input,
  select {
    margin: 0;
    padding: 0;
    background-color: transparent;
    border: none;
    border-radius: 0;
    font-family: inherit;
    appearance: none;
  }

  div#main {
    height: 100%;
  }
`;

export default GlobalStyles;
