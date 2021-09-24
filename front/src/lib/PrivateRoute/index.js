import React from "react";
import { Redirect, Route } from "react-router-dom";

function PrivateRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) =>
        localStorage.getItem("loginUser") ? (
          <Component {...props} />
        ) : (
          <Redirect to="/onboarding" />
        )
      }
    />
  );
}

export default PrivateRoute;
