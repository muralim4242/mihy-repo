import React from "react";
// import Typography from "@material-ui/core/Typography";
import { connect } from "react-redux";
import { mapDispatchToProps } from "../../../../../ui-utils/commons";
import { httpRequest } from "../../../../../ui-utils/api";
import { withTranslation } from "react-i18next";
// import YourArea from "./components/YourArea";
import CountryStatus from "./components/CountryStatus";
import TopList from "./components/TopList";
import RemainingDays from "./components/RemainingDays"
import orderBy from "lodash/orderBy";

class Dashboard extends React.Component {
  componentDidMount = async () => {
    this.feathIndiaData()
  }
  feathIndiaData = async () => {
    let { setAppData, dashboard } = this.props;
    const dataResponse = await httpRequest({ endPoint: "data.json" });
    const stateDistrictWiseResponse = await httpRequest({ endPoint: "state_district_wise.json" });
    dashboard = {
      ...dashboard,
      topList: dataResponse.statewise,
      stateDistrictMapping: stateDistrictWiseResponse
    }
    setAppData("dashboard", dashboard)
  }
  feathWorldData = async () => {
    let { setAppData, dashboard } = this.props;
    const dataResponse = await httpRequest({ endPoint: "https://coronavirus-tracker-api.herokuapp.com/v2/locations" });
    dashboard = {
      ...dashboard,
      topList: dataResponse,
    }
    setAppData("dashboard", dashboard)
  }
  handleClose = () => {
    this.props.setAppData("dashboard.dialogOpen", false);
  };
  handleOpen = (selectedState) => {
    let { setAppData, dashboard, history } = this.props;
    const { stateDistrictMapping = {} } = dashboard;
    let topDistrictList = stateDistrictMapping[selectedState] || {};
    topDistrictList.districtData = topDistrictList.districtData || {}
    topDistrictList = Object.keys(topDistrictList.districtData).map((key) => {
      return {
        code: key,
        confirmed: topDistrictList.districtData[key].confirmed,
        delta: topDistrictList.districtData[key].delta.confirmed
      }
    })
    topDistrictList = orderBy(topDistrictList, ["confirmed"], ["desc"]);
    dashboard = {
      ...dashboard,
      selectedState,
      topDistrictList,
      dialogOpen: true
    }
    setAppData("dashboard", dashboard);
    history.push("/user-home/districts-list");
  };
  handleStateSearch = (searchText = "") => {
    this.props.setAppData("dashboard.stateSearchText", searchText);
  }
  render() {
    const { dashboard, t} = this.props;
    const { topList = [], stateSearchText } = dashboard;
    const { handleOpen, handleStateSearch, feathIndiaData, feathWorldData } = this;
    return (
      <div>
        <CountryStatus t={t} feathIndiaData={feathIndiaData} feathWorldData={feathWorldData} countryStatus={topList.latest ? topList : topList.length > 0 ? topList[0] : {}} />
        {topList.latest ? "" : <RemainingDays t={t} />}
        {/* <YourArea t={t} handleOpen={handleOpen} /> */}
        {topList.locations ? <TopList t={t} handleOpen={handleOpen} topList={topList.locations} handleStateSearch={handleStateSearch} stateSearchText={stateSearchText} /> :
        <TopList t={t} handleOpen={handleOpen} topList={topList} handleStateSearch={handleStateSearch} stateSearchText={stateSearchText} />}
      </div>
    );
  }
}

const mapStateToProps = ({ screenConfiguration }) => {
  const { preparedFinalObject = {} } = screenConfiguration;
  const { dashboard = {}} = preparedFinalObject;
  return { dashboard};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withTranslation()(Dashboard));


