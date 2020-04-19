import React from "react";
import { withStyles, Avatar } from '@material-ui/core';
import Swiper from "swiper";
import "swiper/css/swiper.css";
import "./index.css";

const styles = {
  bigAvatar: {
    margin: 10,
    width: 260,
    height: 260
  }
}

class SwiperComponent extends React.Component {

  componentDidMount() {
    const { setAppData } = this.props;
    var swiper = new Swiper('.swiper-container', {
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
    swiper.on('transitionEnd', function () {
      console.log('*** mySwiper.realIndex', swiper.activeIndex);
      switch (swiper.activeIndex) {
        case 0:
          setAppData('aboutUsContent', {
            name: "Murali. M",
            role: "Fullstack Developer",
            skills: "JS, React JS, Node JS and DevOPS",
            qualification: "B.E. in ISE,\nDiploma in CSE",
            from: "Shimoga, Karnataka"
          });
          break;
        case 1:
          setAppData('aboutUsContent', {
            name: "Thahareema",
            role: "UI/UX Designer",
            skills: "Adobe XD and Product Management",
            qualification: "Diploma in ECE",
            from: "Chaamaraajanagara, Karnataka"
          }
          )
          break;
        case 2:
          setAppData('aboutUsContent', {
            name: "Shalu Singh",
            role: "Frontend Developer",
            skills: "JS, React, Redux, Material-ui",
            qualification: "M.Tech in CSE, VIT",
            from: "Bulandshahar, Uttar Pradesh"
          }
          )
          break;
        case 3:
          setAppData('aboutUsContent', {
            name: "Bikki Mahato",
            role: "Frontend Developer",
            skills: "JS, React, Redux, Material-ui, Node JS",
            qualification: "B.Tech in IT",
            from: "Kolkata, West Bengal"
          }
          )
          break;
        // case 4:
        // setAppData('aboutUsContent', {
        //   name: "Pooja Datyal",
        //   role: "Frontend Developer",
        //   skills: "JS, React, Redux, Material-ui",
        //   qualification: "B.Tech in CSE",
        //   from: "Zirakpur, Punjab"
        // }
        // )
        // break;
        // case 5:
        // setAppData('aboutUsContent', {
        //   name: "Thahareema",
        //   role: "UI/UX Designer",
        //   skills: "Adobe XD and Product Management",
        //   qualification: "Diploma in ECE",
        //   from: "Chaamaraajanagara, Karnataka"
        // }
        // )
        // break;
        default:
          setAppData('aboutUsContent', {});
          break;
      }
    });
  };

  render() {
    const { classes } = this.props;
    return (
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <Avatar alt="Murali. M" src="assets/murali.jpeg" className={classes.bigAvatar} />
          </div>
          <div class="swiper-slide">
            <Avatar alt="Thahareema" src="assets/thahareema.jpeg" className={classes.bigAvatar} />
          </div>
          <div class="swiper-slide">
            <Avatar alt="Shalu Jadaun" src="assets/shalu.jpeg" className={classes.bigAvatar} />
          </div>
          <div class="swiper-slide">
            <Avatar alt="Bikki Mahato" src="assets/bikki.jpeg" className={classes.bigAvatar} />
          </div>
          {/* <div class="swiper-slide">
          <Avatar alt="Pooja Datyal" src="assets/pooja.jpeg" className={classes.bigAvatar} />
            <img src="assets/pooja.jpg" alt="Pooja Datyal" width="100px" />
          </div>
          <div class="swiper-slide">
            <img src="assets/suga.jpg" alt="suga" width="100px" />
          </div>
          <div class="swiper-slide">
            <img src="assets/jhope.jpg" alt="jhope" width="100px" />
          </div> */}
        </div>
        <div class="swiper-pagination"></div>
      </div>

    );
  }
};
export default withStyles(styles)(SwiperComponent);
