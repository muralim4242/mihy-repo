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
    let today = new Date();
    return (
      <div >
        <Card style={{ padding: "10px 10px 10px 10px" }}>
          <CardContent>
            <Grid container spacing={4} >
              <Grid item md={6} xs={12}>
                <Typography variant="h5" >Service Type</Typography>
                <Select
                  // value={value}
                  // onChange={handleChange}
                  // options={options}
                  menuPortalTarget={document.querySelector("body")}
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <Typography variant="h5"> Frequency</Typography>
                <Select
                  // value={value}
                  // onChange={handleChange}
                  // options={options}
                  menuPortalTarget={document.querySelector("body")}
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <Typography variant="h5"> Email</Typography>
                <TextField id="outlined-basic" label="Email" variant="outlined" style={{ width: "100%" }} ></TextField>
              </Grid>
              <Grid item md={6} xs={12}>
                <Typography variant="h5"> Phone</Typography>
                <TextField id="outlined-basic" label="Phone" variant="outlined" style={{ width: "100%" }}></TextField>
              </Grid>
              <Grid item md={6} xs={12}>
                <Typography variant="h5"style={{ color: "black" }}> From Time </Typography>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <DatePicker
                    style={{ width: "100%" }}
                    minDate={today}
                    shouldDisableDate={this.disableWeekends}
                    InputProps={{
                      style: { fontSize: 14 },
                      fontFamily: "Roboto Regular"
                    }}
                    format="dd/MM/yyyy"
                    // value={}
                    onChange={e => {

                    }}
                  />
                </MuiPickersUtilsProvider>
              </Grid>
              <Grid item md={6} xs={12}>
                <Typography variant="h5" style={{ color: "black" }}> To Time </Typography>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <DatePicker
                    style={{ width: "100%" }}
                    minDate={today}
                    shouldDisableDate={this.disableWeekends}
                    InputProps={{
                      style: { fontSize: 14 },
                      fontFamily: "Roboto Regular"
                    }}
                    format="dd/MM/yyyy"
                    // value={}
                    onChange={e => {  }} />
                </MuiPickersUtilsProvider>
              </Grid>
              <Grid item md={6} xs={12}>
                <Typography variant="h5"> Additional Information</Typography>
                <TextField id="outlined-basic" label="Additional Inforation" variant="outlined" style={{ width: "100%" }}></TextField>
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
  const { } = preparedFinalObject;
  return {};
};

export default connect( mapStateToProps,mapDispatchToProps)(ServiceDetails);
