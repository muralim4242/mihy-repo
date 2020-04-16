import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import Icon from "@material-ui/core/Icon";

const styles = {
  root: {
    width: "100%",
    position: "fixed",
    bottom: "0px",
    zIndex: "1000"
  }
};

class SimpleBottomNavigation extends React.Component {
  state = {
    value: 0
  };

  handleChange = (event, value) => {
    const { t, setAppData } = this.props;
    this.setState({ value });
    if (value) {
      setAppData("snackbar", {
        open: true,
        variant: "success",
        message: t("Comming Soon!")
      });
    }
  };

  render() {
    const { classes, menuItems = [], t } = this.props;
    const { value } = this.state;

    return (
      <BottomNavigation
        value={value}
        onChange={this.handleChange}
        showLabels
        className={classes.root}
      >
        {menuItems.map((menu, key) => {
          return (
            <BottomNavigationAction
              key={key}
              label={t(menu.name)}
              icon={<Icon color="primary">{menu.icon}</Icon>}
            />
          );
        })}
      </BottomNavigation>
    );
  }
}

SimpleBottomNavigation.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SimpleBottomNavigation);
