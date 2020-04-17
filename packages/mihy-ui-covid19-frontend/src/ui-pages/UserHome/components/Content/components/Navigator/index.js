import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Icon from "@material-ui/core/Icon";
import ListItemText from "@material-ui/core/ListItemText";
import { mapDispatchToProps } from "../../../../../../ui-utils/commons";

// const routes = ["/user-home", "/statistics", "/user-home/settings"];

const styles = {
  root: {
    display: "flex"
  }
};

class SimpleBottomNavigation extends React.Component {
  handleChange = (event, value) => {
    const { menuItems,changeRoute,setAppData,t} = this.props;
    let menu = menuItems[value];
    this.setState({ value });
    if (!menu.route) {
      setAppData("snackbar", {
        open: true,
        variant: "success",
        message: t("Comming Soon!")
      });
    }
    else {
      changeRoute(menu.route)
    }
  };

  render() {
    const { classes, menuItems, t } = this.props;

    return (
      <div className={classes.root}>
        <List>
          {menuItems.map((menu, key) => {
            return (
              <ListItem
                button
                onClick={e => {
                  this.handleChange(e, key);
                }}
                key={key}
              >
                <ListItemIcon>
                  <Icon color="primary">{menu.icon}</Icon>
                </ListItemIcon>
                <ListItemText primary={t(menu.name)} />
              </ListItem>
            );
          })}
        </List>

      </div>
    );
  }
}

SimpleBottomNavigation.propTypes = {
  classes: PropTypes.object.isRequired
};

export default connect(
  null,
  mapDispatchToProps
)(withRouter(withStyles(styles)(SimpleBottomNavigation)));
