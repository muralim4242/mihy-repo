import React, { Component } from "react";
import MainRoutes from "ui-routes";
import { Auth } from "aws-amplify";
import { Div } from "ui-atoms";
import "./index.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isAuthenticated: false
    };
  }
  userHasAuthenticated = authenticated => {
    this.setState({ isAuthenticated: authenticated });
  };
  componentDidMount = async () => {
    try {
      if (await Auth.currentSession()) {
        this.userHasAuthenticated(true);
      }
    } catch (e) {
      if (e !== "No current user") {
        alert(e);
      }
    }
    this.setState({ isAuthenticating: false });
  };
  handleLogout = async event => {
    await Auth.signOut();

    this.userHasAuthenticated(false);
  };
  render() {
    const childProps = {
      isAuthenticated: this.state.isAuthenticated,
      userHasAuthenticated: this.userHasAuthenticated
    };
    return (
      <Div className="App">
        <MainRoutes childProps={childProps} />
      </Div>
    );
  }
}

export default App;
