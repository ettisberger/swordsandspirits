/*
    ./client/App.jsx
*/
import React from 'react';
import {Route} from 'react-router-dom';
import Header from './header/Header';
import Footer from './footer/Footer';
import Home from './home/Home';
import Tickets from './tickets/Tickets';
import Contact from './contact/Contact';
import styled from 'styled-components';

const Main = styled.main`
  margin-top: 110px;
`;

export default class App extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Header/>
                <Main>
                    <Route name="home" exact path="/" component={Home} />
                    <Route name="tickets" exact path="/tickets" component={Tickets} />
                    <Route name="contact" exact path="/contact" component={Contact} />
                </Main>
                <Footer/>
            </React.Fragment>
        )
    }
}
