import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { AppBar, Drawer, Div, Toolbar, Typegraphy, Icon } from "ui-atoms";
import IconButton from "@material-ui/core/IconButton";
import Hidden from "@material-ui/core/Hidden";
import styles from "./css";
import { compose } from "recompose";
import ReactJson from "react-json-view";
import { screenHoc } from "ui-hocs";
import CommonView from "ui-molecules/CommonView";

const initScreenConfig = {
  uiFramework: "material-ui",
  name: "mihyLoginScreen",
  components: {
    mihyLoginUsername: {
      componentPath: "TextField",
      props: {
        label: "Email",
        margin: "normal",
        fullWidth: true,
        autoFocus: true,
        required: true
      },
      required: true,
      jsonPath: "body.mihy.username",
      pattern: "^([a-zA-Z0-9@.])+$"
    },
    mihyLoginPassword: {
      componentPath: "TextField",
      props: {
        label: "Password",
        type: "password",
        margin: "normal",
        fullWidth: true,
        required: true
      },
      jsonPath: "body.mihy.password",
      required: true,
      pattern: "^([a-zA-Z0-9!])+$"
    },
    mihyBreakOne: {
      uiFramework: "custom-atoms",
      componentPath: "Break"
    },
    mihyBreakTwo: {
      uiFramework: "custom-atoms",
      componentPath: "Break"
    },
    mihyLoginButton: {
      componentPath: "Button",
      props: {
        variant: "contained",
        color: "primary",
        fullWidth: true
      },
      children: {
        mihyLoginButtonText: {
          uiFramework: "custom-atoms",
          componentPath: "Label",
          props: {
            label: "Login"
          }
        }
      },
      onClickDefination: {
        action: "submit",
        method: "get",
        endPoint: "afbc.com",
        purpose: "authLogin",
        redirectionUrl: "/"
      }
    }
  }
};

class Playground extends React.Component {
  state = {
    mobileOpen: false,
    screenConfig: initScreenConfig,
    view: null
  };

  handleDrawerToggle = () => {
    this.setState(state => ({ mobileOpen: !state.mobileOpen }));
  };

  componentDidMount() {
    const { screenConfig } = this.state;
    this.initScreen(screenConfig);
  }

  initScreen=(screenConfig)=> {
    const hasOwnConfig = true;
    this.setState({
      view: screenHoc({ hasOwnConfig, screenConfig })(CommonView)
    });
  }

  updateScreen=(jsonStatus, action)=> {
    console.log(action);
    console.log(jsonStatus);
    this.initScreen(jsonStatus.updated_src);
  }

  render() {
    const { updateScreen } = this;
    const { classes, theme} = this.props;
    const { view: View, screenConfig } = this.state;

    const drawer = (
      <Div>
        <br />
        Screen configuration
        <br />
        <br />
        <ReactJson
          src={screenConfig}
          collapsed={true}
          displayDataTypes={false}
          onAdd={add => {
            updateScreen(add, "add");
          }}
          onDelete={del => {
            updateScreen(del, "del");
          }}
          onEdit={edit => {
            updateScreen(edit, "edit");
          }}
          onSelect={select => {
            console.log(select);
          }}
        />
      </Div>
    );
    return (
      <Div className={classes.root}>
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={this.handleDrawerToggle}
              className={classes.navIconHide}
            >
              <Icon iconName="menu" />
            </IconButton>
            <Typegraphy variant="title" color="inherit" noWrap>
              Mihy Playground
            </Typegraphy>
          </Toolbar>
        </AppBar>
        <Hidden mdUp>
          <Drawer
            variant="temporary"
            anchor={theme.direction === "rtl" ? "right" : "left"}
            open={this.state.mobileOpen}
            onClose={this.handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper
            }}
            ModalProps={{
              keepMounted: true // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden smDown implementation="css">
          <Drawer
            variant="permanent"
            open
            classes={{
              paper: classes.drawerPaper
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <main className={classes.content}>
        <div className={classes.toolbar} />
        {View && <View />}</main>
      </Div>
    );
  }
}

Playground.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default compose(withStyles(styles, { withTheme: true }))(Playground);
