import React from "react";
import Div from "mihy-ui-framework/ui-atoms/HtmlElements/Div";
import BloodList from "../../ui-molecules-local/BloodList";
import { handleScreenConfigurationFieldChange as handleField } from "mihy-ui-framework/ui-redux/screen-configuration/actions";
import { connect } from "react-redux";

class BloodListContainer extends React.Component {
  render() {
    return (
      <Div>
        <BloodList {...this.props} />
      </Div>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(BloodListContainer);
