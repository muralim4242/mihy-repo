import React from "react";
import { Typography } from "@material-ui/core";

const DistrictStatus = ({ status = {}, t }) => {
  return (
    <div>
      <Typography variant="h6" gutterBottom color="primary">
        {t(status.code)}
      </Typography>
      <Typography variant="subtitle2" gutterBottom align="center">
        {`${t("confirmed")} - ${status.confirmed} ${parseInt(status.delta)?`[+${status.delta}]`:''}`}
      </Typography>
    </div>
  );
};

export default DistrictStatus;
