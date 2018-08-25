import React from "react";
import * as mainRouteConstants from "./route-names";

const appRoutes = [
  {
    path: mainRouteConstants.LANDING,
    component: ()=><div>home</div>
  },
  {
    path: mainRouteConstants.BLOOD,
    component: ()=><div>blood</div>,
  },
  // {
  //   isRedirect:true,
  //   from:mainRouteConstants.LANDING,
  //   to:mainRouteConstants.HOME
  // }
];

export default appRoutes;
