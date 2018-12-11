import React from "react";
import Div from "mihy-ui-framework/ui-atoms/HtmlElements/Div";
// import BloodList from "../../ui-molecules-local/BloodList";
import { handleScreenConfigurationFieldChange as showUrgencyPopup,prepareFinalObject as pFO } from "mihy-ui-framework/ui-redux/screen-configuration/actions";
import get from "lodash/get";
import { connect } from "react-redux";

class BloodListContainer extends React.Component {
  render() {
    return (
      <Div>
        {/*<BloodList {...this.props}/>*/}
      </Div>
    );
  }
}

const mapStateToProps = ({screenConfiguration}) => {
  const {preparedFinalObject}=screenConfiguration;
  return {selectedBloodGrp:get(preparedFinalObject,"searchDonar.selectedBloodGrp","")};
};

const mapDispatchToProps = dispatch => {
  return {
    selectBloodGrp:(value)=>{
      dispatch(pFO("searchDonar.selectedBloodGrp",value));
      dispatch(showUrgencyPopup("search-donar","components.criteriaPopup","props.open",true));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BloodListContainer);
