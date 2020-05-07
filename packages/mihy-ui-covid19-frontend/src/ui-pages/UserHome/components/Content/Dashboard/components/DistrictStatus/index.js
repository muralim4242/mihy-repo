import React from "react";
import { Typography, Tooltip} from "@material-ui/core";

const DistrictStatus = ({ status = {}, selectedState, t }) => {
  const districtTranslatedValue = t(`district.${selectedState}.${status.code}`);
  let districtName = districtTranslatedValue;
  if (districtTranslatedValue.search("district.") !== -1) {
    districtName = districtTranslatedValue.replace(`district.${selectedState}.`, "")
  }
  let colr
  if (status.zones === "Red") {
    colr = '#ef5350'
  }
  else if (status.zones === "Orange") {
    colr = '#d4e157'
  }
  else if (status.zones === "Yellow") {
    colr = '#ffff8d'
  }
  else {
    colr = '#66bb6a'
  }
  return (
    <div>
      <Tooltip title={status.notes} placement="right">
      <Typography variant="h6" align="center" style={{ background: colr }}>
        {districtName}
      </Typography>
      </Tooltip>
      <Typography variant="subtitle2" style={{ color: "#f44336" }}>
        {`${t("confirmed")} - ${status.confirmed} ${parseInt(status.delta) ? `[+${status.delta}]` : ''}`}
      </Typography>
      <Typography variant="subtitle2" style={{ color: "#2196f3" }}>
        {`${t("active")} - ${status.active} ${`[+${parseInt(status.deltaDeaths) + parseInt(status.deltaRecovered)}]` === `[+0]` ? '' : `[-${parseInt(status.deltaDeaths) + parseInt(status.deltaRecovered)}]`}`}
      </Typography>
      <Typography variant="subtitle2" style={{ color: "#4caf50" }}>
        {`${t("recovered")} - ${status.recovered} ${parseInt(status.deltaRecovered) ? `[+${status.deltaRecovered}]` : ''} `}
      </Typography>
      <Typography variant="subtitle2" style={{ color: "#9e9e9e" }}>
        {`${t("deaths")} - ${status.deaths} ${parseInt(status.deltaDeaths) ? `[+${status.deltaDeaths}]` : ''}`}
      </Typography>
    </div>
  );
};

export default DistrictStatus;
