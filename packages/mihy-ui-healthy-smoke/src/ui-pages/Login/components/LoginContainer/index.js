import React from "react";
import Auth from "../Auth";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  dialogRoot: {
    display: "flex",
    alignItems: "center",
    width: "100%",
    flexDirection: "column",
    padding: "16px"
  },
  heading: {
    fontSize: "26px",
    color: "rgb(77,78,78)"
  },
  auth: {
    marginBottom: "16px"
  }
};

class Login extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.dialogRoot}>
        <Typography
          variant="h2"
          gutterBottom
          classes={{ root: classes.heading }}
        >
          Welcome to Healthy Smoke
        </Typography>
        <Auth rootClass={classes.auth} />
      </div>
    );
  }
}

export default withStyles(styles)(Login);
