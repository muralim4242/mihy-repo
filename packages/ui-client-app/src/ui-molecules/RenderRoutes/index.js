import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";

const RenderRoutes = ({ basePath="", routes = [] }) => {
  return (
    <div>
      {routes.map((route, index) => {
        if (route.isRedirect) {
          const { from, to } = route;
          return <Redirect key={index} from={from} to={to} />;
        } else {
          let { component: Component, path, isExact } = route;
          return (
            <Route
              key={index}
              exact={isExact ? true : false}
              path={
                basePath === ""
                  ? path
                  : basePath==="/"?path:`${basePath}${path}`
              }
              render={props => {
                return <Component {...props} />;
              }}
            />
          );
        }
      })}
    </div>
  );
};

export default RenderRoutes;
