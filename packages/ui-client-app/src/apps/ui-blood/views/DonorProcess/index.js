import React from "react";
import {Button,Container,Item,Div,Icon} from "mihy-ui-framework/ui-atoms";
import {Route} from "react-router-dom";
import Dashboard from "./Dashboard";
import ProcessOverview from "./ProcessOverview";
import WhatToDoBefore from "./WhatToDoBefore";
import WhatHappens from "./WhatHappens";

const DonorProcess=(props)=>{
  const {match}=props;
  return(
    <Div>
      <Route exact path={`${match.path}`} component={Dashboard}/>
      <Route exact path={`${match.path}/process-overview`} component={ProcessOverview}/>
      <Route exact path={`${match.path}/what-to-do-before`} component={WhatToDoBefore}/>
      <Route exact path={`${match.path}/what-happens`} component={WhatHappens}/>
    </Div>
  )
}

export default DonorProcess;
