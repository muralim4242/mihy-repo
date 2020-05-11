import React from "react";
import {
  Card,
  CardContent,
  Grid,
  Typography,
  withStyles
} from "@material-ui/core";
import Status from "../Status";
const styles = theme => ({
  alignItem: {
    alignItems: "baseline"
  }
});
const CoutryStatus = ({ countryStatus = {}, t, setAppData, classes }) => {
  return (
    <div className="Margin-bottom-8px">
      <Typography variant="h6" color="primary">
        {countryStatus.updated
          ? t("dashboard.cuntry-status-header1")
          : t("dashboard.cuntry-status-header")}
      </Typography>
      <Grid container spacing={1} alignItems="stretch">
        <Grid item xs={6} md={3}>
          <Card style={{ background: "#f44336", color: "white" }}>
            <CardContent>
              {countryStatus.updated ? (
                <Status
                  status={{ label: "confirmed",
                  count: countryStatus.cases,
                  delta: countryStatus.todayCases}}
                  t={t}
                />
              ) : (
                <Status
                  status={{
                    label: "confirmed",
                    count: countryStatus.confirmed,
                    delta: countryStatus.deltaconfirmed
                  }}
                  t={t}
                />
              )}
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={6} md={3}>
          <Card style={{ background: "#2196f3", color: "white" }}>
            <CardContent>
              {countryStatus.updated ? (
                <Status
                  status={{ label: "active", count: countryStatus.active }}
                  t={t}
                />
              ) : (
                <Status
                  status={{
                    label: "active",
                    count: countryStatus.active,
                    delta: `${parseInt(countryStatus.deltadeaths) +
                      parseInt(countryStatus.deltarecovered)}`
                  }}
                  t={t}
                />
              )}
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={6} md={3}>
          <Card style={{ background: "#4caf50", color: "white" }}>
            <CardContent>
              {countryStatus.updated ? (
                <Status
                  status={{
                    label: "recovered",
                    count: countryStatus.recovered
                  }}
                  t={t}
                />
              ) : (
                <Status
                  status={{
                    label: "recovered",
                    count: countryStatus.recovered,
                    delta: countryStatus.deltarecovered
                  }}
                  t={t}
                />
              )}
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={6} md={3}>
          <Card style={{ background: "#9e9e9e", color: "white" }}>
            <CardContent>
              {countryStatus.updated ? (
                <Status
                  status={{ label: "deaths",
                  count: countryStatus.deaths,
                  delta: countryStatus.todayDeaths }}
                  t={t}
                />
              ) : (
                <Status
                  status={{
                    label: "deaths",
                    count: countryStatus.deaths,
                    delta: countryStatus.deltadeaths
                  }}
                  t={t}
                />
              )}
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default withStyles(styles)(CoutryStatus);
