import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Technologies from "./components/Technologies";
import Showcases from "./components/Showcases";
import Platforms from "./components/Platforms";
import OurTeam from "./components/OurTeam";
import Footer from "./components/Footer";
import Comment from "./components/Comment";
import {technologies,platforms,showcases,team} from "./utils";
import "./index.css";



let timer;
const CHECK_INTERVAL = 3000; // in ms

const styles = theme => ({
  root: {
    position: "relative"
  }
});

class Home extends React.Component {
  state = {
    currentIndexObject: {
      technology: 0,
      showcase: 0,
      platform: 0
    },
    open:false
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };


  clearTimer = () => {
    clearTimeout(timer);
  };

  reset = () => {
    //yet to implement
  };

  initInterval = () => {
    timer = setInterval(() => {
      this.changeCurrentIndex();
    }, CHECK_INTERVAL);
  };

  changeCurrentIndex = () => {
    let { currentIndexObject } = this.state;
    let { technology, showcase, platform } = currentIndexObject;
    technology=((technologies.length-1)===technology)?0:technology+1;
    showcase=((showcases.length-1)===showcase)?0:showcase+1;

    // showcases++;
    // platforms++;
    this.setState({
      currentIndexObject:{
        ...currentIndexObject,
        technology,
        showcase,
        platform
      }
    });
  };

  componentDidMount() {
    this.initInterval();
  }
  componentWillUnmount() {
    this.clearTimer();
  }

  render() {
    const { classes } = this.props;
    const { currentIndexObject,open } = this.state;
    const {handleClose,handleClickOpen} =this;
    return (
      <div className={classes.root}>
        <Header />
        <Banner />
        <Technologies
          technologies={technologies}
          technologyIndex={currentIndexObject.technology}
        />
        {/*<Showcases
          showcases={showcases}
          showcaseIndex={currentIndexObject.showcase}
        />*/}
        <Platforms platforms={platforms}/>
        <OurTeam team={team}/>
        <Footer />
        {/*<Comment handleClose={handleClose} open={open} handleClickOpen={handleClickOpen}/>*/}
      </div>
    );
  }
}

Home.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(Home);
