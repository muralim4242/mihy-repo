import React from "react";
import {connect} from "react-redux";
import { withTranslation } from "react-i18next";
import TopDistrictList from "../Dashboard/components/TopDistrictList";
import { mapDispatchToProps } from "../../../../../ui-utils/commons";


class DistrictList extends React.Component {
  handleClose = () => {
    const {history,setAppData}=this.props;
    setAppData("dashboard.dialogOpen", false);
    history.push("/user-home");
  };
  handleDistrictSearch=(searchText="")=>
  {
    this.props.setAppData("dashboard.districtSearchText",searchText);
  }
  render()
  {
    const {handleClose,handleDistrictSearch} =this;
    const {t,dashboard}=this.props;
    const {dialogOpen=false,topDistrictList=[],districtSearchText,selectedState,stateDistrictMapping}=dashboard;
    return (
      <TopDistrictList
        handleClose={handleClose}
        t={t}
        dialogOpen={dialogOpen}
        topDistrictList={topDistrictList}
        stateDistrictMapping={stateDistrictMapping}
        handleDistrictSearch={handleDistrictSearch}
        districtSearchText={districtSearchText}
        selectedState={selectedState}
      />
    )
  }
};

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
)(withTranslation()(DistrictList));
