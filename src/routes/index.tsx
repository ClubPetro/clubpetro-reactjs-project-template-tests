import { createBrowserHistory } from "history";
import React, { Suspense } from "react";
import { Route, Router, Switch } from "react-router-dom";
import { Loading } from "components";

const Admin = React.lazy(() => import("pages/admin"));
const Manager = React.lazy(() => import("pages/manager"));

const Routes = () => {
  const history = createBrowserHistory();

  return (
    <Suspense fallback={<Loading />}>
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
  );
};

export default Routes;
