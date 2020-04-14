import React from "react";
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

const LanguageSelection = ({
  handleChange,
  smokerProfile = {},
  selectedOption = null,
  countries = []
}) => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      
    </div>
  );
};

export default LanguageSelection;
