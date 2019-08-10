import React from "react";
import { Route } from "react-router";
import SmokerProfile from "../ui-pages/UserHome/components/Content/SmokerProfile";
import Dashboard from "../ui-pages/UserHome/components/Content/Dashboard";

const UserRoutes=()=>{
  return(
    <div>
      <Route exact path="/user-home" component={Dashboard} />
      <Route path="/user-home/smoker-profile/:smokerId" component={SmokerProfile} />
    </div>
  )
}

export default UserRoutes;
