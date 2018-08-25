import React, { Component } from "react";
import MainRoutes from "ui-routes";
import {Div} from "ui-atoms";
import "./index.css";

class App extends Component {
  render() {
    return (
      <Div className="App">
        <MainRoutes />
      </Div>
    );
  }
}

export default App;
