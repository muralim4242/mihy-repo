import React from "react";
import { withStyles, Avatar, Grid, Typography } from '@material-ui/core';
import classNames from "classnames";
import Swiper from "swiper";
import "swiper/css/swiper.css";
import "./index.css";

const styles = theme => ({
  bigAvatar: {
    margin: 10,
    width: 150,
    height: 150,
  },
  grid: {
    display: "flex",
    justifyContent: "center"
  }
})

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
      autoplay: {
        delay: 4000,
        disableOnInteraction: false,
      }
    });
  };

  render() {
    const { classes, ourTeam } = this.props;
    return (
      <div className={classNames(classes.swiperContainer, "swiper-container")}>
        <div className="swiper-wrapper">
          {ourTeam.map(team => {
            return (
              team.active === true &&
              <div className="swiper-slide">
                <Grid container className={classes.mainContainer} align="center">
                  <Grid item md={12} sm={12} xs={12}>
                    <Avatar alt={team.name} src={team.src} className={classes.bigAvatar} />
                  </Grid>
                  <Grid item md={12} sm={12} xs={12}>
                    <Typography variant="h6" color="primary" >{team.name}</Typography></Grid>
                  <Grid container>
                    <Grid item md={12} sm={12} xs={12}>
                      {team.role && <Typography variant="subtitle2" style={{ color: "#9e9e9e" }}>
                        {team.role}
                      </Typography>}
                    </Grid>
                  </Grid>
                  <Grid item md={12} sm={12} xs={12} className={classes.grid}>
                    <Typography variant="subtitle2">Role in Covid 19:&nbsp;</Typography>
                    <Typography variant="subtitle2" style={{ color: "#9e9e9e" }}>{team.roleInCovid19}</Typography>
                  </Grid>
                  {team.skills &&
                    <Grid item md={12} sm={12} xs={12} className={classes.grid}>
                      <Typography variant="subtitle2">Skills:&nbsp;</Typography>
                      <Typography variant="subtitle2" style={{ color: "#9e9e9e" }}>{team.skills}</Typography>
                    </Grid>}
                  {team.qualification &&
                    <Grid item md={12} sm={12} xs={12} className={classes.grid}>
                      <Typography variant="subtitle2">Qualification:&nbsp;</Typography>
                      <Typography variant="subtitle2" style={{ color: "#9e9e9e" }}>{team.qualification}</Typography>
                    </Grid>}
                  {/*from && <Grid item md={12} sm={12} xs={12} className={classes.placeGrid}>
                <Typography variant="subtitle2" style={{color:"#9e9e9e"}}>{from}</Typography>
              </Grid>*/}
                </Grid>
              </div>
            )
          })}

        </div>
      </div>

    );
  }
};
export default withStyles(styles)(SwiperComponent);
