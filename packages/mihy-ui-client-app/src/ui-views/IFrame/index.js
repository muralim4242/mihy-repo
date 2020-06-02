import React from "react";
import PropTypes from "prop-types";
import { withStyles, Button } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Swiper from "react-id-swiper";
import Hidden from "@material-ui/core/Hidden";
import { Link } from "react-router-dom";
import mainRoutes from "../../ui-config/routes/index";
import { All_PRODUCTS } from "../../ui-config/routes/route-names";
import AllProducts from "../AllProducts";
import { connect } from "react-redux";
import { setStatesFromResponse } from "../../ui-redux/app/actions"
import { withRouter } from "react-router-dom"
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
export const navigateWebsite = {
  integration: {
    Covid19: {
      url: "https://mihy-covid19.web.app/"
    },
    IMS: {
      url: "https://mihy-im.web.app/#/user-home"
    }
  }
}
class IFrame extends React.Component {
  state = {
    iframeUrl: ""
  }
  componentDidMount = () => {
    const { setStatesFromResponse, appName } = this.props
    let url = ""
    url = navigateWebsite && navigateWebsite.integration && navigateWebsite.integration[appName] && navigateWebsite.integration[appName].url
    setStatesFromResponse("iframeUrl", url)
  }
  render() {
    const { classes, appName, history } = this.props;
    const { iframeUrl } = this.props
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
                  {appName}
                </Typography>
              </Grid>
            </Grid>
            <iframe src={iframeUrl} width="100%" height="500" ></iframe>
          </Grid>
        </Grid>
      </div>
    );
  }
}
IFrame.propTypes = {
  classes: PropTypes.object.isRequired
};

const mapStateToProps = ({ app }) => {
  const { appName, iframeUrl } = app;
  return {
    appName,
    iframeUrl
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setStatesFromResponse: (attribute, val) => dispatch(setStatesFromResponse(attribute, val))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(withStyles(styles)(IFrame)))

