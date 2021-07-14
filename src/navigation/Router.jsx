import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "../pages/Home";
import Employees from "../pages/Employees";

import NotFound from "./NotFound";

const routes = [
  {
    id: "home",
    path: "/",
    exact: true,
    component: (props) => <Home {...props} />,
  },
  {
    id: "employees",
    path: "/employee-list",
    exact: true,
    component: (props) => <Employees {...props} />,
  },
  {
    id: "404",
    path: "*",
    exact: false,
    component: () => <NotFound />,
  },
];

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        {routes.map((route) => {
          return (
            <Route
              key={route.id}
              exact={route.exact}
              path={route.path}
              component={route.component}
            />
          );
        })}
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
