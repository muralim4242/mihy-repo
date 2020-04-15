import React from "react";
import {
  Card,
  CardContent,
  Grid,
  Typography,
  Dialog,
  AppBar,
  Toolbar,
  IconButton,
  Slide,
  TextField,
  InputAdornment
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import Search from "@material-ui/icons/Search";
import { makeStyles } from "@material-ui/core/styles";

import DistrictStatus from "../DistrictStatus";
// import Select from "react-select";
// import makeAnimated from "react-select/animated";

// const animatedComponents = makeAnimated();

const useStyles = makeStyles(theme => ({
  root: {
    padding: "8px"
  },
  appBar: {
    position: "relative"
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1
  },
  textfield:{
    marginBottom:"8px"
  }
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const TopDistrictList = ({
  topDistrictList = [],
  handleClose,
  t,
  dialogOpen,
  handleDistrictSearch,
  districtSearchText="",
  selectedState
}) => {
  const classes = useStyles();
  return (
    <div>
      <Dialog
        fullScreen
        open={dialogOpen}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              {t("dashboard.top-district-list")}
            </Typography>
          </Toolbar>
        </AppBar>
        <div className={classes.root}>
          {/*<Typography variant="h5" gutterBottom color="primary">
            {t("dashboard.top-district-list")}
          </Typography>*/}
          {/*<Select
            closeMenuOnSelect={false}
            components={animatedComponents}
            options={topDistrictList.map((district)=>{
              return {
                value:district.code,
                label:district.code
              }
            })}
          />*/}
          <TextField
             className={classes.textfield}
             id="input-with-icon-textfield"
             label="Search District"
             fullWidth={true}
             InputProps={{
               startAdornment: (
                 <InputAdornment position="start">
                   <Search />
                 </InputAdornment>
               ),
             }}
             onChange={(e)=>{
               handleDistrictSearch(e.target.value)
             }}
           />
          <Grid container spacing={2}>
            {topDistrictList.map((stateStatus,key) => {
              return stateStatus.code.toLowerCase().startsWith(districtSearchText.toLowerCase()) && (
                <Grid item xs={6} key={key}>
                  <Card>
                    <CardContent>
                      <DistrictStatus status={stateStatus} t={t} selectedState={selectedState}/>
                    </CardContent>
                  </Card>
                </Grid>
              );
            })}
          </Grid>
        </div>
      </Dialog>
    </div>
  );
};

export default TopDistrictList;
