import React from "react";
import TextField from "@material-ui/core/TextField";
import Select from "react-select";
import { emphasize, makeStyles, useTheme } from '@material-ui/core/styles';

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

const useStylesForSelect = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    height: 250,
    minWidth: 290,
    zIndex:1000
  },
  input: {
    display: 'flex',
    padding: 0,
    height: '54px',
  },
  valueContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    flex: 1,
    alignItems: 'center',
    overflow: 'hidden',
  },
  chip: {
    margin: theme.spacing(0.5, 0.25),
  },
  chipFocused: {
    backgroundColor: emphasize(
      theme.palette.type === 'light' ? theme.palette.grey[300] : theme.palette.grey[700],
      0.08,
    ),
  },
  noOptionsMessage: {
    padding: theme.spacing(1, 2),
  },
  singleValue: {
    fontSize: 16,
  },
  placeholder: {
    position: 'absolute',
    left: 2,
    bottom: 6,
    fontSize: 16,
  },
  paper: {
    position: 'absolute',
    zIndex: 1,
    marginTop: theme.spacing(1),
    left: 0,
    right: 0,
  },
  divider: {
    height: theme.spacing(2),
  },
}));

const SmokerProfile = ({
  handleChange,
  smokerProfile = {},
  selectedOption = null,
  countries = []
}) => {
  const classes = useStyles();
  const selectClasses = useStylesForSelect();
  const theme = useTheme();
  const selectStyles = {
    input: base => ({
      ...base,
      color: theme.palette.text.primary,
      '& input': {
        font: 'inherit',
      }
    }),
    control:base=>({
      ...base,
      height:"54px"
    }),
    container:base=>({
      ...base,
      zIndex:"1000"
    })
  };
  countries = countries.map(country => {
    return {
      label: country.name,
      value: country.alpha3Code,
      ...country
    };
  });
  return (
    <div className={classes.container}>
      <TextField
        required
        id="outlined-name"
        label="Name"
        className={classes.textField}
        value={smokerProfile.name}
        onChange={e =>
          handleChange("userInfo.smokerProfile.name", e.target.value)
        }
        margin="normal"
        variant="outlined"
      />
      <TextField
        required
        id="outlined-mobileNumber"
        label="Mobile Number"
        className={`${classes.textField} ${classes.textFieldCustom}`}
        value={smokerProfile.mobileNumber}
        onChange={e =>
          handleChange("userInfo.smokerProfile.mobileNumber", e.target.value)
        }
        margin="normal"
        variant="outlined"
        type="number"
      />
      <Select
        inputId="react-select-single"
        classes={selectClasses}
        styles={selectStyles}
        TextFieldProps={{
          required:true,
          label: "Country",
          variant:"outlined",
          InputLabelProps: {
            htmlFor: "react-select-single",
            shrink: true
          }
        }}
        value={smokerProfile.country}
        placeholder="Search a country *"
        onChange={selectedOption => {
          handleChange("userInfo.smokerProfile.country", selectedOption);
          handleChange(
            "userInfo.smokerProfile.currency",
            selectedOption.currencies[0].symbol
          );
        }}
        options={countries}
      />
      <TextField
        required
        disabled
        id="outlined-currency"
        label="Currency"
        className={`${classes.textField}`}
        defaultValue={" "}
        value={smokerProfile.currency}
        onChange={e =>
          handleChange("userInfo.smokerProfile.currency", e.target.value)
        }
        margin="normal"
        variant="outlined"
      />
    </div>
  );
};

export default SmokerProfile;
