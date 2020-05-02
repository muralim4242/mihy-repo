import React from "react";
import { Route, Redirect } from "react-router";
import Loadable from "react-loadable";
import Loading from "../ui-molecules/Loading";
// import Login from "../ui-pages/Login";
// import UserHome from "../ui-pages/UserHome";
// import Landing from "../ui-pages/Landing";
const UserHome = Loadable({
  loader: () => import("../ui-pages/UserHome"),
  loading: Loading
});

const MainRoutes = () => {
  return (
    <div>
      {/*<Route exact path="/" component={Login} />
      <Route path="/login" component={Login} />*/}
      <Route path="/user-home" component={UserHome} />
      <Redirect to="/user-home" />
    </div>
  )
}

export default MainRoutes;
