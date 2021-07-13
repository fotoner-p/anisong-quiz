import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import styled from "styled-components";

import Home from "./routes/Home";
import Quiz from "./routes/Quiz";

import Header from "./components/Header";

const Main = styled.div`
  justify-content: center;
  padding: 64px 20px 0;
  width: 100%;
`


const App: React.FC = () => {
  return (
    <Main>
      <Header/>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/quiz" component={Quiz}/>
        </Switch>
      </BrowserRouter>
    </Main>
  );
}

export default App;
