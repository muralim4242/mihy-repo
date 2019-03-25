import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';


const styles = {
  root: {
    flexGrow: 1,
    // position:"fixed",
    // width:"100%",
    // top:0,
    // left:0
  },
  appBarRoot:{
    boxShadow:"none"
  },
  grow: {
    flexGrow: 1,
    marginLeft:"8px"
  },
  logo:{

  }
};

function SimpleAppBar(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <AppBar position="static" classes={{root:classes.appBarRoot}}>
        <Toolbar>
            {/*<Paper>*/}
            <Icon class="fas fa-dove" color="primary"></Icon>
          {/*</Paper>*/}
          <Typography variant="h6" color="inherit" className={classes.grow}>
            MIHY
          </Typography>
          {/*<Button color="inherit">
            Technologies
          </Button>
          <Button color="inherit">
            Platforms
          </Button>
          <Button color="inherit">
            Team
          </Button>*/}
        </Toolbar>
      </AppBar>
    </div>
  );
}

SimpleAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleAppBar);
