import React from "react";
import {Card,CardContent,Grid,Typography} from "@material-ui/core";
import StateStatus from "../StateStatus";
import DistrictStatus from "../DistrictStatus";

const YourArea=({stateStatus={},districtStatus={},t,handleOpen})=>{
  return (
    <div>
    <Typography variant="h5" gutterBottom color="primary">
        {t("dashboard.yourarea")}
      </Typography>
      <Grid container spacing={1}>

        <Grid item xs={6} >
          <Card onClick={(e)=>handleOpen()}>
            <CardContent>
                <StateStatus status={stateStatus} t={t}/>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={6}>
          <Card>
            <CardContent>
                <DistrictStatus status={districtStatus} t={t}/>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      </div>
  )
}

export default YourArea;
