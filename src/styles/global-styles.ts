// src/assets/styles/global-styles.ts
import {createGlobalStyle, DefaultTheme} from "styled-components";
import { normalize } from "styled-normalize";

// 위에서 받은 `normalize`로 기본 css가 초기화 합니다.
const GlobalStyle = createGlobalStyle<{theme: DefaultTheme}>`
  ${normalize}
  
  * {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  html,
  body {
    overflow: hidden;
    margin: 0;
    padding: 0;
    background-color: ${({ theme }) => theme.color.sub.toString()};
  }

  ul{
    margin: 0;
    padding: 0;
  }
  
  li {
    list-style: none;
  }
  
  a {
    text-decoration: none;
    color: black;
  }

  h1,h2,h3,h4,h5,h6,p{
    margin: 0;
    padding: 0;
  }

  input {
    -webkit-appearance: none;
    -webkit-border-radius: 0;
  }

  textarea {
    -webkit-appearance: none;
    -webkit-border-radius: 0;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    appearance: none;
  }

  select {
    appearance: none;
  }
`;

export default GlobalStyle;