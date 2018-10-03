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
    width: 60,
    height: 60,
    marginRight: "8px"
  }
});

function MediaControlCard(props) {
  const { classes, searchResult = [] } = props;

  return (
    <div>
      {searchResult.map((result, key) => {
        return (
          <Card key={key}>
            <CardContent className={classes.details}>
              <Avatar className={classes.avatar}>{result.avatar}</Avatar>
              <div>
                <Typography variant="title">{result.name}</Typography>
                <Typography variant="subheading" color="primary">
                  {result.bloodGrp}
                </Typography>
                <Typography variant="caption">{result.address}</Typography>
              </div>
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
