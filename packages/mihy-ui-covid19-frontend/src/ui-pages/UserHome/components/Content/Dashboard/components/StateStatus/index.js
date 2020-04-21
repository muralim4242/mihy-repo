import React from "react";
import { Typography } from "@material-ui/core";

const StateStatus = ({ status = {}, t }) => {
  return (
    <div>
      <Typography variant="h6" color="primary">
        {status.updated ? t(`${status.country}`) : t(`state.${status.state}`)}
      </Typography>
      <Typography variant="subtitle2" style={{ color: "#f44336" }}>
        {status.updated ? 
          `${t("confirmed")} - ${status.cases} ` :
          `${t("confirmed")} - ${status.confirmed} ${parseInt(status.deltaconfirmed) ? `[+${status.deltaconfirmed}]` : ''}`
        }
      </Typography>
      <Typography variant="subtitle2" style={{ color: "#2196f3" }}>
        {status.updated ? 
          `${t("active")}  - ${status.active} ` :
          `${t("active")}  - ${status.active} ${`[+${parseInt(status.deltadeaths) + parseInt(status.deltarecovered)}]`===`[+0]`?'': `[+${parseInt(status.deltadeaths) + parseInt(status.deltarecovered)}]`} `
        }
      </Typography>
      <Typography variant="subtitle2" style={{ color: "#4caf50" }}>
        {status.updated ?
          `${t("recovered")}  - ${status.recovered}` :
          `${t("recovered")}  - ${status.recovered} ${parseInt(status.deltarecovered) ? `[+${status.deltarecovered}]` : ''}`
        }
      </Typography>
      <Typography variant="subtitle2" style={{ color: "#9e9e9e" }}>
        {status.updated ?
          `${t("deaths")}  - ${status.deaths} ` :
          `${t("deaths")}  - ${status.deaths} ${parseInt(status.deltadeaths) ? `[+${status.deltadeaths}]` : ''}`
        }
      </Typography>
    </div>
  );
};

export default StateStatus;
