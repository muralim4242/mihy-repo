import React from "react";
import PropTypes from "prop-types";
import { withStyles, Grid, Button } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { setStatesFromResponse } from "../../ui-redux/app/actions"
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

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
export const ourProducts = [
  {
    name: "Covid19",
    image: require("../../ui-assets/images/covid19.jpg")
  },
  {
    name: "IMS",
    image: require("../../ui-assets/images/ims.jpg")
  }
];
class AllProducts extends React.Component {
  navigateToWebsite = (name) => {
    const { setStatesFromResponse, history } = this.props
    var url = ""
    setStatesFromResponse("appName", name);
    history.push(`/integration/${name}`)
  }
  render() {
    const { classes, history } = this.props;
    const { navigateToWebsite } = this
    return (
      <div className={classes.root}>
        <Grid container spacing={24}>
          <Grid item xs={12} sm={12}>
            <Grid container spacing={24}>
              <Grid item xs={12}>
                <ArrowBackIcon onClick={() => history.push("/")} />
                <Typography
                  component="h2" variant="h2" style={{ color: "#d81b60" }}
                  className="cssanimation sequence leMovingBackFromRight" gutterBottom>
                  Our Products
              </Typography>
              </Grid>
            </Grid>
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
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(withStyles(styles)(AllProducts)))
