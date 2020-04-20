import React from "react";
import { Typography } from "@material-ui/core";

const StateStatus = ({ status = {}, t }) => {
  return (
    <div>
      <Typography variant="h6" color="primary">
        {status.latest ? t(`${status.country}`) : t(`state.${status.state}`)}
      </Typography>
      <Typography variant="subtitle2" style={{ color: "#f44336" }}>
        {status.latest ? 
          `${t("confirmed")} - ${status.latest.confirmed} ` :
          `${t("confirmed")} - ${status.confirmed} ${parseInt(status.deltaconfirmed) ? `[+${status.deltaconfirmed}]` : ''}`
        }
      </Typography>
      <Typography variant="subtitle2" style={{ color: "#2196f3" }}>
        {status.latest ? 
          `${t("active")}  - ${status.active} ` :
          `${t("active")}  - ${status.active} [+${parseInt(status.deltadeaths) + parseInt(status.deltarecovered)}]`
        }
      </Typography>
      <Typography variant="subtitle2" style={{ color: "#4caf50" }}>
        {status.latest ?
          `${t("recovered")}  - ${status.latest.recovered}` :
          `${t("recovered")}  - ${status.recovered} ${parseInt(status.deltarecovered) ? `[+${status.deltarecovered}]` : ''}`
        }
      </Typography>
      <Typography variant="subtitle2" style={{ color: "#9e9e9e" }}>
        {status.latest ?
          `${t("deaths")}  - ${status.latest.deaths} ` :
          `${t("deaths")}  - ${status.deaths} ${parseInt(status.deltadeaths) ? `[+${status.deltadeaths}]` : ''}`
        }
      </Typography>
    </div>
  );
};

export default StateStatus;
