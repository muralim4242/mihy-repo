import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import {
  AppBar,
  Drawer,
  Div,
  Toolbar,
  List,
  ListItem,
  ListItemText,
  Typegraphy,
  Icon,
  Main
} from "ui-atoms";
import IconButton from "@material-ui/core/IconButton";
import Hidden from "@material-ui/core/Hidden";
import Divider from "@material-ui/core/Divider";
import { RenderRoutes } from "ui-molecules";
import appRoutes from "ui-config/routes/mihy";
import styles from "./css";
// import BloodDashboard from "apps/ui-blood/views/Dashboard";
// import SearchDonor from "apps/ui-blood/views/SearchDonor";
// import Registration from "apps/ui-blood/views/Registration";
// import DonorProcess from "apps/ui-blood/views/DonorProcess";
import {compose} from "recompose";
import {connect} from "react-redux";
import {logout} from "ui-redux/auth/actions";
import ReactJson from 'react-json-view'

const screenConfig = {
  uiFramework: "material-ui",
  name: "mihyLoginScreen",
  components: {
    mihyLoginGrid: {
      componentPath: "Grid",
      children: {
        mihyEmptyRow: {
          componentPath: "Grid",
          props: {
            item: true,
            sm: 4
          }
        },
        mihyLoginItem: {
          componentPath: "Grid",
          props: {
            item: true,
            sm: 4,
            xs: 12
          },
          children: {
            mihyLoginCard: {
              componentPath: "Card",
              children: {
                mihyLoginCardContent: {
                  componentPath: "CardContent",
                  children: {
                    mihyLoginHeader: {
                      componentPath: "Typography",
                      children: {
                        "mihy-login-header-text": {
                          uiFramework: "custom-atoms",
                          componentPath: "Label",
                          props: {
                            label: "Login"
                          }
                        }
                      },
                      props: {
                        align: "center",
                        variant: "title"
                      }
                    },
                    mihyloginDiv: {
                      uiFramework: "custom-atoms",
                      componentPath: "Div",
                      props: {
                        className: "text-center"
                      },
                      children: {
                        mihyLoginUsername: {
                          componentPath: "TextField",
                          props: {
                            label: "Email",
                            margin: "normal",
                            fullWidth: true,
                            autoFocus: true,
                            required: true
                          },
                          required:true,
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
                          onClickDefination:{
                            action:"submit",
                            method:"get",
                            endPoint:"afbc.com",
                            purpose:"authLogin",
                            redirectionUrl:"/"
                          }
                        }
                      }
                    }
                  }
                }
              },
              props: { classes: { root: "container-margin" } }
            }
          }
        }
      },
      props: { container: true }
    }
  }
};



class Playground extends React.Component {
  state = {
    mobileOpen: false
  };

  handleDrawerToggle = () => {
    this.setState(state => ({ mobileOpen: !state.mobileOpen }));
  };



  render() {
    const { classes, theme, match } = this.props;

    const drawer = (
      <Div>
        <Div className={classes.toolbar} />
        <Divider />
        Screen configuration
        <br/>
        <br/>
        <ReactJson src={screenConfig} collapsed={true} displayDataTypes={false} onEdit={(edit)=>{
          console.log(edit);
        }}
        onAdd={(add)=>{
          console.log(add);
        }}
        onDelete={(del)=>{
          console.log(del);
        }}
        onSelect={(select)=>{
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
        <Div className={classes.content}>
          <RenderRoutes basePath={match.url} routes={appRoutes} />
        </Div>
      </Div>
    );
  }
}

Playground.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

// const mapStateToProps=(state)=>{
//   return null
// }

const mapDispatchToProps=(dispatch)=>{
  return {
    logout:()=>dispatch(logout())
  }
}

export default compose(connect(null,mapDispatchToProps),withStyles(styles, { withTheme: true }))(Playground);
