import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import './index.css';
import App from 'views/App';
import registerServiceWorker from './registerServiceWorker';
import themeObject from "config/themes";

const theme = createMuiTheme(themeObject);

ReactDOM.render(<MuiThemeProvider theme={theme}><Router><App /></Router></MuiThemeProvider>, document.getElementById('root'));
registerServiceWorker();
