import React from "react";
import {withStyles} from "@material-ui/core/styles"
import Typography from "@material-ui/core/Typography";

const styles = {
  dialogRoot: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    padding: "16px"
  }
};

class SmokeProfile extends React.Component {
  render()
  {
    return(
      <div>
        <Typography variant="subtitle1" gutterBottom>
         Smoker Profile
       </Typography>
      </div>
    )
  }
}

export default withStyles(styles)(SmokeProfile)
