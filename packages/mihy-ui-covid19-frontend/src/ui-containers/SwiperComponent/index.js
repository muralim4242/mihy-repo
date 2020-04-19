import React from "react";
import { withStyles, Avatar, Grid, Typography } from '@material-ui/core';
import Swiper from "swiper";
import "swiper/css/swiper.css";
import "./index.css";
import classNames from 'classnames';

const styles = theme => ({
  bigAvatar: {
    margin: 10,
    width: 260,
    height: 260,
  },
  nameStyle: {
    color: "#d81b60",
    fontSize: 28,
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
    fontSize: 22,
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
    fontSize: 16,
    fontWeight: 600,
  },
  // mainContainer: {
  //   position: "absolute",
  //   top: "70%",
  //   left: "50%",
  //   marginLeft: "-50%",
  //   marginTop: "0%"
  // },
  contentContainer: {
    margin: "20px 0px"
  },
  data: {
    fontSize: 16,
    color: "grey"
  },
  grid: {
    margin: "10px 0px",
    [theme.breakpoints.down("xs")]: {
      margin: "3px 0px"
    },
    display: "flex",
    justifyContent: "center"
  },
  placeGrid: {
    margin: "10px 0px 75px 0px",
    textAlign: "right",
    padding: "0px 40px",
    fontSize: 16,
    [theme.breakpoints.down("sm")]: {
      fontSize: 14
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: 14
    },
    color: "grey"
  },
  swiperContainer: {
    [theme.breakpoints.down("sm")]: {
      top: "35%"
    },
    [theme.breakpoints.down("xs")]: {
      top: "32%"
    }
  }
});
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
    src: "assets/girl.jpg"
  },
  {
    name: "Gagan",
    role: "Fullstack Developer",
    roleInCovid19: "Frontend Developer",
    src: "assets/boy.jpg"
  }
]
class SwiperComponent extends React.Component {

  componentDidMount() {
    new Swiper('.swiper-container', {
      effect: 'cube',
      grabCursor: true,
      cubeEffect: {
        shadow: true,
        slideShadows: true,
        shadowOffset: 20,
        shadowScale: 0.94,
      },
      pagination: {
        el: '.swiper-pagination',
      },
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      }
    });
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classNames(classes.swiperContainer, 'swiper-container')}>
        <div class="swiper-wrapper">
          {data.map(d => {
            return (
              <div class="swiper-slide">
                <Avatar alt={d.name} src={d.src} className={classes.bigAvatar} />
                <Grid item md={12} xs={12} sm={12} className={classes.mainContainer}>
                  <Grid container>
                    <Grid item md={12} sm={12} xs={12}>
                      <Grid container className={classes.contentContainer}>
                        <Grid item md={12} sm={12} xs={12} className={classes.nameStyle}><em>{d.name}</em></Grid>
                        <Grid item md={12} sm={12} xs={12} className={classes.roleStyle}>
                          <em>{d.role}</em>
                        </Grid>
                        <Grid item md={12} sm={12} xs={12} className={classes.grid}>
                          <Typography className={classes.heading}><em>Role in Covid 19:&nbsp;</em></Typography>
                          <Typography className={classes.data}><em>{d.roleInCovid19}</em></Typography>
                        </Grid>
                        {d.skills && <Grid item md={12} sm={12} xs={12} className={classes.grid}>
                          <Typography className={classes.heading}><em>Skills:&nbsp;</em></Typography>
                          <Typography className={classes.data}><em>{d.skills}</em></Typography>
                        </Grid>}
                        {d.qualification && <Grid item md={12} sm={12} xs={12} className={classes.grid}>
                          <Typography className={classes.heading}><em>Qualification:&nbsp;</em></Typography>
                          <Typography className={classes.data}><em>{d.qualification}</em></Typography>
                        </Grid>}
                        {d.from && <Grid item md={12} sm={12} xs={12} className={classes.grid}>
                          <Typography className={classes.heading}><em>From:&nbsp;</em></Typography>
                          <Typography className={classes.data}><em>{d.from}</em></Typography>
                        </Grid>}
                      </Grid>
                    </Grid>
                    {/* <Grid item md={12} sm={12} xs={12} className={classes.placeGrid}>
                      <em>{d.from}</em>
                    </Grid> */}
                  </Grid>
                </Grid>
              </div>
            )
          })}
        </div>
        <div class="swiper-pagination"></div>
      </div>
    );
  }
};
export default withStyles(styles)(SwiperComponent);
