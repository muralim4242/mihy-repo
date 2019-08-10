import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Content from "./components/Content";
import { mapDispatchToProps } from "../../ui-utils/commons";
import { connect } from "react-redux";


const styles = {
  root: {}
};

class UserHome extends Component {

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
          <Content />
      </div>
    );
  }
}

export default connect(
  null,
  mapDispatchToProps
)(withStyles(styles)(UserHome));
