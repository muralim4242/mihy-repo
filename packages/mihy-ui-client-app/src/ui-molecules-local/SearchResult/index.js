import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";

const styles = theme => ({
  details: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "left"
  },
  avatar: {
    marginTop: "-45px",
    width: 60,
    height: 60,
    marginRight: "8px"
  },
  nameSection:{
    textAlign:"right",
    marginTop:"-12px",
    width:"100%"
  }
});

function MediaControlCard(props) {
  const { classes, searchResult = [] } = props;

  return (
    <div>
      {searchResult.map((result, key) => {
        return (
          <Card key={key}>
            <CardContent>
              <div className={classes.details}>
                <Avatar className={classes.avatar}>{result.avatar}</Avatar>
                <div className={classes.nameSection}>
                  <Typography variant="title">{result.name}</Typography>
                  <Typography variant="subheading" color="primary">
                    {result.bloodGrp}
                  </Typography>
                </div>
              </div>
              <Typography variant="caption">{result.address}</Typography>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}

MediaControlCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(MediaControlCard);
