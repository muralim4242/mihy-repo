import React from "react";
import TestMolecules from "../../ui-molecules-local/TestMolecules";
import Div from "mihy-ui-framework/ui-atoms/HtmlElements/Div";
import { connect } from "react-redux";

class TestMoleculesContainer extends React.Component {
  render() {
    return (
      <Div>
        <TestMolecules {...this.props} />
      </Div>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return null;
};

export default connect(mapStateToProps, mapDispatchToProps)(TestMoleculesContainer);
