import React from "react";
import { Router as BrowserRouter, Switch, Route } from "react-router-dom";

import history from "../utils/history";

import Main from "./main";

const Router = () => (
  <BrowserRouter history={history}>
    <Switch>
      <Route exact path="/" component={Main} />
    </Switch>
  </BrowserRouter>
);

export default Router;
