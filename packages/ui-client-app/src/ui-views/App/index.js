import React from "react";
import {withRouter} from "react-router-dom";
import { connect } from "react-redux";
import {compose} from "recompose";
import MainRoutes from "ui-routes";
import LoadingIndicator from "mihy-ui-framework/ui-molecules/LoadingIndicator";
// import { Auth } from "aws-amplify";
import Div from "mihy-ui-framework/ui-atoms/HtmlElements/Div";
// import { logout } from "mihy-ui-framework/ui-redux/auth/actions";
import { setRoute } from "mihy-ui-framework/ui-redux/app/actions";
// import {authenticated} from "mihy-ui-framework/ui-redux/auth/actions";
import "./index.css";

class App extends React.Component {
  componentWillReceiveProps(nextProps) {
    const { route: nextRoute } = nextProps;
    const { route: currentRoute, history, setRoute } = this.props;
    if (nextRoute && currentRoute !== nextRoute) {
      history.push(nextRoute);
      setRoute("");
    }
  }

  componentDidMount = async () => {
    // const {authenticatedFn}=this.props;
    try {
      // if (await Auth.currentSession()) {
      //   authenticatedFn();
      // }
    } catch (e) {
      if (e !== "No current user") {
        console.log(e);
      }
    }
  };


  render() {
    const {spinner,authenticated} =this.props;
    const childProps = {
      isAuthenticated: authenticated
    };
    return (
      <Div className="App">
        <MainRoutes childProps={childProps} />
        {spinner && <LoadingIndicator/>}
      </Div>
    );
  }
}

const mapStateToProps = ({ app,auth }) => {
  const { route,spinner } = app;
  const {authenticated} =auth;
  return {
    route,
    spinner,
    authenticated
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setRoute: route => dispatch(setRoute(route)),
    // authenticatedFn:()=>dispatch(authenticated()),
    // logout:()=>dispatch(logout())
  };
};

export default compose(withRouter,connect(mapStateToProps, mapDispatchToProps))(App);
