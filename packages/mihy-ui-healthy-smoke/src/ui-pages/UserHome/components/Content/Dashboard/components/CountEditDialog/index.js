import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';



const useStyles = makeStyles({
  textField:{
    margin:"8px 0"
  }
});

export default function SimpleDialog(props) {
  const classes = useStyles();
  const { onClose, open,todayCount,handleChange,onUpdate } = props;

  function handleClose() {
    onClose();
  }

  return (
    <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
      <DialogTitle id="simple-dialog-title">Edit today count</DialogTitle>
      <DialogContent>
      <TextField
        id="edit-count"
        label="Today Count"
        className={classes.textField}
        value={todayCount}
        onChange={(e)=>handleChange(e.target.value)}
        margin="normal"
        type="number"
        fullWidth
      />
      <Button color="primary" fullWidth variant="contained" onClick={(e)=>onUpdate()}>Update</Button>
      </DialogContent>
    </Dialog>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  todayCount:PropTypes.number.isRequired
};
