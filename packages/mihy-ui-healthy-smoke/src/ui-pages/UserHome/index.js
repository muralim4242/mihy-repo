import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Content from "./components/Content";
import { mapDispatchToProps } from "../../ui-utils/commons";
import { connect } from "react-redux";

const styles = {
  root: {}
};

class UserHome extends Component {
  componentDidMount = async() => {
    const {setAppData}=this.props;
    let countries=await fetch("https://restcountries.eu/rest/v2/all")
      .then(function(response) {
        return response.json();
      })
      .catch(error => console.error(error));
    // console.log(countries);
    setAppData("countries",countries)
  };

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
