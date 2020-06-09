import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Swiper from "react-id-swiper";
import Hidden from "@material-ui/core/Hidden";

const params = {
  slidesPerView: 3,
  spaceBetween: 30,
  freeMode: true,
  // pagination: {
  //   el: ".swiper-pagination",
  //   clickable: true
  // }
};

const paramsXs = {
  effect: "flip",
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
    bulletActiveClass:"customBulletActive"
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false
  },
  // navigation: {
  //   nextEl: ".swiper-button-next",
  //   prevEl: ".swiper-button-prev"
  // }
};

const styles = theme => ({
  root: {
    flexGrow: 1,
    margin: "16px"
  },
  paper: {
    padding: "16px",
    minHeight: "340px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    "&:hover": {
      // backgroundColor:"#d81b60",
      // color:"#000000",
      // transition: "all .3s ease-out"
    }
    // width: 300
  }
});

class GuttersGrid extends React.Component {
  state = {
    spacing: "40"
  };

  render() {
    const { classes, platforms } = this.props;
    const { spacing } = this.state;

    return (
      <div className={classes.root}>
        <Grid container spacing={24}>
          <Grid item xs={12}>
            <Typography component="h2" variant="h2" style={{color:"#d81b60"}} className="cssanimation sequence leMovingBackFromRight" gutterBottom>
              Here is our platforms
            </Typography>
          </Grid>
        </Grid>
        <Hidden smDown>
          <Grid container spacing={spacing}>
            {platforms.map((item, key) => {
              return (
                <Grid item sm={4} xs={12} key={key}>
                  <Paper className={classes.paper}>
                    <i
                      className="material-icons"
                      style={{
                        color: item.iconObj.color,
                        fontSize: item.iconObj.size
                      }}
                    >
                      {item.iconObj.name}
                    </i>
                    <Typography variant="title" gutterBottom>
                      {item.name}
                    </Typography>
                    <Typography gutterBottom>{item.about}</Typography>
                  </Paper>
                </Grid>
              );
            })}
          </Grid>
        </Hidden>

        <Hidden smUp>
        <Swiper {...paramsXs}>
          {platforms.map((item, key) => {
            return (
              <div key={key}>
                <Paper className={classes.paper}>
                  <i
                    className="material-icons"
                    style={{
                      color: item.iconObj.color,
                      fontSize: item.iconObj.size
                    }}
                  >
                    {item.iconObj.name}
                  </i>
                  <Typography variant="title" gutterBottom>
                    {item.name}
                  </Typography>
                  <Typography gutterBottom>{item.about}</Typography>
                </Paper>
              </div>
            );
          })}
          </Swiper>
        </Hidden>
      </div>
    );
  }
}

GuttersGrid.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(GuttersGrid);
