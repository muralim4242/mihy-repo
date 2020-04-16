import React from "react";
import LoginContainer from "./components/LoginContainer";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  root: {
    display:"flex",
    width:"100%"
  },
};

class Login extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <LoginContainer/>
      </div>
    );
  }
}

export default withStyles(styles)(Login);
