import React from "react";
import { Route } from "react-router";
import FirstTimeUser from "../ui-pages/UserHome/components/Content/FirstTimeUser";
import Dashboard from "../ui-pages/UserHome/components/Content/Dashboard";

const UserRoutes=()=>{
  return(
    <div>
      <Route exact path="/user-home" component={Dashboard} />
      <Route path="/user-home/first-time" component={FirstTimeUser} />
    </div>
  )
}

export default UserRoutes;
