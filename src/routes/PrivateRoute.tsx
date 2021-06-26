import React from "react";
import { Route, Redirect, RouteProps } from "react-router-dom";
import AppContext from "../contexts/AppContext";

interface IPrivateRouteProps extends RouteProps {
  component: any;
}

const PrivateRoute = ({
  component: Component,
  ...rest
}: IPrivateRouteProps) => {
  const isLoggedIn =
    React.useContext(AppContext).isLoggedIn || localStorage.getItem("loggedIn");

  return (
    <Route
      {...rest}
      render={(routeProps) => {
        return isLoggedIn ? (
          <Component {...routeProps} />
        ) : (
          <Redirect to="/login" />
        );
      }}
    />
  );
};

export default PrivateRoute;
