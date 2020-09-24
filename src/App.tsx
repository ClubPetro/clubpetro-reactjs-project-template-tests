import React, { Suspense } from "react";
import { Router, Switch, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import { GlobalStyle } from "styles";

// import { Admin, Manager } from "pages";
const Admin = React.lazy(() => import("pages/admin"));
const Manager = React.lazy(() => import("pages/manager"));

function App() {
  const history = createBrowserHistory();

  return (
    <>
      <GlobalStyle />
      <Suspense fallback="carregando">
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
      </Suspense>
    </>
  );
}

export default App;
