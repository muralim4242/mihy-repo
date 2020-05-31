import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Swiper from "react-id-swiper";
import Hidden from "@material-ui/core/Hidden";
// import { Link } from "react-router-dom";

const paramsXs = {
  effect: "flip",
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
    bulletActiveClass: "customBulletActive"
  },
};

const styles = theme => ({
  root: {
    flexGrow: 1,
    margin: "16px"
    // zIndex:"100000 !important"
  },
  par: {
    minHeight: "114px",
  },
  imagePadding: {
    padding: "0px 37px 15px 20px"
  },
  images:{
  border: "7px solid #d81b60" 
  }
});

class OurProducts extends React.Component {
  render() {
    const { classes, ourProducts } = this.props;
    return (
      <div className={classes.root}>
        <Grid container spacing={24}>
          <Grid item xs={12} sm={12}>
            <Grid container spacing={24}>
              <Grid item xs={12}>
                <Typography
                  component="h2" variant="h2" style={{ color: "#d81b60" }}
                  className="cssanimation sequence leMovingBackFromRight" gutterBottom>
                  Our Products
              </Typography>
              {/* <Link to="" >
                  View All
              </Link> */}
              </Grid>
            </Grid>
            <Hidden smDown>
              <Grid container spacing={24}>
                {ourProducts.map((item, key) => {
                  return (
                    <Grid item xs={12} sm={6} key={key} >
                      <Paper className={classes.par}>
                        <Typography align="center" variant="title" gutterBottom>{item.name}</Typography>
                        <Typography className={classes.imagePadding}>
                          <img src={item.image} alt={item.name}className={classes.images} width="100%" ></img>
                        </Typography>
                      </Paper>
                    </Grid>
                  );
                })}
              </Grid>
            </Hidden>
            <Hidden smUp>
              <Swiper {...paramsXs}>
                {ourProducts.map((item, key) => {
                  return (
                    <Grid item xs={12} sm={6} key={key} >
                      <Paper className={classes.par}>
                        <Typography align="center" variant="title" gutterBottom>{item.name}</Typography>
                        <Typography className={classes.imagePadding}>
                          <img src={item.image} alt={item.name} className={classes.images} width="100%" ></img>
                        </Typography>
                      </Paper>
                    </Grid>
                  );
                })}
              </Swiper>
            </Hidden>
          </Grid>
        </Grid>
      </div>
    );
  }
}
OurProducts.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(OurProducts);
