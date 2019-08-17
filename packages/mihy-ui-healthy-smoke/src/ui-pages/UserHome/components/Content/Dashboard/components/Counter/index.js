import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';
import MinusIcon from '@material-ui/icons/Remove';
// import Edit from '@material-ui/icons/Edit';
// import Save from '@material-ui/icons/Save';
import Fab from '@material-ui/core/Fab';
// import IconButton from '@material-ui/core/IconButton';
import { Typography ,Paper} from '@material-ui/core';


const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent:"center",
    alignItems:"center",
    flexDirection:"column"
  },
  button:{
    position: "fixed",
    bottom: "74px",
  },
  decreaseButton:{
    left: "16px",
    zIndex:"1000"
  },
  increaseButton:{
    right: "16px"
  },
  saveButton:{
    right: "16px",
    bottom:"132px"
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


export default function Counter({todayCount=0,increase,decrease,/*onEdit,*/save}) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Fab size="medium" disabled={!todayCount} onClick={(e)=>decrease()} color="primary" aria-label="add" className={`${classes.button} ${classes.decreaseButton}`}>
          <MinusIcon />
      </Fab>
      <Typography variant="subtitle1" gutterBottom>
        Today/Last Count {/*<IconButton size="small" color="primary" aria-label="minus" className={classes.margin} onClick={(e)=>onEdit()}>
            <Edit />
        </IconButton>*/}
      </Typography>
      <Paper classes={{root:`${classes.root} ${classes.counter}`}}>
        <Typography variant="h2" gutterBottom classes={{root:classes.counterLabel}}>
          {todayCount}
        </Typography>
      </Paper>
      <Fab size="medium" color="primary" aria-label="add" onClick={(e)=>increase()} className={`${classes.button} ${classes.increaseButton}`}>
          <AddIcon />
      </Fab>

      {/*<Fab disabled={!todayCount} size="medium" color="primary" aria-label="save" onClick={(e)=>save()} className={`${classes.button} ${classes.saveButton}`}>
          <Save />
      </Fab>*/}


    </div>
  );
}
