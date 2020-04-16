import React from "react";
import { Card, CardContent, Grid, Typography ,TextField,InputAdornment,Button} from "@material-ui/core";
import StateStatus from "../StateStatus";
import Search from "@material-ui/icons/Search"
// import Select from 'react-select';
// import makeAnimated from 'react-select/animated';


// const animatedComponents = makeAnimated();


const TopList = ({ topList = [], t ,handleOpen,handleStateSearch,stateSearchText=""}) => {

  return (
    <div>
      <Typography variant="h5" gutterBottom color="primary">
        {t("dashboard.toplist")}
      </Typography>
      {/*<Select
        closeMenuOnSelect={false}
        components={animatedComponents}
        options={topList.map((state)=>{return {value:state.statecode,label:state.state}})}
     />*/}
     <TextField
        // className={classes.margin}
        id="input-with-icon-textfield"
        label="Search State"
        fullWidth={true}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Search />
            </InputAdornment>
          ),
        }}
        onChange={(e)=>{
          handleStateSearch(e.target.value)
        }}
      />
      <Grid container spacing={1} style={{marginBottom:"8px",marginTop:"8px"}}>
        {topList.map((stateStatus,key) => {
          return stateStatus.statecode!=="TT" && stateStatus.state.toLowerCase().startsWith(stateSearchText.toLowerCase()) && (
            <Grid item xs={6} key={key}>
              <Card>
                <CardContent>
                  <StateStatus status={stateStatus} t={t} />
                  <Button variant="outlined" color="primary" onClick={(e)=>handleOpen(stateStatus.state)} size="small" fullWidth>{t("dashboard.view-district")}</Button>
                </CardContent>
              </Card>
            </Grid>
          )
        })}
      </Grid>
    </div>
  );
};

export default TopList;
