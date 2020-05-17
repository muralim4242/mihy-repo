import React from "react";
// import Typography from "@material-ui/core/Typography";
import { connect } from "react-redux";
import { mapDispatchToProps } from "../../../../../ui-utils/commons";
import { initGA,pageView } from "../../../../../ui-utils/tracking";
import { httpRequest } from "../../../../../ui-utils/api";
import { withTranslation } from "react-i18next";
import { Paper, Switch, Grid, Typography } from "@material-ui/core";
// import YourArea from "./components/YourArea";
// import CountryStatus from "./components/CountryStatus";
// import TopList from "./components/TopList";
// import RemainingDays from "./components/RemainingDays";
import orderBy from "lodash/orderBy";
import Loadable from "react-loadable";
import Loading from "../../../../../ui-molecules/Loading";


const CountryStatus = Loadable({
  loader: () => import("./components/CountryStatus"),
  loading: Loading
});

const TopList = Loadable({
  loader: () => import("./components/TopList"),
  loading: Loading
});

const RemainingDays = Loadable({
  loader: () => import("./components/RemainingDays"),
  loading: Loading
});


class Dashboard extends React.Component {
  componentDidMount = async () => {
    const { setAppData,match={} } = this.props
    this.feathIndiaData();
    setAppData("checked", true)
    initGA();
    pageView(match.url)
  };
  viewSwitch = async () => {
    const { checked, setAppData } = this.props
    setAppData("checked", !checked)
    if (checked === false) {
      this.feathIndiaData()
    }
    else {
      this.feathWorldData()
    }
  }
  feathIndiaData = async () => {
    let { setAppData, dashboard } = this.props;
    const dataResponse = await httpRequest({ endPoint: "data.json" });
    const stateDistrictWiseResponse = await httpRequest({
      endPoint: "state_district_wise.json"
    });
    const stateDistrictWiseZonesResponse = await httpRequest({
      endPoint: "zones.json"
    });
    dashboard = {
      ...dashboard,
      topList: dataResponse.statewise,
      stateDistrictMapping: stateDistrictWiseResponse,
      stateDistrictZonesMapping: stateDistrictWiseZonesResponse
    };
    setAppData("dashboard", dashboard);
  };
  feathWorldData = async () => {
    let { setAppData, dashboard } = this.props;
    const dataResponse = await httpRequest({ endPoint: "https://corona.lmao.ninja/v2/all" });
    let countriesResponse = await httpRequest({ endPoint: "https://corona.lmao.ninja/v2/countries" });
    if (countriesResponse) {
      countriesResponse = orderBy(countriesResponse, ["cases"], ["desc"]);
    }
    dashboard = {
      ...dashboard,
      topList: dataResponse || {},
      countriesMapping: countriesResponse || [],
    };
    setAppData("dashboard", dashboard);
  };
  handleClose = () => {
    this.props.setAppData("dashboard.dialogOpen", false);
  };

  handleOpen = selectedState => {
    let { setAppData, dashboard, history } = this.props;
    const { stateDistrictMapping = {}, stateDistrictZonesMapping } = dashboard;
    let topDistrictList = stateDistrictMapping[selectedState] || {};
    topDistrictList.districtData = topDistrictList.districtData || {};
    let tempTopDistrictList = []
    Object.keys(topDistrictList.districtData).forEach(key => {
      stateDistrictZonesMapping.zones.forEach(zoneData => {
        if (zoneData.district === key) {
          tempTopDistrictList.push({
            code: key,
            confirmed: topDistrictList.districtData[key].confirmed,
            active: topDistrictList.districtData[key].active,
            recovered: topDistrictList.districtData[key].recovered,
            deaths: topDistrictList.districtData[key].deceased,
            delta: topDistrictList.districtData[key].delta.confirmed,
            deltaRecovered: topDistrictList.districtData[key].delta.recovered,
            deltaDeaths: topDistrictList.districtData[key].delta.deceased,
            notes: topDistrictList.districtData[key].notes,
            zones: zoneData.zone
          })
        };
      })
    });
    topDistrictList = tempTopDistrictList;
    topDistrictList = orderBy(topDistrictList, ["confirmed"], ["desc"]);
    dashboard = {
      ...dashboard,
      selectedState,
      topDistrictList,
      dialogOpen: true
    };
    setAppData("dashboard", dashboard);
    history.push("/user-home/districts-list");
  };

  handleStateSearch = (searchText = "") => {
    this.props.setAppData("dashboard.stateSearchText", searchText);
  };
  render() {
    const { dashboard, t, checked } = this.props;
    const { topList = [], stateSearchText } = dashboard;
    const { handleOpen, handleStateSearch, viewSwitch } = this;
    return (
      <div>
        <CountryStatus
          t={t}
          // feathIndiaData={feathIndiaData}
          // feathWorldData={feathWorldData}
          countryStatus={
            topList.updated ? topList : topList.length > 0 ? topList[0] : {}
          }
        />
        {topList.updated ? "" : <RemainingDays t={t} />}
        {/* <YourArea t={t} handleOpen={handleOpen} /> */}
        {topList.updated ? (
          <TopList
            t={t}
            handleOpen={handleOpen}
            topList={dashboard.countriesMapping}
            handleStateSearch={handleStateSearch}
            stateSearchText={stateSearchText}
          />
        ) : (
            <TopList
              t={t}
              handleOpen={handleOpen}
              topList={topList}
              handleStateSearch={handleStateSearch}
              stateSearchText={stateSearchText}
            />
          )}
        <div
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <Paper
            style={{
              position: "fixed",
              bottom: "62px",
              padding: "0 8px",
              borderRadius: "8%"
            }}
          >
            <Typography component="div">
              <Grid component="label" container alignItems="center" spacing={1}>
                <Grid item>{t("World")}</Grid>
                <Grid item>
                  <Switch
                    checked={checked}
                    onChange={(e) => { viewSwitch() }}
                    name="ViewSwitch"
                  />
                </Grid>
                <Grid item>{t("country.India")}</Grid>
              </Grid>
            </Typography>
          </Paper>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ screenConfiguration }) => {
  const { preparedFinalObject = {} } = screenConfiguration;
  const { dashboard = {}, checked = true } = preparedFinalObject;
  return { dashboard, checked };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withTranslation()(Dashboard));
