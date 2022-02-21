import {createGlobalStyle} from 'styled-components';
import {normalize} from 'styled-normalize';

export const GlobalStyles = createGlobalStyle`
  ${normalize};

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  html {
    font-size: 16px;
    scroll-behavior: smooth;
  }
  body {
    font-family: ${(props) => props.theme.fonts.main};
    cursor: default;
    position:relative;
  }
  h1,h2,h3,h4,h5,h6 {
    font-family: ${(props) => props.theme.fonts.main};
    font-weight: 400;
  }
  button {
    font-family: ${(props) => props.theme.fonts.main};
    background: transparent;
    border: none;
    cursor: pointer;
  }
  a {
    text-decoration: none;
    color: #000;
  }
  li{
    list-style: none;
  }
`;
