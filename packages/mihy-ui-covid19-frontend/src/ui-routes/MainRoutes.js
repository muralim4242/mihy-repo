import React from "react";
import { Route, Redirect } from "react-router";
// import Login from "../ui-pages/Login";
import UserHome from "../ui-pages/UserHome";
import Services from "../ui-pages/UserHome/components/Content/Services"
import DonerStepper from "../ui-pages/UserHome/components/Content/Services/DonerStepper"
import TakerStepper from "../ui-pages/UserHome/components/Content/Services/TakerStepper"
import Acknowledgement from "../ui-pages/UserHome/components/Content/Services/Acknowledgement"

import Statistics from '../ui-pages/UserHome/components/Content/Statistics'
// import Landing from "../ui-pages/Landing";

const MainRoutes = () => {
  return (
    <div>
      {/*<Route exact path="/" component={Login} />
      <Route path="/login" component={Login} />*/}
      <Route path="/user-home" component={UserHome} />
      <Route path="/user-home/services" component={Services} />
      <Route path="/user-home/doner-stepper" component={DonerStepper} />
      <Route path="/user-home/taker-stepper" component={TakerStepper} />
      <Route path="/user-home/create-service-acknowledgement" component={Acknowledgement}/>


      <Redirect to="/user-home"/>
      <Route path="/user-home/statistics" component={Statistics} />
     
    </div>
  )
}

export default MainRoutes;
