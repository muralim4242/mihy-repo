import React from "react";
import { Typography } from "@material-ui/core";

const DistrictStatus = ({ status = {},selectedState, t }) => {
  return (
    <div>
      <Typography variant="h6" gutterBottom align="center" color="primary">
        {t(`district.${selectedState}.${status.code}`)}
      </Typography>
      <Typography variant="subtitle2" gutterBottom align="center" style={{color:"#f44336"}}>
        {`${t("confirmed")} - ${status.confirmed} ${parseInt(status.delta)?`[+${status.delta}]`:''}`}
      </Typography>
    </div>
  );
};

export default DistrictStatus;
