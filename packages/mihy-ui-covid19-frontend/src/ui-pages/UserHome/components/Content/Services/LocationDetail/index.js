import React from "react";
import { Card, Typography, CardContent,Grid } from "@material-ui/core";
import { mapDispatchToProps } from "../../../../../../ui-utils/commons";
import { connect } from "react-redux";
import Select from "react-select";

class LocationDetail extends React.Component {
    render() {
        const {stateDropDown,
            CityDropDown}=this.props
        return (
            <div >
                <Card style={{padding:"15px 15px 100px 15px"}}>
                    <CardContent>
                    <Grid container spacing={2} >
              <Grid item md={6} xs={12}>
                <Typography variant="h6" className="Margin-bottom-8px">State</Typography>
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
                  options={stateDropDown}
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <Typography variant="h6"className="Margin-bottom-8px">District/City</Typography>
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
                  options={CityDropDown}
                />
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
      stateDropDown=[{label:"karnataka",value:"1"},{label:"Uttar Pradesh",value:"2"}],
      CityDropDown=[{label:"Bangalore",value:"1"},{label:"Noida",value:"2"}],
    } = preparedFinalObject;
    return {stateDropDown,
        CityDropDown
    };
  };
export default connect( mapStateToProps, mapDispatchToProps)(LocationDetail);
