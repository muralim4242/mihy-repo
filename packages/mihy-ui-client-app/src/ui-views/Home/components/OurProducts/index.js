import React from "react";
import PropTypes from "prop-types";
import { withStyles, Button } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Swiper from "react-id-swiper";
import Hidden from "@material-ui/core/Hidden";
import { Link } from "react-router-dom";
import mainRoutes from "../../../../ui-config/routes/index";
import * as mainConstraints from "../../../../ui-config/routes/route-names";
import AllProducts from "../../../AllProducts";
import IFrame from "../../../IFrame"
import { withRouter } from "react-router-dom"
import { connect } from "react-redux";
import { setStatesFromResponse } from "../../../../ui-redux/app/actions"


const paramsXs = {
  effect: "flip",
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
    bulletActiveClass: "customBulletActive"
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false
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
  images: {
    border: "7px solid #d81b60"
  }
});

class OurProducts extends React.Component {
  navigateToWebsite = (name) => {
    const { setStatesFromResponse, history } = this.props
    var url = ""
    setStatesFromResponse("appName", name);
    history.push(`/integration/${name}`)
  }

  render() {
    const { classes, ourProducts } = this.props;
    const { navigateToWebsite } = this
    const { viewIframe, iframeUrl, appName } = this.props
    return (
      <div className={classes.root}>
        <Grid container spacing={24}>
          <Grid item xs={12} sm={12}>
            <Grid container spacing={24}>
              <Grid item xs={12} style={{ display: "flex" }}>
                <Grid item md={11} xs={9}>
                  <Typography
                    component="h2" variant="h2" style={{ color: "#d81b60" }}
                    className="cssanimation sequence leMovingBackFromRight" gutterBottom>
                    Our Products
              </Typography>
                </Grid>
                <Link to={mainConstraints.All_PRODUCTS}>View All
              </Link>
              </Grid>
            </Grid>
            <Hidden smDown>
              <Grid container spacing={24}>
                {ourProducts.map((item, key) => {
                  return (
                    <Grid item xs={12} sm={6} key={key} >
                      <Paper className={classes.par}>
                        <Grid style={{ display: "flex", justifyContent: "center", textAlign: "center" }}>
                          <Button onClick={() => navigateToWebsite(item.name)}>
                            <Typography align="center" variant="title" >{item.name}</Typography>
                          </Button>
                        </Grid>
                        <Typography className={classes.imagePadding}>
                          <img src={item.image} alt={item.name} className={classes.images} width="100%" ></img>
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
                      <Grid style={{ display: "flex", justifyContent: "center", textAlign: "center" }}>
                          <Button onClick={() => navigateToWebsite(item.name)}>
                          <Typography align="center" variant="title" >{item.name}</Typography>
                          </Button>
                        </Grid>
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
const mapStateToProps = ({ app }) => {
  const { appName } = app
  return {
    appName
  };
};
const mapDispatchToProps = dispatch => {
  return {
    setStatesFromResponse: (attribute, val) => dispatch(setStatesFromResponse(attribute, val))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(withStyles(styles)(OurProducts)))
