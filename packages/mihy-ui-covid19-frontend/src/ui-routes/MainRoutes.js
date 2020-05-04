import React from "react";
import { Route, Redirect } from "react-router";
import Loadable from "react-loadable";
import Loading from "../ui-molecules/Loading";
const UserHome = Loadable({
  loader: () => import("../ui-pages/UserHome"),
  loading: Loading
});

const MainRoutes = () => {
  return (
    <div>
      <Route path="/user-home" component={UserHome} />
      <Redirect to="/user-home" />
    </div>
  )
}

export default MainRoutes;
