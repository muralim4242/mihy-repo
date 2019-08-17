import React from "react";
import TextField from "@material-ui/core/TextField";
import {  makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    flexDirection: "column",
    padding: "16px"
  },
  textField: {
    // marginLeft: theme.spacing(1),
    // marginRight: theme.spacing(1)
  },
  textFieldCustom: {
    marginBottom: "16px"
  }
}));


const AddBrand = ({
  handleChange,
  brand = {}
}) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <TextField
        required
        id="outlined-name"
        label="Name"
        className={classes.textField}
        value={brand.name}
        onChange={e =>
          handleChange("brand.name", e.target.value)
        }
        margin="normal"
        variant="outlined"
      />
      <TextField
        required
        id="outlined-price"
        label="Price"
        className={`${classes.textField} ${classes.textFieldCustom}`}
        value={brand.price}
        onChange={e =>
          handleChange("brand.price", e.target.value)
        }
        margin="normal"
        variant="outlined"
        type="number"
      />
    </div>
  );
};

export default AddBrand;
