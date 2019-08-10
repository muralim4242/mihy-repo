import React from "react";
import { Route } from "react-router";
import Login from "../ui-pages/Login";
import UserHome from "../ui-pages/UserHome";
// import Landing from "../ui-pages/Landing";

const MainRoutes=()=>{
  return(
    <div>
      <Route exact path="/" component={UserHome} />
      <Route path="/login" component={Login} />
      <Route path="/user-home" component={UserHome} />
    </div>
  )
}

export default MainRoutes;
