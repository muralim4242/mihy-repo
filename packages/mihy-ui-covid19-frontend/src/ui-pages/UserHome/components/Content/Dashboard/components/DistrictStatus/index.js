import React from "react";
import { Typography, Tooltip, Grid} from "@material-ui/core";
import InfoIcon from "@material-ui/icons/Info";
const DistrictStatus = ({ status = {}, selectedState, t }) => {
  const districtTranslatedValue = t(`district.${selectedState}.${status.code}`);
  let districtName = districtTranslatedValue;
  if (districtTranslatedValue.search("district.") !== -1) {
    districtName = districtTranslatedValue.replace(`district.${selectedState}.`, "")
  }
  let headerStyle;
  if (status.zones === "Red") {
    headerStyle={
      background: "#ffcdd2",
      borderLeft: "8px solid #ef5350",
    }
  }
  else if (status.zones === "Orange") {
    headerStyle={
      background: "#ffe0b2",
      borderLeft: "8px solid #ffa726",
    }
  }
  else if (status.zones === "Yellow") {
    headerStyle={
      background: "#fff9c4",
      borderLeft: "8px solid #ffee58",
    }
  }
  else {
    headerStyle={
      background: "#c8e6c9",
      borderLeft: "8px solid #66bb6a",
    }
  }
  return (
    <Grid container>
      <Grid item xs={12}> 
      <Typography variant="h6" align="center" style={headerStyle}>
        {districtName}
      </Typography>
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
      </Grid>
      <Grid item md={1} xs={2} sm={2} align="right">
        {status.notes? <Tooltip title={status.notes} placement="right"><InfoIcon color="primary" style={{paddingRight:"2px",fontSize:"20px"}}/></Tooltip>:""}
      </Grid>
    </Grid>
  );
};

export default DistrictStatus;
