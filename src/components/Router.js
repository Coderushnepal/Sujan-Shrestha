import React from "react";
import {
  Router as BrowserRouter,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import history from "../utils/history";
import * as routes from "../constants/routes";

import Main from "./main";
import Favorites from "./favorites";
import { PrivateRoute } from "../components/common";

const Login = ({ history }) => {
  const isLoggedIn = () => {
    return !!localStorage.getItem("access_token");
  };

  const logIn = () => {
    localStorage.setItem("access_token", "login bhayo");
    history.push(routes.HOME);
  };

  return isLoggedIn() ? (
    <Redirect to={routes.HOME} />
  ) : (
    <h1 onClick={logIn}>Login</h1>
  );
};

const Router = () => (
  <BrowserRouter history={history}>
    <Switch>
      <PrivateRoute exact path={routes.FAVORITES} component={Favorites} />
      <Route exact path={routes.LOGIN} component={Login} />
      <Route exact path={routes.HOME} component={Main} />
    </Switch>
  </BrowserRouter>
);

export default Router;
