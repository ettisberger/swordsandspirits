/*
    ./client/App.jsx
*/
import React from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Header from './header/Header.jsx';
import Footer from './footer/Footer.jsx';
import Home from './home/Home.jsx';

export default class App extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Header/>
                <main>
                    <Route name="home" exact path="/" component={Home} />
                </main>
                <Footer/>
            </React.Fragment>
        )
    }
}
