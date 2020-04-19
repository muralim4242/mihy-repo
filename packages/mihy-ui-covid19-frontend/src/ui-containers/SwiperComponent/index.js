import React from "react";
import { withStyles, Avatar } from '@material-ui/core';
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
  swiperContainer: {
    [theme.breakpoints.down("xs")]: {
      top: "32%"
    },
    [theme.breakpoints.down("sm")]: {
      top: "25%",
    },
    
  }
})

class SwiperComponent extends React.Component {

  componentDidMount() {
    const { setAppData, data } = this.props;
    var swiper = new Swiper('.swiper-container', {
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
    swiper.on('transitionEnd', function () {
      console.log('*** mySwiper.realIndex', swiper.activeIndex);
      switch (swiper.activeIndex) {
        case 0:
          setAppData('aboutUsContent', data[0]);
          break;
        case 1:
          setAppData('aboutUsContent', data[1]
          )
          break;
        case 2:
          setAppData('aboutUsContent', data[2]
          )
          break;
        case 3:
          setAppData('aboutUsContent', data[3]
          )
          break;
        case 4:
          setAppData('aboutUsContent', data[4]
          )
          break;
        case 5:
          setAppData('aboutUsContent',data[5]
          )
          break;
        case 6:
          setAppData('aboutUsContent', data[6]
          )
          break;
        case 7:
          setAppData('aboutUsContent', data[7]
          )
          break;
        default:
          setAppData('aboutUsContent', {});
          break;
      }
    });
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classNames(classes.swiperContainer, "swiper-container")}>
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <Avatar alt="Murali. M" src="assets/murali.jpeg" className={classes.bigAvatar} />
          </div>
          <div class="swiper-slide">
            <Avatar alt="Thahareema" src="assets/thahareema.jpeg" className={classes.bigAvatar} />
          </div>
          <div class="swiper-slide">
            <Avatar alt="Praveen M P" src="assets/praveen.jpeg" className={classes.bigAvatar} />
          </div>
          <div class="swiper-slide">
            <Avatar alt="Shalu Singh" src="assets/shalu.jpeg" className={classes.bigAvatar} />
          </div>
          <div class="swiper-slide">
            <Avatar alt="Bikki Mahato" src="assets/bikki.jpeg" className={classes.bigAvatar} />
          </div>
          <div class="swiper-slide">
          <Avatar alt="Pooja Datyal" src="assets/pooja.jpeg" className={classes.bigAvatar} />
          </div>
          <div class="swiper-slide">
          <Avatar alt="Gagan" src="assets/boy.jpg" className={classes.bigAvatar} />
          </div>
          <div class="swiper-slide">
          <Avatar alt="Neha Kumari" src="assets/neha.jpeg" className={classes.bigAvatar} />
          </div>
        </div>
      </div>

    );
  }
};
export default withStyles(styles)(SwiperComponent);