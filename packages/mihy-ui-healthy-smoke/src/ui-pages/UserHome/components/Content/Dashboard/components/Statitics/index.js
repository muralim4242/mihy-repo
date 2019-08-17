import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  card: {
    minWidth: 275,
    margin: "8px"
  },
  title: {
    fontSize: 14
  },
  cardContent:{
    display:"flex",
    alignItems:"center",
    paddingBottom: "16px !important"
  },
  typoWidth:{
    width:"50%"
  }
});

export default function Statitics({statics}) {
  const classes = useStyles();
  const {amountSpentToday=0,totalCount=0,totalAmountSpent=0,lastSmoked=0}=statics;

  return (
    <div>
      <Typography className={classes.title} color="primary" gutterBottom>
        Statitics
      </Typography>
      <Card className={classes.card}>
        <CardContent classes={{root:classes.cardContent}}>
          <Typography classes={{root:classes.typoWidth}} variant="subtitle1" gutterBottom>
            Amount Spent Today
          </Typography>
          <Typography classes={{root:classes.typoWidth}} align="right" variant="h6" gutterBottom>
            {amountSpentToday}
          </Typography>
        </CardContent>
      </Card>
      <Card className={classes.card}>
        <CardContent classes={{root:classes.cardContent}}>
          <Typography classes={{root:classes.typoWidth}} variant="subtitle1" gutterBottom>
            Total Count
          </Typography>

          <Typography classes={{root:classes.typoWidth}} align="right" variant="h6" gutterBottom>
            {totalCount}
          </Typography>
        </CardContent>
      </Card>
      <Card className={classes.card}>
        <CardContent classes={{root:classes.cardContent}}>
          <Typography classes={{root:classes.typoWidth}} variant="subtitle1" gutterBottom>
            Total Amount Spent
          </Typography>
          <Typography classes={{root:classes.typoWidth}} align="right" variant="h6" gutterBottom>
            {totalAmountSpent}
          </Typography>
        </CardContent>
      </Card>
      <Card className={classes.card}>
        <CardContent classes={{root:classes.cardContent}}>
          <Typography classes={{root:classes.typoWidth}} variant="subtitle1" gutterBottom>
            Last Smoked
          </Typography>
          <Typography classes={{root:classes.typoWidth}} align="right" variant="h6" gutterBottom>
            {lastSmoked && `${lastSmoked.toTimeString().split(" ")[0]} ${lastSmoked.toLocaleDateString()}`}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
