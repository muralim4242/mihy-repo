import React from "react";
import { Route ,Redirect} from "react-router";
// import Login from "../ui-pages/Login";
import UserHome from "../ui-pages/UserHome";
import Services from "../ui-pages/UserHome/components/Content/Dashboard/Services"
// import Landing from "../ui-pages/Landing";

const MainRoutes=()=>{
  return(
    <div>
      {/*<Route exact path="/" component={Login} />
      <Route path="/login" component={Login} />*/}
      <Route path="/user-home" component={UserHome} />
      <Route path="/services" component={Services} />

      <Redirect to="/user-home"/>
    </div>
  )
}

export default MainRoutes;
