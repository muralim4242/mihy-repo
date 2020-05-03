import React from "react";
import { Typography } from "@material-ui/core";

const DistrictStatus = ({ status = {},selectedState, t }) => {
  const districtTranslatedValue=t(`district.${selectedState}.${status.code}`);
  let districtName=districtTranslatedValue;
  if (districtTranslatedValue.search("district.")!==-1) {
    districtName=districtTranslatedValue.replace(`district.${selectedState}.`,"")
  }
  return (
    <div>
      <Typography variant="h6"  align="center" color="primary">
        {districtName}
      </Typography>
      <Typography variant="subtitle2"  align="center" style={{color:"#f44336"}}>
        {`${t("confirmed")} - ${status.confirmed} ${parseInt(status.delta)?`[+${status.delta}]`:''}`}
      </Typography>
    </div>
  );
};

export default DistrictStatus;
