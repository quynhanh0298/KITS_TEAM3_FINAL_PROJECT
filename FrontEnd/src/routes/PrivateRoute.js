import React from "react";
import { Route } from "react-router-dom";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { Redirect } from "react-router-dom";

const PrivateRoute = ({ children, ...rest }) => {
  const authStore = useSelector((state) => state.auth);

  return (
    <Route
      {...rest}
      render={({ location }) =>
        authStore.isAuthenticated ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
