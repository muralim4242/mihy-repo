import React from "react";
// import Typography from "@material-ui/core/Typography";
import { connect } from "react-redux";
import { mapDispatchToProps } from "../../../../../ui-utils/commons";
import { httpRequest } from "../../../../../ui-utils/api";
import { withTranslation } from "react-i18next";
// import YourArea from "./components/YourArea";
import CountryStatus from "./components/CountryStatus";
import TopList from "./components/TopList";
import TopDistrictList from "./components/TopDistrictList";
import orderBy from "lodash/orderBy";

class Dashboard extends React.Component {
  componentDidMount=async()=>{
      let {setAppData,dashboard}=this.props;
      const dataResponse=await httpRequest({endPoint:"data.json"});
      const stateDistrictWiseResponse=await httpRequest({endPoint:"state_district_wise.json"});
      dashboard={
        ...dashboard,
        topList:dataResponse.statewise,
        // orderBy(dataResponse.statewise,["confirmed"],["desc"]),
        stateDistrictMapping:stateDistrictWiseResponse
      }
      setAppData("dashboard",dashboard)
  }

  handleClose = () => {
    this.props.setAppData("dashboard.dialogOpen", false);
  };

  handleOpen = (selectedState) => {
    let {setAppData,dashboard}=this.props;
    const {stateDistrictMapping={}}=dashboard;
    let topDistrictList=stateDistrictMapping[selectedState] ||{};
    topDistrictList=Object.keys(topDistrictList.districtData).map((key)=>{
      return {
        code:key,
        confirmed:topDistrictList.districtData[key].confirmed,
        delta:topDistrictList.districtData[key].delta.confirmed
      }
    })
    topDistrictList=orderBy(topDistrictList,["confirmed"],["desc"]);
    dashboard={
      ...dashboard,
      selectedState,
      topDistrictList,
      dialogOpen:true
    }
    setAppData("dashboard",dashboard);
  };

  handleStateSearch=(searchText="")=>
  {
    this.props.setAppData("dashboard.stateSearchText",searchText);
  }

  handleDistrictSearch=(searchText="")=>
  {
    this.props.setAppData("dashboard.districtSearchText",searchText);
  }

  render() {
    const {
      dashboard,
      t
    } = this.props;
    const {dialogOpen=false,topList=[],topDistrictList=[],stateSearchText,districtSearchText,selectedState}=dashboard;
    const {  handleOpen, handleClose,handleStateSearch ,handleDistrictSearch} = this;
    return (
      <div>
        <CountryStatus t={t} countryStatus={topList.length>0?topList[0]:{}}/>
        {/*<YourArea t={t} handleOpen={handleOpen} />*/}
        <TopList t={t} handleOpen={handleOpen} topList={topList} handleStateSearch={handleStateSearch} stateSearchText={stateSearchText}/>
        <TopDistrictList
          handleClose={handleClose}
          t={t}
          dialogOpen={dialogOpen}
          topDistrictList={topDistrictList}
          handleDistrictSearch={handleDistrictSearch}
          districtSearchText={districtSearchText}
          selectedState={selectedState}
        />
      </div>
    );
  }
}

const mapStateToProps = ({ screenConfiguration }) => {
  const { preparedFinalObject = {} } = screenConfiguration;
  const {
    dashboard = {}
  } = preparedFinalObject;

  return {
    dashboard
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withTranslation()(Dashboard));
