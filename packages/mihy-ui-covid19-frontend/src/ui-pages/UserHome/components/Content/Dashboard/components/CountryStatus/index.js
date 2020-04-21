import React from "react";
import { Card, CardContent, Grid,Typography, Switch,FormGroup,FormControlLabel,withStyles } from "@material-ui/core";
import Status from "../Status";
import { connect } from "react-redux";
import { mapDispatchToProps } from "../../../../../../../ui-utils/commons";
const styles = theme => ({
  alignItem: {    
    alignItems:"baseline"   
  },
});
const CoutryStatus = ({ countryStatus = {}, t, setAppData, checked, feathWorldData, feathIndiaData,classes }) => {
  const viewSwitch = async () => {
    setAppData("checked", !checked)
    if (checked === false) {
      feathWorldData()
    }
    else {
      feathIndiaData()
    }
  }
  return (
    <div className="Margin-bottom-8px">
      <Grid container  className={classes.alignItem}>
        <Grid item xs={7} md={10} >
          <Typography variant="h6" color="primary" >
            {countryStatus.updated ? t("dashboard.cuntry-status-header1") : t("dashboard.cuntry-status-header")}
          </Typography>
        </Grid>
        <Grid item xs={5} md={2} >
          <FormGroup  >
            <FormControlLabel 
              control={<Switch checked={checked} onChange={viewSwitch} name="checked"  />}
              label={t("dashboard.toplist1")}
            />
          </FormGroup>
        </Grid>
      </Grid>
      <Grid container spacing={1} alignItems="stretch">
        <Grid item xs={6} >
          <Card style={{ background: "#f44336", color: "white" }}>
            <CardContent>
              {countryStatus.updated ?
                <Status status={{ label: "confirmed", count: countryStatus.cases }} t={t} /> :
                <Status status={{ label: "confirmed", count: countryStatus.confirmed, delta: countryStatus.deltaconfirmed }} t={t} />
              }
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={6}>
          <Card style={{ background: "#2196f3", color: "white" }}>
            <CardContent>
              {countryStatus.updated ?
                <Status status={{ label: "active", count: countryStatus.active }} t={t} /> :
                <Status status={{ label: "active", count: countryStatus.active, delta: `${(parseInt(countryStatus.deltadeaths) + parseInt(countryStatus.deltarecovered))}` }} t={t} />
              }
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={6} >
          <Card style={{ background: "#4caf50", color: "white" }}>
            <CardContent>
              {countryStatus.updated ?
                <Status status={{ label: "recovered", count: countryStatus.recovered }} t={t} /> :
                <Status status={{ label: "recovered", count: countryStatus.recovered, delta: countryStatus.deltarecovered }} t={t} />
              }
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={6}>
          <Card style={{ background: "#9e9e9e", color: "white" }}>
            <CardContent>
              {countryStatus.updated ?
                <Status status={{ label: "deaths", count: countryStatus.deaths }} t={t} /> :
                <Status status={{ label: "deaths", count: countryStatus.deaths, delta: countryStatus.deltadeaths }} t={t} />
              }
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  )
}

const mapStateToProps = ({ screenConfiguration }) => {
  const { preparedFinalObject = {} } = screenConfiguration;
  const { dashboard = {}, checked = false } = preparedFinalObject;
  return { dashboard, checked };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(CoutryStatus));
