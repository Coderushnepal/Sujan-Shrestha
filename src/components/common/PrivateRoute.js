import React from "react";
import { Route, Redirect } from "react-router-dom";

import * as routes from "../../constants/routes";

const PrivateRoute = (props) => {
  const isLoggedIn = !!localStorage.getItem("access_token");

  // if (isLoggedIn) {
  //   return <Route {...props} />;
  // } else {
  //   return <Redirect to={routes.LOGIN} />;
  // }
  return (
    <Route
      exact={props.exact}
      path={props.path}
      component={() =>
        isLoggedIn ? <props.component /> : <Redirect to={routes.LOGIN} />
      }
    />
  );
};

export default PrivateRoute;
