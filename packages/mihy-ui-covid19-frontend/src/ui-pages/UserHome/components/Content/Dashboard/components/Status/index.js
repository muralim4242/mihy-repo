import React from "react";
import { Typography } from "@material-ui/core";

const Status = ({ status = {}, t }) => {
  return (
    <div>
      <Typography variant="subtitle2" gutterBottom align="center">
        {t(status.label)}
      </Typography>
      <Typography variant="h6" gutterBottom align="center">
        {status.count}
      </Typography>
    </div>
  );
};

export default Status;
