import React from "react";
import {Card,CardContent,Grid,Typography} from "@material-ui/core";

import Status from "../Status";

const CoutryStatus=({countryStatus={},t})=>{
  return (
    <div className="Margin-bottom-8px">

    <Typography variant="h6"  color="primary" className="Margin-bottom-8px">
        {t("dashboard.cuntry-status-header")}
      </Typography>

      <Grid container spacing={1} alignItems="stretch">
        <Grid item xs={6} >
          <Card style={{background:"#f44336",color:"white"}}>
            <CardContent>
                <Status status={{label:"confirmed",count:countryStatus.confirmed,delta:countryStatus.deltaconfirmed}} t={t}/>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={6}>
        <Card style={{background:"#2196f3",color:"white"}}>
          <CardContent>
              <Status status={{label:"active",count:countryStatus.active,delta:`${(parseInt(countryStatus.deltadeaths)+parseInt(countryStatus.deltarecovered))}`}} t={t}/>
          </CardContent>
        </Card>
        </Grid>
        <Grid item xs={6} >
          <Card style={{background:"#4caf50",color:"white"}}>
            <CardContent>
                <Status status={{label:"recovered",count:countryStatus.recovered,delta:countryStatus.deltarecovered}} t={t}/>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={6}>
        <Card style={{background:"#9e9e9e",color:"white"}}>
          <CardContent>
              <Status status={{label:"deaths",count:countryStatus.deaths,delta:countryStatus.deltadeaths}} t={t}/>
          </CardContent>
        </Card>
        </Grid>
      </Grid>
      </div>
  )
}

export default CoutryStatus;
