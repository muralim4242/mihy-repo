import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import Tooltip from "@material-ui/core/Tooltip";
import Icon from "@material-ui/core/Icon";

const styles = {
  card: {
    backgroundColor: "rgb(242, 242, 242)",
    boxShadow: "none",
    borderRadius: 0
  },
  whiteCard: {
    padding: 18,
    marginTop: 24,
    boxShadow: "none",
    borderRadius: 0
  },
  whiteCardText: {
    padding: 8,
    color: "rgba(0, 0, 0, 0.6000000238418579)",
    fontFamily: "Roboto",
    fontSize: 14,
    fontWeight: 400,
    letterSpacing: 0.65
  },
  toolTipIcon: {
    color: "rgba(0, 0, 0, 0.3799999952316284)",
    paddingLeft: 5,
    paddingTop: 1
  },
  bigheader: {
    color: "rgba(0, 0, 0, 0.8700000047683716)",
    fontFamily: "Roboto",
    fontSize: "34px",
    fontWeight: 500,
    letterSpacing: "1.42px",
    lineHeight: "41px"
  }
};

function totalAmount(arr) {
  return arr.map(item => item.value).reduce((prev, next) => prev + next, 0);
}

function FeesEstimateCard(props) {
  const { classes, estimate } = props;
  const total = totalAmount(estimate.fees);
  return (
    <Card className={classes.card} container>
      <Grid container spacing={24}>
        <Grid item xs={12} sm={7}>
          <CardContent>
            <Typography variant="subheading">{estimate.header}</Typography>
          </CardContent>
          <CardContent style={{ maxWidth: 500 }}>
            <Grid container>
              <Grid item xs={8}>
                {estimate.fees.map((fee, key) => {
                  return (
                    <Grid container>
                      <Typography variant="body1">{fee.name}</Typography>
                      <Tooltip title={fee.info}>
                        <Icon
                          className={classes.toolTipIcon}
                          style={{ fontSize: 18 }}
                        >
                          info_circle
                        </Icon>
                      </Tooltip>
                    </Grid>
                  );
                })}
              </Grid>
              <Grid item xs={4} align="right">
                {estimate.fees.map((fee, key) => {
                  return <Typography variant="body1">{fee.value}</Typography>;
                })}
              </Grid>
            </Grid>
            <Divider />
            <Grid container>
              <Grid item xs={6}>
                <Typography variant="body2">Total</Typography>
              </Grid>
              <Grid item xs={6} align="right">
                <Typography variant="body2">{total}</Typography>
              </Grid>
            </Grid>
          </CardContent>
        </Grid>
        <Grid item xs={12} sm={5}>
          <CardContent>
            <Typography variant="body2" align="right">
              Total Amount
            </Typography>
            <Typography className={classes.bigheader} align="right">
              Rs {total}
            </Typography>
            <Card className={classes.whiteCard}>
              {estimate.extra.map((item, key) => {
                return <Typography variant="body1">{item}</Typography>;
              })}
            </Card>
          </CardContent>
        </Grid>
      </Grid>
    </Card>
  );
}

export default withStyles(styles)(FeesEstimateCard);
