import React from "react";
import { Typography, Grid } from '@material-ui/core';
import Swiper from "../../../../../ui-containers/SwiperComponent";
import { mapDispatchToProps } from "../../../../../ui-utils/commons";
import { connect } from "react-redux";

class AboutUs extends React.Component {

  render() {
    const { setAppData, ourTeam, t} = this.props;

    return (
      <div>
      <Grid container direction="column" justify="center" alignItems="center">
        <Typography variant="h6" color="primary">
          { t('About US') }
      </Typography>
        </Grid>
      <Grid container style = {{position: "relative"}}>
        <Grid item md = {12} sm = {12} xs = {12}>
          <Swiper ourTeam={ourTeam} setAppData = {setAppData}/>
          </Grid>
      </Grid>
      </div>
    );
  }
};
const mapStateToProps = ({ screenConfiguration }) => {
  const { preparedFinalObject = {} } = screenConfiguration;
  const {appConfig = {}} = preparedFinalObject;
  const {ourTeam = []} = appConfig;

  return {
    ourTeam
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AboutUs);
