import { createGlobalStyle } from 'styled-components';

const GlobalStylesDef = createGlobalStyle`
  :root {
    --background: #FFFFFF;
    --foreground: #1B1B1F;
    --font: Inter, sans-serif;
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
    background-color: #FFFFFF;
    color: #1B1B1F;
    font-family: var(--font);
    transition: background-color 0.3s ease-in-out;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    height: 100%;
  }

  body ::-moz-selection {
    background: #1B1B1F;
    color: #FFFFFF;
  }

  body ::selection {
    background: #1B1B1F;
    color: #FFFFFF;
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

export default GlobalStylesDef;
