import React from "react";
import { Grid, Card, Typography, CardContent,TextField } from "@material-ui/core";
import { mapDispatchToProps } from "../../../../../../ui-utils/commons";
import { connect } from "react-redux";
import Select from "react-select";
import "date-fns";
import DateFnsUtils from "@date-io/date-fns";
import {  MuiPickersUtilsProvider, DatePicker} from "@material-ui/pickers";
class ServiceDetails extends React.Component {
  
  render() {
    const {serviveTypeDropDown,
      frequencyDropDown
    }=this.props
    let today = new Date();
    return (
      <div >
        <Card style={{ padding: "15px 15px 15px 15px" }}>
          <CardContent>
            <Grid container spacing={2} >
              <Grid item md={6} xs={12}>
                <Typography variant="h6" className="Margin-bottom-8px">Service Type</Typography>
                <Select 
                 theme={(theme) => ({
                  ...theme,
                  colors: {
                  ...theme.colors,
                    primary: '#FF1493',
                  },
                })}
                  // value={value}
                  // onChange={handleChange}
                  options={serviveTypeDropDown}
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <Typography variant="h6"className="Margin-bottom-8px">Frequency</Typography>
                <Select
                 theme={(theme) => ({
                  ...theme,
                  colors: {
                  ...theme.colors,
                    primary: '#FF1493',
                  },
                })}
                  // value={value}
                  // onChange={handleChange}
                  options={frequencyDropDown}
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <Typography variant="h6" className="Margin-bottom-8px">Email</Typography>
                <TextField fullWidth id="outlined-basic"  variant="outlined"  ></TextField>
              </Grid>
              <Grid item md={6} xs={12}>
                <Typography variant="h6" className="Margin-bottom-8px">Phone</Typography>
                <TextField fullWidth id="outlined-basic" variant="outlined" ></TextField>
              </Grid>
              <Grid item md={6} xs={12}>
                <Typography variant="h6" className="Margin-bottom-8px">From Date</Typography>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <DatePicker fullWidth
                    minDate={today}
                    format="dd/MM/yyyy"
                    // value={}
                    onChange={e => { }}
                  />
                </MuiPickersUtilsProvider>
              </Grid>
              <Grid item md={6} xs={12}>
                <Typography variant="h6" className="Margin-bottom-8px">To Date</Typography>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <DatePicker fullWidth
                    minDate={today}
                    format="dd/MM/yyyy"
                    // value={}
                    onChange={e => {  }} />
                </MuiPickersUtilsProvider>
              </Grid>
              <Grid item md={6} xs={12}>
                <Typography variant="h6" className="Margin-bottom-8px">Additional Information</Typography>
                <TextField fullWidth id="outlined-basic"  variant="outlined"></TextField>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </div>
    );
  }
}
const mapStateToProps = ({ screenConfiguration }) => {
  const { preparedFinalObject = {} } = screenConfiguration;
  const { 
    serviveTypeDropDown=[{label:"Service1",value:"1"},{label:"Service2",value:"2"}],
    frequencyDropDown=[{label:"Daily",value:"1"},{label:"Weekly",value:"2"},{label:"Monthly",value:"3"}]
  } = preparedFinalObject;
  return {serviveTypeDropDown,
    frequencyDropDown};
};

export default connect( mapStateToProps,mapDispatchToProps)(ServiceDetails);
