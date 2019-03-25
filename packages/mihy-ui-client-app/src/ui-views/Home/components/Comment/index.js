import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Draggable from 'react-draggable';

function PaperComponent(props) {
  return (
    <Draggable>
      <Paper {...props} />
    </Draggable>
  );
}

class DraggableDialog extends React.Component {

  render() {
    const {open,handleClose}=this.props;
    return (
      <div>
        <Dialog
          open={open}
          onClose={handleClose}
          PaperComponent={PaperComponent}
          aria-labelledby="draggable-dialog-title"
        >
          <DialogTitle id="draggable-dialog-title">May i know how can i help you ?</DialogTitle>
            <DialogContent>
            <TextField
              id="outlined-email-input"
              label="Email"
              type="email"
              name="email"
              autoComplete="email"
              margin="normal"
              variant="outlined"
              fullWidth
            />
            <TextField
              id="outlined-number-input"
              label="Mobile"
              name="number"
              margin="normal"
              variant="outlined"
              fullWidth
            />
            <TextField
              id="outlined-comment-input"
              label="Comment"
              name="comment"
              margin="normal"
              variant="outlined"
              fullWidth
              multiline
            />
            </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={handleClose} color="primary">
              Submit
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}


const styles = theme => ({
  fab: {
    position: "fixed",
    bottom: theme.spacing.unit * 2,
    right: theme.spacing.unit * 2
  }
});

class Comment extends React.Component {
  render() {
    const { classes,open,handleClose,handleClickOpen } = this.props;
    return (
      <div>
        <Button variant="fab" className={classes.fab} color="primary" onClick={(e)=>{
          handleClickOpen()
        }}>
          <i className="material-icons">comment</i>
        </Button>
        <DraggableDialog open={open} handleClose={handleClose}/>
      </div>
    );
  }
}

Comment.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Comment);
