/*
    ./client/index.js
*/
import React from 'react';
import { render } from 'react-dom';
import { HashRouter as Router, Route, Link } from "react-router-dom";
import { MuiThemeProvider } from '@material-ui/core/styles';
import App from './App.jsx';
import swordsAndSpiritsTheme from './theme';
import '../styles/main.scss'

const renderApp = () => {
    render(
        <MuiThemeProvider theme={swordsAndSpiritsTheme}>
            <Router>
                <App />
            </Router>
        </MuiThemeProvider>,
        document.getElementsByTagName('root')[0]
    );
};

renderApp();