import React from "react";
import { Typography } from "@material-ui/core";


const StateStatus = ({ status = {}, t }) => {
  return (
    <div>
      <Typography variant="h6" gutterBottom color="primary">
        {t(status.state)}
      </Typography>
      <Typography variant="subtitle2" gutterBottom style={{color:"#f44336"}}>
        {`${t("confirmed")} - ${status.confirmed} ${parseInt(status.deltaconfirmed)?`[+${status.deltaconfirmed}]`:''}` }
      </Typography>
      <Typography variant="subtitle2" gutterBottom style={{color:"#2196f3"}}>
        {`${t("active")}  - ${status.active}`}
      </Typography>
      <Typography variant="subtitle2" gutterBottom style={{color:"#4caf50"}}>
        {`${t("recovered")}  - ${status.recovered} ${parseInt(status.deltarecovered)?`[+${status.deltarecovered}]`:''}`}
      </Typography>
      <Typography variant="subtitle2" gutterBottom style={{color:"#9e9e9e"}}>
        {`${t("deaths")}  - ${status.deaths} ${parseInt(status.deltadeaths)?`[+${status.deltadeaths}]`:''}`}
      </Typography>
    </div>
  );
};

export default StateStatus;
