import React from "react";
import { Grid} from '@material-ui/core';
import Swiper from "../../../../../../ui-containers/SwiperComponent";

class AboutUs extends React.Component {

  render() {
    return (
      <Grid container>
        <Grid item md={12} sm={12} xs={12}>
          <Swiper />
        </Grid>
      </Grid>
    );
  }
};

export default AboutUs;
