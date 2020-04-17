import React from "react";
import { Route, Redirect } from "react-router";
// import Login from "../ui-pages/Login";
import UserHome from "../ui-pages/UserHome";
import Services from "../ui-pages/UserHome/components/Content/Dashboard/Services"
import Statistics from '../ui-pages/UserHome/components/Content/Statistics'
// import Landing from "../ui-pages/Landing";

const MainRoutes = () => {
  return (
    <div>
      {/*<Route exact path="/" component={Login} />
      <Route path="/login" component={Login} />*/}
      <Route path="/user-home" component={UserHome} />
      <Route path="/services" component={Services} />

      <Redirect to="/user-home"/>
      <Route path="/user-home/statistics" component={Statistics} />
     
    </div>
  )
}

export default MainRoutes;
