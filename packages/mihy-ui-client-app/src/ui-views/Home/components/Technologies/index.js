import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Icon from "@material-ui/core/Icon";
import classNames from "classnames";
import { fullImage } from "../../utils";
import Swiper from "react-id-swiper";
import Hidden from "@material-ui/core/Hidden";

const params = {
  slidesPerView: 3,
  spaceBetween: 30,
  slidesPerGroup: 3,
  loop: true,
  loopFillGroupWithBlank: true,
  // pagination: {
  //   el: ".swiper-pagination",
  //   clickable: true
  // },
  // navigation: {
  //   nextEl: ".swiper-button-next",
  //   prevEl: ".swiper-button-prev"
  // }
};

const paramsXs = {
  effect: "flip",
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
    bulletActiveClass:"customBulletActive"
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
    // zIndex:"100000 !important"
  },
  paper: {
    padding: theme.spacing.unit * 2,
    color: theme.palette.text.secondary
  },
  smallPaper: {
    marginTop: "-44px",
    minHeight: "170px",
    [theme.breakpoints.down("sm")]: {
      marginTop: 16
    }
  },
  bigPaper: {
    marginTop: "-170px",
    minHeight: "308px",
    [theme.breakpoints.down("sm")]: {
      marginTop: 0
    }
  },
  headerContent: {
    display: "flex",
    justifyContent: "center"
  },
  headerPaper: {
    width: "60px",
    height: "60px",
    marginTop: "-46px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "50%"
  },
  header: {
    color: "white",
    marginTop: "-100px",
    [theme.breakpoints.down("sm")]: {
      marginTop: 0,
      maringBottom:"8px",
      color: "#d81b60"
    }
  },
  par: {
    minHeight: "114px"
  }
});

function CenteredGrid(props) {
  const { classes, technologies, technologyIndex } = props;
  return (
    <div className={classes.root}>
      <Grid container spacing={24}>
        <Grid item xs={12} sm={6}>
          <Grid container spacing={24}>
            <Grid item xs={12}>
              <Typography
                component="h2"
                variant="h2"
                gutterBottom
                className={classNames(classes.header,"cssanimation sequence leMovingBackFromRight")}
              >
                Here is our technologies
              </Typography>
            </Grid>
          </Grid>
          <Hidden smDown>
            <Grid container spacing={24}>
              {technologies.map((item, key) => {
                return (
                  <Grid item xs={12} sm={4} key={key}>
                    <Paper
                      className={classNames(classes.smallPaper, classes.paper)}
                    >
                      <div className={classes.headerContent}>
                        <Paper className={classNames(classes.headerPaper)}>
                          <Icon
                            className={item.iconName}
                            color="primary"
                            style={{ fontSize: "40px" }}
                          />
                        </Paper>
                      </div>

                      <div className={classes.par}>
                        <Typography gutterBottom>{item.about}</Typography>
                      </div>
                      <Button
                        variant="outlined"
                        color="primary"
                        fullWidth
                        onClick={e => {
                          window.open(item.website, "_blank");
                        }}
                      >
                        More
                      </Button>
                    </Paper>
                  </Grid>
                );
              })}
            </Grid>
          </Hidden>

          <Hidden smUp>
            <Swiper {...paramsXs}>
              {technologies.map((item, key) => {
                return (
                  <div key={key}>
                    <Paper
                      className={classNames(classes.smallPaper, classes.paper)}
                    >
                      <div className={classes.headerContent}>
                        <Paper className={classNames(classes.headerPaper)}>
                          <Icon
                            className={item.iconName}
                            color="primary"
                            style={{ fontSize: "40px" }}
                          />
                        </Paper>
                      </div>

                      <div className={classes.par}>
                        <Typography gutterBottom>{item.about}</Typography>
                      </div>
                      <Button
                        variant="outlined"
                        color="primary"
                        fullWidth
                        onClick={e => {
                          window.open(item.website, "_blank");
                        }}
                      >
                        More
                      </Button>
                    </Paper>
                  </div>
                );
              })}
            </Swiper>
          </Hidden>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Hidden smDown>
            <Paper
              className={classNames(classes.bigPaper, classes.paper)}
              style={{
                backgroundImage: `url("${
                  technologies[technologyIndex].bigImage
                }")`,
                ...fullImage
              }}
            >
              {/*technologies[technologyIndex].name*/}
            </Paper>
          </Hidden>
        </Grid>
      </Grid>
    </div>
  );
}

CenteredGrid.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CenteredGrid);
