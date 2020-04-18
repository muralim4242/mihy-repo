import React from "react";
import { Route } from "react-router";
// import FirstTimeUser from "../ui-pages/UserHome/components/Content/FirstTimeUser";
import Dashboard from "../ui-pages/UserHome/components/Content/Dashboard";
import Statistics from '../ui-pages/UserHome/components/Content/Statistics'
import DistrictList from '../ui-pages/UserHome/components/Content/DistrictList';
import AboutUS from "../ui-pages/UserHome/components/Content/about-us";


const UserRoutes=()=>{
  return(
    <div>
      <Route exact path="/user-home" component={Dashboard} />
      <Route path="/user-home/statistics" component={Statistics} />
      <Route path="/user-home/districts-list" component={DistrictList} />
      <Route path="/user-home/about-us" component={AboutUS} />

    {/*  <Route path="/user-home/first-time" component={FirstTimeUser} />*/}
    </div>
  )
}

export default UserRoutes;
