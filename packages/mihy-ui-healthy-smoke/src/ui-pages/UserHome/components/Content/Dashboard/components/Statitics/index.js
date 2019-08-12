import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  card: {
    minWidth: 275,
    margin:"8px"
  },
  title: {
    fontSize: 14
  }
});

export default function Statitics() {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography className={classes.title} color="primary" gutterBottom>
          Statitics
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          Total Count
        </Typography>
        <Typography variant="subtitle2" gutterBottom>
          100
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          Amount Spent
        </Typography>
        <Typography variant="subtitle2" gutterBottom>
          1000
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          Last Smoked
        </Typography>
        <Typography variant="subtitle2" gutterBottom>
          2 days back
        </Typography>
      </CardContent>
      {/*<CardActions>
        <Button size="small" color="primary">
          More
        </Button>
      </CardActions>*/}
    </Card>
  );
}
