import React, { Component } from "react";
import {Route} from "react-router-dom";
import MainRoutes from "routes";
import {Div} from "ui-atoms";
import Landing from "../Landing";
import "./index.css";

class App extends Component {
  render() {
    return (
      <Div className="App">
        {/*<Route exact path="/" component={Landing}/>*/}
        <MainRoutes />
      </Div>
    );
  }
}

export default App;
