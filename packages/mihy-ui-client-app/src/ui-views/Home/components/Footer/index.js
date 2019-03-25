import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Icon from "@material-ui/core/Icon";

const styles = theme => ({
  root: {
    flexGrow: 1,
    margin: "40px 16px 16px 16px"
  },
  paper: {
    padding: theme.spacing.unit * 2
  },
  button: {
    margin: theme.spacing.unit
  },
  leftIcon: {
    marginRight: theme.spacing.unit
  }
});

class GuttersGrid extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Grid container>
          <Grid item xs={12} align="center">
            <Paper className={classes.paper}>
              <Typography component="h2" variant="headline" gutterBottom>
                Thank you for visiting out site
              </Typography>
              <Typography variant="subheading" gutterBottom>
                You can find us here
              </Typography>
              <div>
                <Button
                  variant="outlined"
                  color="primary"
                  className={classes.button}
                  onClick={(e)=>{
                    window.open("https://www.facebook.com/MIHY-521187601702908/?ref=settings", "_blank");
                  }}
                >
                  <Icon
                    className={classNames(
                      classes.leftIcon,
                      "fab fa-facebook-square"
                    )}
                  />
                  Facebook
                </Button>
              {/*  <Button
                  variant="outlined"
                  color="primary"
                  className={classes.button}
                  onClick={(e)=>{
                    window.open("https://twitter.com/MIHY19738919", "_blank");
                  }}
                >
                  <Icon
                    className={classNames(
                      classes.leftIcon,
                      "fab fa-twitter-square"
                    )}
                  />
                  Twitter
                </Button>*/}
                {/*<Button
                  variant="outlined"
                  color="primary"
                  className={classes.button}
                >
                  <Icon
                    className={classNames(
                      classes.leftIcon,
                      "fab fa-google-plus-square"
                    )}
                  />
                  Google +
                </Button>*/}
                <Button
                  variant="outlined"
                  color="primary"
                  className={classes.button}
                  onClick={(e)=>{
                    window.open("https://github.com/may-i-help-you-org", "_blank");
                  }}
                >
                  <Icon
                    className={classNames(
                      classes.leftIcon,
                      "fab fa-github-square"
                    )}
                  />
                  Github
                </Button>
              </div>
              <Typography variant="caption" gutterBottom>
                © 2019-20 MIHY
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}

GuttersGrid.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(GuttersGrid);
