import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
// import Avatar from "@material-ui/core/Avatar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import Hidden from "@material-ui/core/Hidden";
import Navigator from "./components/Navigator";
import UserRoutes from "../../../../ui-routes/UserRoutes";
import BottomNavigation from "./components/BottomNavigation";
import { connect } from "react-redux";
import { withTranslation } from "react-i18next";


const menuItems=[
  {
    name: "Home",
    icon: "home"
  },
  // {
  //   name: "Settings",
  //   icon: "settings"
  // },
  // {
  //   name: "Logout",
  //   icon: "exit_to_app"
  // }
];

const drawerWidth = 240;

const styles = theme => ({
  root: {
    display: "flex"
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    background: "white"
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 36
  },
  hide: {
    display: "none"
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap"
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    overflowX: "hidden",
    width: 8 * 7 + 1,
    [theme.breakpoints.up("sm")]: {
      width: 8 * 9 + 1
    }
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 8px",
    ...theme.mixins.toolbar
  },
  content: {
    flexGrow: 1,
    padding: "16px 16px 54px"
  },
  userHomeHeader: {
    fontSize: "30px",
    fontWeight: "bold",
    fontStyle: "normal",
    fontStretch: "normal",
    lineHeight: "normal",
    letterSpacing: "normal",
    color: "#4d4e4e"
  },
  userhomeSubHeader: {
    fontSize: "28px",
    fontWeight: "500",
    fontStyle: "normal",
    fontStretch: "normal",
    lineHeight: "normal",
    letterSpacing: "-0.93px",
    color: "#d81b60"
  },
  webHeader: {
    display: "flex",
    alignItems: "center",
    justifyContent: "left",
    flexGrow: 1,
    marginLeft: "16px"
  },
  avatar: {
    marginRight: "16px"
  }
});

class MiniDrawer extends React.Component {
  state = {
    open: false
  };

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };



  render() {
    const { classes, theme , t} = this.props;
    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar
          position="fixed"
          className={classNames(classes.appBar, {
            [classes.appBarShift]: this.state.open
          })}
        >
          <Toolbar disableGutters={!this.state.open}>
            <Hidden xsDown>
              <IconButton
                color="primary"
                aria-label="Open drawer"
                onClick={this.handleDrawerOpen}
                className={classNames(classes.menuButton, {
                  [classes.hide]: this.state.open
                })}
              >
                <MenuIcon />
              </IconButton>
            </Hidden>
            <Typography
              variant="h6"
              color="inherit"
              noWrap
              classes={{ root: classes.webHeader }}
            >
              <span className={classes.userHomeHeader}>{t("appNameOne")}</span>
              <span
                className={classes.userhomeSubHeader}
                style={{ marginLeft: "8px" }}
              >
                {t("appNameTwo")}
              </span>
            </Typography>
            {/*<Avatar
              alt="Remy Sharp"
              src="https://firebasestorage.googleapis.com/v0/b/mihy-all.appspot.com/o/WhatsApp%20Image%202019-02-23%20at%209.37.56%20PM.jpeg?alt=media&token=fa3d29e1-7dc2-429e-89b1-b9aa677ea91d"
              className={classes.avatar}
            />*/}
          </Toolbar>
        </AppBar>
        <Hidden xsDown>
          <Drawer
            variant="permanent"
            className={classNames(classes.drawer, {
              [classes.drawerOpen]: this.state.open,
              [classes.drawerClose]: !this.state.open
            })}
            classes={{
              paper: classNames({
                [classes.drawerOpen]: this.state.open,
                [classes.drawerClose]: !this.state.open
              })
            }}
            open={this.state.open}
          >
            <div className={classes.toolbar}>
              <IconButton onClick={this.handleDrawerClose}>
                {theme.direction === "rtl" ? (
                  <ChevronRightIcon />
                ) : (
                  <ChevronLeftIcon />
                )}
              </IconButton>
            </div>
            <Divider />
            <Navigator
              menuItems={menuItems}
              t={t}
            />
          </Drawer>
        </Hidden>
        <Hidden smUp>
          <BottomNavigation menuItems={menuItems} t={t}/>
        </Hidden>
        <main className={classes.content}>
          <div className={classes.toolbar} />
          <UserRoutes />
        </main>
      </div>
    );
  }
}

MiniDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

const mapStateToProps = ({ screenConfiguration }) => {
  const { preparedFinalObject = {} } = screenConfiguration;
  const { userInfo = {} } = preparedFinalObject;
  const { user = {} } = userInfo;
  return { user };
};

export default withStyles(styles, { withTheme: true })(
  connect(
    mapStateToProps,
    null
  )(withTranslation()(MiniDrawer))
);
