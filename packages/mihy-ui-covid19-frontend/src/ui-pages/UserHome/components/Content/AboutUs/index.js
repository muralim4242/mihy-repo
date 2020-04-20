import React from "react";
import { withStyles, Typography, Grid } from '@material-ui/core';
import Swiper from "../../../../../ui-containers/SwiperComponent";
import isEmpty from "lodash/isEmpty";
import { mapDispatchToProps } from "../../../../../ui-utils/commons";
import { connect } from "react-redux";
const data = [
  {
    name: "Murali. M",
    role: "Fullstack Developer",
    roleInCovid19: "Fullstack Developer",
    skills: "JS, React JS, Node JS and DevOPS",
    qualification: "B.E. in ISE, Diploma in CSE",
    from: "Shimoga, Karnataka",
    src: "assets/murali.jpeg"
  },
  {
    name: "Thahareema",
    role: "UI/UX Designer",
    roleInCovid19: "UI/UX Designer",
    skills: "Adobe XD and Product Management",
    qualification: "Diploma in ECE",
    from: "Chaamaraajanagara, Karnataka",
    src: "assets/thahareema.jpeg"
  },
  {
    name: "Praveen M P",
    role: "Fullstack Developer",
    roleInCovid19: "Frontend Developer",
    skills: "Javascript, React, Angular",
    qualification: "MCA",
    from: "Bangalore",
    src: "assets/praveen.jpeg"
  },
  {
    name: "Shalu Singh",
    role: "Fullstack Developer",
    roleInCovid19: "Frontend Developer",
    skills: "JS, React, Redux, Material-ui",
    qualification: "M.Tech in CSE, VIT",
    from: "Bulandshahar, Uttar Pradesh",
    src: "assets/shalu.jpeg"
  },
  {
    name: "Bikki Mahato",
    role: "Fullstack Developer",
    roleInCovid19: "Frontend Developer",
    skills: "JS, React, Redux, Material-ui, Node JS",
    qualification: "B.Tech in IT",
    from: "Kolkata, West Bengal",
    src: "assets/bikki.jpeg"
  },
  {
    name: "Pooja Datyal",
    role: "Fullstack Developer",
    roleInCovid19: "Frontend Developer",
    skills: "JS, React, Redux, Material-ui",
    qualification: "B.Tech in CSE",
    from: "Zirakpur, Punjab",
    src: "assets/pooja.jpeg"
  },
  {
    name: "Gagan",
    role: "Fullstack Developer",
    roleInCovid19: "Frontend Developer",
    src: "assets/boy.jpg"
  },
  {
    name: "Neha Kumari",
    role: "Fullstack Developer",
    roleInCovid19: "Backend Developer",
    skills: "JS, Node JS, Firebase",
    qualification: "B.Tech in CSE",
    from: "Ramgarh, Jharkhand",
    src: "assets/neha.jpeg"
  }
];
const styles = theme => ({
  nameStyle: {
    margin: "10px 0px",
    textAlign: "center"
  },
  roleStyle: {
    marginBottom: 10,
    textAlign: "center"
  },
  mainContainer: {
    position: "absolute",
    top: "45%",
    [theme.breakpoints.down("sm")]: {
      top: "38%"
    },
    left: "50%",
    marginLeft: "-50%",
    marginTop: "0%"
  },
  contentContainer: {
    margin: "25px 0px"
  },
  grid: {
    margin: "10px 0px",
    display: "flex",
    justifyContent: "center"
  },
  placeGrid: {
    margin: "10px 0px 75px 0px",
    textAlign: "right",
    padding: "0px 40px"
  }

})
class AboutUs extends React.Component {

  render() {
    const { classes, aboutUsContent, setAppData ,t} = this.props;
    const { name, role, roleInCovid19, skills, qualification, from } = aboutUsContent;

    return (
      <div>
      <Grid container direction="column" justify="center" alignItems="center">
        <Typography variant="h6" color="primary">
          { t('About US') }
      </Typography>
        </Grid>
      <Grid container>
        <Grid item md={12} sm={12} xs={12}>
          <Swiper data={data} setAppData = {setAppData}/>
        </Grid>
        {!isEmpty(aboutUsContent) &&
          <Grid item md={12} xs={12} sm={12} className={classes.contentContainer}>
                <Grid container className={classes.mainContainer}>
                  <Grid item md={12} sm={12} xs={12} className={classes.nameStyle}>
                    <Typography variant = "h6" color = "primary">{name}</Typography></Grid>
                  <Grid item md={12} sm={12} xs={12} className={classes.roleStyle}>
                  <Typography variant="subtitle2"  style={{color:"#9e9e9e"}}>
                  {role}
                  </Typography>
                  </Grid>
                  <Grid item md={12} sm={12} xs={12} className={classes.grid}>
                    <Typography variant="subtitle2">Role in Covid 19:&nbsp;</Typography>
                    <Typography variant="subtitle2" style={{color:"#9e9e9e"}}>{roleInCovid19}</Typography>
                  </Grid>
                  {skills && <Grid item md={12} sm={12} xs={12} className={classes.grid}>
                    <Typography variant="subtitle2">Skills:&nbsp;</Typography>
                    <Typography variant="subtitle2" style={{color:"#9e9e9e"}}>{skills}</Typography>
                  </Grid>}
                  {qualification && <Grid item md={12} sm={12} xs={12} className={classes.grid}>
                    <Typography variant="subtitle2">Qualification:&nbsp;</Typography>
                    <Typography variant="subtitle2" style={{color:"#9e9e9e"}}>{qualification}</Typography>
                  </Grid>}
                  {/*from && <Grid item md={12} sm={12} xs={12} className={classes.placeGrid}>
                <Typography variant="subtitle2" style={{color:"#9e9e9e"}}>{from}</Typography>
              </Grid>*/}
                </Grid>

          </Grid>
        }
      </Grid>
      </div>
    );
  }
};
const mapStateToProps = ({ screenConfiguration }) => {
  const { preparedFinalObject = {} } = screenConfiguration;
  const {
    aboutUsContent = {
      name: "Murali. M",
      role: "Fullstack Developer",
      roleInCovid19: "Fullstack Developer",
      skills: "JS, React JS, Node JS and DevOPS",
      qualification: "B.E. in ISE, Diploma in CSE",
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
