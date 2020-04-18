import React from "react";
import { withStyles, Typography, Grid, Hidden } from '@material-ui/core';
import Swiper from "../../../../../../ui-containers/SwiperComponent";
import isEmpty from "lodash/isEmpty";
import { mapDispatchToProps } from "../../../../../../ui-utils/commons";
import { connect } from "react-redux";

const styles = theme => ({
  nameStyle: {
    color: "#d81b60",
    fontFamily: "Bree Serif",
    fontSize: 30,
    [theme.breakpoints.down("sm")]: {
      fontSize: 24
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: 24
    },
    fontWeight: 600,
    margin: "10px 0px",
    textAlign: "center"
  },
  roleStyle: {
    fontSize: 24,
    [theme.breakpoints.down("sm")]: {
      fontSize: 18
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: 18
    },
    fontWeight: 400,
    color: "grey",
    marginBottom: 10,
    textAlign: "center"
  },
  heading: {
    fontSize: 22,
    [theme.breakpoints.down("sm")]: {
      fontSize: 16
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: 16
    },
    fontWeight: 600,
  },
  mainContainer: {
    position: "absolute",
    top: "70%",
    left: "50%",
    marginLeft: "-50%",
    marginTop: "0%"
  },
  contentContainer: {
    margin: "25px 0px"
  },
  data: {
    fontSize: 22,
    [theme.breakpoints.down("sm")]: {
      fontSize: 16
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: 16
    },
    color: "grey"
  },
  grid: {
    margin: "10px 0px",
    display: "flex",
    justifyContent: "center"
  },
  placeGrid: {
    margin: "10px 0px 75px 0px",
    textAlign: "right",
    padding: "0px 40px",
    fontSize: 20,
    [theme.breakpoints.down("sm")]: {
      fontSize: 14
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: 14
    },
    color: "grey"
  }

})
class AboutUs extends React.Component {

  render() {
    const { classes, aboutUsContent, setAppData } = this.props;
    const { name, role, skills, qualification, from } = aboutUsContent;

    return (
      <Grid container>
        <Grid item md={12} sm={12} xs={12}>
          <Swiper setAppData={setAppData} />
        </Grid>
        {!isEmpty(aboutUsContent) &&
          <Grid item md={12} xs={12} sm={12} className={classes.mainContainer}>
            <Grid container>
              <Hidden mdDown><Grid item md={3}></Grid></Hidden>
              <Grid item md={6} sm={12} xs={12}>
                <Grid container className={classes.contentContainer}>
                  <Grid item md={12} sm={12} xs={12} className={classes.nameStyle}><em>{name}</em></Grid>
                  <Grid item md={12} sm={12} xs={12} className={classes.roleStyle}>
                    <em>{role}</em>
                  </Grid>
                  <Grid item md={12} sm={12} xs={12} className={classes.grid}>
                    <Typography className={classes.heading}><em>Skills:&nbsp;</em></Typography>
                    <Typography className={classes.data}><em>{skills}</em></Typography>
                  </Grid>
                  <Grid item md={12} sm={12} xs={12} className={classes.grid}>
                    <Typography className={classes.heading}><em>Qualification:&nbsp;</em></Typography>
                    <Typography className={classes.data}><em>{qualification}</em></Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Hidden mdDown><Grid item md={3} sm={3} xs={3}></Grid></Hidden>
              <Grid item md={12} sm={12} xs={12} className={classes.placeGrid}>
                <em>{from}</em>
              </Grid>
            </Grid>
          </Grid>
        }
      </Grid>
    );
  }
};
const mapStateToProps = ({ screenConfiguration }) => {
  const { preparedFinalObject = {} } = screenConfiguration;
  const {
    aboutUsContent = {
      name: "Murali. M",
      role: "Fullstack Developer",
      skills: "JS, React JS, Node JS and DevOPS",
      qualification: "B.E. in ISE,\nDiploma in CSE",
      from: "Shimoga, Karnataka"
    }
  } = preparedFinalObject;

  return {
    aboutUsContent
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(AboutUs));
