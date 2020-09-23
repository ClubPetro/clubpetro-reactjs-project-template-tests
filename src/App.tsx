import React from "react";
import { Router, Switch, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import { GlobalStyle } from "styles";

import { Admin, Manager } from "pages";

function App() {
  const history = createBrowserHistory();

  return (
    <>
      <GlobalStyle />
      <Router history={history}>
        <Switch>
          <Route path="/" exact>
            <Admin />
          </Route>
          <Route path="/manager" exact>
            <Manager />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
