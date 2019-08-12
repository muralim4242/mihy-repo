import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';
import MinusIcon from '@material-ui/icons/Remove';
import Fab from '@material-ui/core/Fab';
import { Typography ,Paper} from '@material-ui/core';


const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent:"center",
    alignItems:"center"
  },
  button:{
    position: "fixed",
    bottom: "74px",
  },
  leftButton:{
    left: "16px"
  },
  rightButton:{
    right: "16px"
  },
  counter:{
    width:"100px",
    height:"100px",
    borderRadius:"50%"
  },
  counterLabel:{
    marginBottom:0
  }
}));


export default function Counter({disableMinus=true}) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Fab size="medium" disabled={disableMinus} color="primary" aria-label="add" className={`${classes.button} ${classes.leftButton}`}>
          <MinusIcon />
      </Fab>
      <Paper classes={{root:`${classes.root} ${classes.counter}`}}>
        <Typography variant="h2" gutterBottom classes={{root:classes.counterLabel}}>
          0
        </Typography>
      </Paper>
      <Fab size="medium" color="primary" aria-label="add" className={`${classes.button} ${classes.rightButton}`}>
          <AddIcon />
      </Fab>

      
    </div>
  );
}
