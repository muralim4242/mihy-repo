import React from "react";
import PropTypes from "prop-types";
import {Route,Link} from "react-router-dom";
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
  Main,
  Button,
  Container,
  Item
} from "ui-atoms";
import Avatar from '@material-ui/core/Avatar';
import IconButton from "@material-ui/core/IconButton";
import Hidden from "@material-ui/core/Hidden";
import Divider from "@material-ui/core/Divider";
import { RenderRoutes } from "ui-molecules";
import appRoutes from "config/routes/app-routes";
import styles from "./css";

class Landing extends React.Component {
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
        <List>
          <ListItem button>
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem button component="a" href="#simple-list">
            <ListItemText primary="Edit Profile" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Contact Us" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Logout" />
          </ListItem>
          <ListItem button>
          <Link to="/blood">
            <ListItemText primary="Blood" />
          </Link>
          </ListItem>
        </List>
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
              Mihy
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
        <Main className={classes.content} style={{marginTop:"50px"}}>
          <Route  path="/" component={()=><Div>
            <Container>
              <Item xs={6}>
              <Button fullWidth={true} variant="extendedFab" aria-label="Search Donar" style={{background:"#fff",color:"#BDBDBD",border:"2px solid #26A69A",borderShadow:"none"}} >
                {/*<Button variant="fab" color="primary" aria-label="S" >
                  S
                </Button>*/}
                <Avatar style={{background:"#fff",color:"#BDBDBD",border:"1px solid #EC407A"}}><Icon iconName="search"/></Avatar>
                Search donar
              </Button>
              </Item>
              <Item xs={6}>
              <Button fullWidth={true} variant="extendedFab" aria-label="Registration">
                {/*<Button variant="fab" color="primary" aria-label="S" >
                  S
                </Button>*/}
                <Avatar>R</Avatar>
                Registration
              </Button>
              </Item>
            </Container>
            </Div>} />
          <Route  path="/blood" component={()=><Div>blood</Div>} />
          {/*<RenderRoutes basePath={match.path} routes={appRoutes} />*/}
        </Main>
      </Div>
    );
  }
}

Landing.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(Landing);
