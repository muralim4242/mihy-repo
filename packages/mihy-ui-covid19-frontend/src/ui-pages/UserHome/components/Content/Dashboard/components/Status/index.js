import React from "react";
import { Typography } from "@material-ui/core";

const Status = ({ status = {}, t }) => {
  return (
    <div>
      <Typography variant="h6" gutterBottom align="center">
        {t(status.label)}
      </Typography>
      <Typography variant="h5" gutterBottom align="center">
        {status.count}
      </Typography>
      <Typography variant="subtitle2" gutterBottom align="center">
        {parseInt(status.delta)?status.label==="active"?`[-${status.delta}]`:`[+${status.delta}]`:<br/>}
      </Typography>
    </div>
  );
};

export default Status;
