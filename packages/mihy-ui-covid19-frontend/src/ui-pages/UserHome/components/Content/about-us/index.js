import React from "react";
import { connect } from "react-redux";
import { withTranslation } from "react-i18next";
import { mapDispatchToProps } from "../../../../../ui-utils/commons";

class AboutUS extends React.Component {
  componentDidMount=async()=>{

  }

  render() {
    return (
        <div>About us </div>
    )
  }
}

export default connect(
    null,
    mapDispatchToProps
  )(withTranslation()(AboutUS));
