import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import PePe from "ui-molecules-local/AnimationTexts/PePe";

function animateSequence() {
  var a = document.getElementsByClassName("sequence");
  for (var i = 0; i < a.length; i++) {
    var $this = a[i];
    var letter = $this.innerHTML;
    letter = letter.trim();
    var str = "";
    var delay = 100;
    for (var l = 0; l < letter.length; l++) {
      if (letter[l] != " ") {
        str +=
          '<span style="animation-delay:' +
          delay +
          "ms; -moz-animation-delay:" +
          delay +
          "ms; -webkit-animation-delay:" +
          delay +
          'ms; ">' +
          letter[l] +
          "</span>";
        delay += 150;
      } else str += letter[l];
    }
    $this.innerHTML = str;
  }
}

function animateRandom() {
  var a = document.getElementsByClassName("random");
  for (var i = 0; i < a.length; i++) {
    var $this = a[i];
    var letter = $this.innerHTML;
    letter = letter.trim();
    var delay = 70;
    var delayArray = new Array();
    var randLetter = new Array();
    for (var j = 0; j < letter.length; j++) {
      while (1) {
        var random = getRandomInt(0, letter.length - 1);
        if (delayArray.indexOf(random) == -1) break;
      }
      delayArray[j] = random;
    }
    for (var l = 0; l < delayArray.length; l++) {
      var str = "";
      var index = delayArray[l];
      if (letter[index] != " ") {
        str =
          '<span style="animation-delay:' +
          delay +
          "ms; -moz-animation-delay:" +
          delay +
          "ms; -webkit-animation-delay:" +
          delay +
          'ms; ">' +
          letter[index] +
          "</span>";
        randLetter[index] = str;
      } else randLetter[index] = letter[index];
      delay += 80;
    }
    randLetter = randLetter.join("");
    $this.innerHTML = randLetter;
  }
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    minHeight: "350px",
    color: "#fff",
    backgroundColor: "#d81b60"
    // marginTop:"64px"
  }
});

class PaperSheet extends React.Component {
  componentDidMount() {
    window.onload = function() {
      animateSequence();
      animateRandom();
    };
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root} elevation={1}>
        <Typography variant="h1" component="h1" classes={{ root: "cssanimation sequence leKickOutFront" }}>
          MAY I HELP YOU
        </Typography>
        <br />
        <div style={{ display: "flex" }}>
          <Typography variant="h2" component="h2" classes={{ root: "cssanimation sequence leFadeInLeft"}}>
            {`Software platform,product \&\ service company`}
          </Typography>
          {/*<Typography
            variant="h2"
            component="h2"
            classes={{ root: "cssanimation pepe sequence" }}
          >
            platform
          </Typography>
          <Typography variant="h2" component="h2">
            ,
          </Typography>
          <Typography
            variant="h2"
            component="h2"
            classes={{ root: "cssanimation pepe sequence" }}
          >
            product
          </Typography>
          <Typography variant="h2" component="h2">
            and
          </Typography>
          <Typography
            variant="h2"
            component="h2"
            classes={{ root: "cssanimation pepe sequence" }}
          >
            service
          </Typography>
          <Typography variant="h2" component="h2">
            company
          </Typography>*/}
        </div>
      </div>
    );
  }
}

PaperSheet.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(PaperSheet);
