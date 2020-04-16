import React from "react";
import {Grid,Card,Typography,CardContent} from "@material-ui/core";
import { mapDispatchToProps } from "../../../../../../../ui-utils/commons";
import { connect } from "react-redux";

class RemainingDays extends React.Component {
componentDidMount=()=>{
        this.handle()
}
handle=()=>{
     const {setAppData}=this.props
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0')
        var yyyy = today.getFullYear();
        today = mm + '/' + dd + '/' + yyyy;
        var date1 = new Date(today); 
        var date2 = new Date("05/03/2020"); 
        var Difference_In_Time = date2.getTime() - date1.getTime(); 
        var diffDays = Difference_In_Time / (1000 * 3600 * 24); 
            setAppData("remainingDays",diffDays)
        }
  render() {
    const { remainingDays  } = this.props;
    return (
      <div>
        <Card style={{background:"pink"}}>
        
        <CardContent>
        <Grid container>
        <Typography variant="h6" gutterBottom align="center">
        LockDown Remaining Days :
      </Typography>
        <Typography variant="h6" gutterBottom align="center">
        {remainingDays}
      </Typography>
      </Grid>
      </CardContent>
       
        
        </Card>
      </div>
    );
  }
}

const mapStateToProps = ({ screenConfiguration }) => {
    const { preparedFinalObject = {} } = screenConfiguration;
    const { remainingDays} = preparedFinalObject;
    return { remainingDays };
  };
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(RemainingDays);
