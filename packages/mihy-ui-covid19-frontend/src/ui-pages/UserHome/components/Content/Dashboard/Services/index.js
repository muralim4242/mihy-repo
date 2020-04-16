import React from "react";
import {Grid,Card,Typography,CardContent, Divider,Button} from "@material-ui/core";
import { mapDispatchToProps } from "../../../../../../ui-utils/commons";
import { connect } from "react-redux";

class Services extends React.Component {
  render() {
    return (
      <div>
        <Card >
       <CardContent>
       <Typography variant="h6" gutterBottom align="center">
        Services
      </Typography>
      <Divider/>
      <Grid></Grid>
      <Typography variant="h6" gutterBottom align="center">
      <Button variant= "outlined" color="secondary" fullWidth={true}>Doner </Button> 
      </Typography>
      <Typography variant="h6" gutterBottom align="center">
      <Button variant= "outlined" color="secondary"fullWidth={true} >Taker </Button> 
      </Typography>
       </CardContent>
        </Card>
      </div>
    );
  }
}

const mapStateToProps = ({ screenConfiguration }) => {
    const { preparedFinalObject = {} } = screenConfiguration;
    const { } = preparedFinalObject;
    return { };
  };
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Services);
