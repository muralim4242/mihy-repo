import React from "react";
import { Route } from "react-router";
// import FirstTimeUser from "../ui-pages/UserHome/components/Content/FirstTimeUser";
import Dashboard from "../ui-pages/UserHome/components/Content/Dashboard";
import AboutUs from "../ui-pages/UserHome/components/Content/components/AboutUs";

const UserRoutes=()=>{
  return(
    <div>
      <Route exact path="/user-home" component={Dashboard} />
    {/*  <Route path="/user-home/first-time" component={FirstTimeUser} />*/}
    <Route path = "/user-home/about" component = {AboutUs} />
    </div>
  )
}

export default UserRoutes;
