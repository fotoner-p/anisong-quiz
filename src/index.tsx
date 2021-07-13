import React from 'react';
import ReactDOM from 'react-dom';
import {ThemeProvider} from "styled-components";

import App from './App';

import {theme} from "./styles/theme";
import GlobalStyle from "./styles/global-styles";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle theme={theme}/>
      <App/>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

