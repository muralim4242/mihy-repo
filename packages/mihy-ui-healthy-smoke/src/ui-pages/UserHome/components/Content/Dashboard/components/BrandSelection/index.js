import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import AddIcon from "@material-ui/icons/Add";
import IconButton from "@material-ui/core/IconButton";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "flex-end"
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120
  }
}));

const BrandSelection = ({
  selectedBrand = "bistal",
  brands = [],
  handleChange
}) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="brand-simple">Brand</InputLabel>
        <Select
          value={selectedBrand}
          onChange={(e)=>handleChange(e.target.value)}
          inputProps={{
            name: "brand",
            id: "brand-simple"
          }}
        >
          {
            brands.map((brand,index)=><MenuItem key={index} value={brand.name}>{brand.name}</MenuItem>)
          }
        </Select>
      </FormControl>
      <IconButton
        size="small"
        color="primary"
        aria-label="add"
        className={classes.margin}
      >
        <AddIcon />
      </IconButton>
    </div>
  );
};

export default BrandSelection;
