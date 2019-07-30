import React from "react";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

class Landing extends React.Component {
  render() {
    return (
      <div>
        <Typography variant="h2">
          MIHY all in one react boilerplate
        </Typography>
        <br/>
        <Button
          variant="contained"
          color="primary"
          onClick={e => {
            this.props.history.push("/login");
          }}
        >
          Login
        </Button>
        <Button
          variant="outlined"
          color="primary"
          onClick={e => {
            this.props.history.push("/user-home");
          }}
        >
          User Home
        </Button>
      </div>
    );
  }
}

export default Landing;
