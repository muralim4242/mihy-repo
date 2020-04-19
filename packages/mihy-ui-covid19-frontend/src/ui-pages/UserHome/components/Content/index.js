import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
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
import LanguageSelect from "./Dashboard/components/LanguageSelect";
import { mapDispatchToProps } from "../../../../ui-utils/commons";
import { withRouter } from "react-router-dom";

const menuItems = [
  {
    name: "Home",
    icon: "home",
    route: "/user-home"
  },
  {
    name: "Statistics",
    icon: "equalizer",
    route: "/user-home/statistics",
    badge:true,
    badgeLabel:"N"
  },
  {
    name: "Services",
    icon: "airport_shuttle",
    route: "/user-home/services",
    badge:true,
    badgeLabel:"C.."
  }
];

const languages = [
  {
    name: "ENGLISH",
    code: "en"
  },
  {
    name: "हिन्दी",
    code: "hin"
  },
  {
    name: "ಕನ್ನಡ",
    code: "kan"
  },
  {
    name: "മലയാളം",
    code: "mal"
  },
  {
    name: "தமிழ்",
    code: "tam"
  },
  {
    name: "తెలుగు",
    code: "tel"
  },
  {
    name: "मराठी",
    code: "mar"
  }
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
    padding: "8px 8px 54px"
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
  },
  languageButton: {
    alignItems: "right"
  }
});

class MiniDrawer extends React.Component {
  state = {
    open: false,
    openLanguageOptions: false
  };

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };
  openlanguageDialogue = () => {
    const { openLanguageOptions } = this.state;
    this.setState({ openLanguageOptions: !openLanguageOptions });
  };
  closelanguageDialogue = () => {
    const { openLanguageOptions } = this.state;
    this.setState({ openLanguageOptions: !openLanguageOptions });
  };

  onLanguageSelect = code => {
    const { setAppData, i18n } = this.props;
    setAppData("selectedLanguage", code);
    i18n.changeLanguage(code);
    window.localStorage.setItem("selectedLanguage", code);
  };

  share = () => {
    const { setAppData ,t} = this.props;
    if (navigator.share) {
      navigator
        .share({
          title: t("MIHY"),
          text: t("Covid 19 tracker"),
          url: "http://mihy-covid19.web.app"
        })
        .then(() => {
          setAppData("snackbar", {
            open: true,
            variant: "success",
            message: t("Successful shared")
          });
          console.log(t("Successful shared"));
        })
        .catch(error => {
          setAppData("snackbar", {
            open: true,
            variant: "warning",
            message: t("Error sharing")
          });
          console.log("Error sharing", error);
        });
    }
  };

  changeRoute = route => {
    this.props.history.push(route);
  };

  render() {
    const { classes, theme, t, selectedLanguage, setAppData } = this.props;
    const { openLanguageOptions ,open} = this.state;
    const { changeRoute } = this;
    const {
      onLanguageSelect,
      closelanguageDialogue,
      openlanguageDialogue,
      handleDrawerClose,
      handleDrawerOpen,
      share
    } = this;

    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar
          position="fixed"
          className={classNames(classes.appBar, {
            [classes.appBarShift]: open
          })}
        >
          <Toolbar disableGutters={!open}>
            <Hidden xsDown>
              <IconButton
                color="primary"
                aria-label="Open drawer"
                onClick={handleDrawerOpen}
                className={classNames(classes.menuButton, {
                  [classes.hide]: open
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
              <img
                width="24px"
                hieght="24px"
                src="virus-solid.svg"
                alt="corana"
              />
              <span className={classes.userHomeHeader}>{t("appNameOne")}</span>
              <span
                className={classes.userhomeSubHeader}
                style={{ marginLeft: "8px" }}
              >
                {t("appNameTwo")}
              </span>
            </Typography>
        
            <IconButton
              className={classes.languageButton}
              onClick={e => {
                openlanguageDialogue();
              }}
              color="primary"
            >
            <span class="material-icons">g_translate</span>
            </IconButton>
            {navigator.share && (
              <IconButton
                className={classes.languageButton}
                onClick={e => {
                  share();
                }}
                color="primary"
              >
                <span className="material-icons">share</span>
              </IconButton>
            )}
          </Toolbar>
        </AppBar>
        <Hidden xsDown>
          <Drawer
            variant="permanent"
            className={classNames(classes.drawer, {
              [classes.drawerOpen]: open,
              [classes.drawerClose]: !open
            })}
            classes={{
              paper: classNames({
                [classes.drawerOpen]: open,
                [classes.drawerClose]: !open
              })
            }}
            open={open}
          >
            <div className={classes.toolbar}>
              <IconButton onClick={handleDrawerClose}>
                {theme.direction === "rtl" ? (
                  <ChevronRightIcon />
                ) : (
                  <ChevronLeftIcon />
                )}
              </IconButton>
            </div>
            <Divider />
            <Navigator menuItems={menuItems} t={t} changeRoute={changeRoute}   setAppData={setAppData}/>
          </Drawer>
        </Hidden>
        <Hidden smUp>
          <BottomNavigation
            menuItems={menuItems}
            t={t}
            setAppData={setAppData}
            changeRoute={changeRoute}
          />
        </Hidden>
        <main className={classes.content}>
          <div className={classes.toolbar} />
          <UserRoutes />
        </main>

        <LanguageSelect
          t={t}
          openLanguageOptions={openLanguageOptions}
          closelanguageDialogue={closelanguageDialogue}
          languages={languages}
          onLanguageSelect={onLanguageSelect}
          selectedLanguage={selectedLanguage}
        />
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
  const { userInfo = {}, selectedLanguage } = preparedFinalObject;
  const { user = {} } = userInfo;
  return { user, selectedLanguage };
};

export default withStyles(styles, { withTheme: true })(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(withRouter(withTranslation()(MiniDrawer)))
);
