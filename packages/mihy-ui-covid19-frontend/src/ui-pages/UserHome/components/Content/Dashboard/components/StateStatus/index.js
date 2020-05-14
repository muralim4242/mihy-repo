import React from "react";
import { Typography, Tooltip,Grid } from "@material-ui/core";
import InfoIcon from "@material-ui/icons/Info";


const StateStatus = ({ status = {}, t }) => {
  const stateTranslatedValue = t(`state.${status.state}`);
  let stateName = stateTranslatedValue;
  if (stateTranslatedValue.search("state.") !== -1) {
    stateName = stateTranslatedValue.replace(`state.`, "")
  }

  const countryTranslatedValue = t(`country.${status.country}`);
  let countryName = countryTranslatedValue;
  if (countryTranslatedValue.search("country.") !== -1) {
    countryName = countryTranslatedValue.replace(`country.`, "")
  }
  return (

      <Grid container>
        <Grid item md={11}>
    <Typography variant="h6" color="primary">
      {status.updated ? countryName : stateName}
    </Typography>
      <Typography variant="subtitle2" style={{ color: "#f44336" }}>
        {status.updated ?
          `${t("confirmed")} - ${new Intl.NumberFormat('en-IN').format(status.cases)} ${parseInt(status.todayCases) ? `[+${status.todayCases}]` : ''}` :
          `${t("confirmed")} - ${new Intl.NumberFormat('en-IN').format(status.confirmed)} ${parseInt(status.deltaconfirmed) ? `[+${status.deltaconfirmed}]` : ''}`
        }
      </Typography>
      <Typography variant="subtitle2" style={{ color: "#2196f3" }}>
        {status.updated ?
          `${t("active")}  - ${new Intl.NumberFormat('en-IN').format(status.active)} ` :
          `${t("active")}  - ${new Intl.NumberFormat('en-IN').format(status.active)} ${`[+${parseInt(status.deltadeaths) + parseInt(status.deltarecovered)}]` === `[+0]` ? '' : `[-${parseInt(status.deltadeaths) + parseInt(status.deltarecovered)}]`} `
        }
      </Typography>
      <Typography variant="subtitle2" style={{ color: "#4caf50" }}>
        {status.updated ?
          `${t("recovered")}  - ${new Intl.NumberFormat('en-IN').format(status.recovered)}` :
          `${t("recovered")}  - ${new Intl.NumberFormat('en-IN').format(status.recovered)} ${parseInt(status.deltarecovered) ? `[+${status.deltarecovered}]` : ''}`
        }
      </Typography>
      <Typography variant="subtitle2" style={{ color: "#9e9e9e" }}>
        {status.updated ?
          `${t("deaths")}  - ${new Intl.NumberFormat('en-IN').format(status.deaths)} ${parseInt(status.todayDeaths) ? `[+${status.todayDeaths}]` : ''} ` :
          `${t("deaths")}  - ${new Intl.NumberFormat('en-IN').format(status.deaths)} ${parseInt(status.deltadeaths) ? `[+${status.deltadeaths}]` : ''}`
        }
      </Typography>
      </Grid>
      <Grid item md={1}>
        {status.statenotes ? <Tooltip title={status.statenotes} placement="right" style={{ width: "30%", }}>

<InfoIcon/>

</Tooltip>:""}
     
      </Grid>
      </Grid>
  );
};

export default StateStatus;
