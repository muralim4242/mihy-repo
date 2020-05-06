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
      <Typography variant="h6"  color="primary">
        {districtName}
      </Typography>
      <Typography variant="subtitle2"  style={{color: "#f44336"}}>
        {`${t("confirmed")} - ${status.confirmed} ${parseInt(status.delta)?`[+${status.delta}]`:''}`}
      </Typography>
      <Typography variant="subtitle2" style={{color: "#2196f3"}}>
        {`${t("active")} - ${status.active} ${`[+${parseInt(status.deltaDeaths) + parseInt(status.deltaRecovered)}]`===`[+0]`?'': `[-${parseInt(status.deltaDeaths) + parseInt(status.deltaRecovered)}]`}`}
      </Typography>
      <Typography variant="subtitle2" style={{color: "#4caf50"}}>
        {`${t("recovered")} - ${status.recovered} ${parseInt(status.deltaRecovered)?`[+${status.deltaRecovered}]`:''} `}
      </Typography>
      <Typography variant="subtitle2" style={{color: "#9e9e9e" }}>
        {`${t("deaths")} - ${status.deaths} ${parseInt(status.deltaDeaths)?`[+${status.deltaDeaths}]`:''}`}
      </Typography>
      {/* <Typography variant="subtitle2" style={{color:"#f44336"}}>
        {`${t("Status")} - ${status.notes} `}
      </Typography> */}
    </div>
  );
};

export default DistrictStatus;
