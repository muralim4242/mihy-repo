import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import Button from "@material-ui/core/Button";

const styles = theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
    // position:"fixed",
    // bottom:"0"
  },
  gridList: {
    width: "100%",
    flexWrap: "nowrap",
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: "translateZ(0)",
    padding: "8px 0 8px 8px"
  }
});

function SingleLineGridList(props) {
  const { classes, bloodGrp } = props;

  return (
    <div className={classes.root}>
      <GridList className={classes.gridList} cols={5.5} cellHeight={56}>
        {bloodGrp.map((item, itemKey) => (
          <GridListTile key={itemKey}>
            <Button color="primary" variant="fab">
              {item.name}
            </Button>
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}

SingleLineGridList.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SingleLineGridList);
