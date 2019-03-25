import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import classNames from 'classnames';
import {fullImage} from "../../utils";


const styles = theme => ({
  root: {
    flexGrow: 1,
    margin:"16px"
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  smallPaper:{
    minHeight:"63px"
  },
  bigPaper:{
    minHeight:"300px"
  }
});

function CenteredGrid(props) {
  const { classes ,showcases,showcaseIndex} = props;

  return (
    <div className={classes.root}>
      <Grid container spacing={24}>
        <Grid item xs={12}>
          <Typography component="h2" variant="headline" gutterBottom>
            Showcases
          </Typography>
          </Grid>
       </Grid>

      <Grid container spacing={24}>
        <Grid item xs={12} sm={6}>
          <Paper className={classNames(classes.bigPaper,classes.paper)} style={{ backgroundImage: `url("${showcases[showcaseIndex].smallImage}")`,...fullImage }}>Showcase 1</Paper>
        </Grid>
        <Grid item xs={0} sm={3}>

        </Grid>
        <Grid item sm={3} xs={12}>
          <Grid container spacing={24}>
            {
              showcases.map((item,key)=>{
                return(
                  <Grid item xs={12} key={key}>
                    <Paper className={classNames(classes.smallPaper,classes.paper)} style={{ backgroundImage: `url("${item.smallImage}")`,...fullImage }}>{item.name}</Paper>
                  </Grid>
                )
              })
            }
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

CenteredGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CenteredGrid);
