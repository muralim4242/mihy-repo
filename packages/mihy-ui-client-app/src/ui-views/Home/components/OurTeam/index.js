import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Avatar from "@material-ui/core/Avatar";
import Swiper from "react-id-swiper";
import Hidden from "@material-ui/core/Hidden";

const params = {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  activeSlideKey: 1,
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true
  },
  pagination: {
    el: ".swiper-pagination",
    bulletActiveClass:"customBulletActive"
  }
};

const paramsXs = {
  effect: "cube",
  grabCursor: true,
  cubeEffect: {
    shadow: true,
    slideShadows: true,
    shadowOffset: 20,
    shadowScale: 0.94
  },
  pagination: {
    el: ".swiper-pagination",
    bulletActiveClass:"customBulletActive"
  }
};

const styles = theme => ({
  root: {
    flexGrow: 1,
    margin: "16px"
  },
  div: {
    textAlign: "center",
    padding: "16px",
    // minHeight: "340px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    "&:hover": {
      // backgroundColor:"#d81b60",
      // color:"#ffffff",
      // transition: "all .3s ease-out"
    }
  },
  avatar: {
    margin: 10,
    width: 150,
    height: 150
  }
});

class OurTeam extends React.Component {
  state = {
    spacing: "40"
  };

  render() {
    const { classes, team } = this.props;
    const { spacing } = this.state;

    return (
      <div className={classes.root}>
        <Grid container spacing={24}>
          <Grid item xs={12} align="center">
            <Typography component="h2" variant="h2" style={{color:"#d81b60"}} className="cssanimation sequence leMovingBackFromRight" gutterBottom>
              Here is our team
            </Typography>
          </Grid>
        </Grid>
        <Hidden smDown>
        <Paper>
          <Grid container spacing={spacing}>
              <Swiper {...params}>
                {team.map((item, key) => {
                  return (
                    <Grid item sm={4} xs={12} key={key}>
                      <div className={classes.div}>
                        <Avatar
                          alt={item.name}
                          src={item.photo}
                          className={classes.avatar}
                        />
                        <Typography variant="title" gutterBottom>
                          {item.name}
                        </Typography>
                        <Typography variant="subheading" gutterBottom>
                          {item.designation}
                        </Typography>
                        <Typography gutterBottom>{item.about}</Typography>
                      </div>
                    </Grid>
                  );
                })}
              </Swiper>
          </Grid>

        </Paper>
        </Hidden>

        <Hidden smUp>
          <Swiper {...paramsXs}>
            {team.map((item, key) => {
              return (
                  <Paper style={{height:"340px"}}>
                    <div className={classes.div} key={key}>
                      <Avatar
                        alt={item.name}
                        src={item.photo}
                        className={classes.avatar}
                      />
                      <Typography variant="title" gutterBottom>
                        {item.name}
                      </Typography>
                      <Typography variant="subheading" gutterBottom>
                        {item.designation}
                      </Typography>
                      <Typography gutterBottom>{item.about}</Typography>
                    </div>
                  </Paper>
              );
            })}
          </Swiper>
        </Hidden>
      </div>
    );
  }
}

OurTeam.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(OurTeam);
