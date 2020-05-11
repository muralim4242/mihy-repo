import React from "react";
import ReactDOM from "react-dom";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import themeObject from "./ui-config/theme";
import App from "./App";
import { Provider } from "react-redux";
import store from "./ui-redux/store";
import { HashRouter } from "react-router-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import { I18nextProvider } from "react-i18next";
import i18n from "./ui-config/i18n";

//theme configuration
const theme = createMuiTheme(themeObject);

const rootElement = document.getElementById("root");

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <Provider store={store}>
      <HashRouter>
        <I18nextProvider i18n={i18n}>
          <App />
        </I18nextProvider>
      </HashRouter>
    </Provider>
  </MuiThemeProvider>,
  rootElement
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
