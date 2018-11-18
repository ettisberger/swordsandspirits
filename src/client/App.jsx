/*
    ./client/App.jsx
*/
import React from 'react';
import {Route} from 'react-router-dom';
import Header from './header/Header.jsx';
import Footer from './footer/Footer.jsx';
import Home from './home/Home.jsx';
import Contact from './contact/Contact.jsx';
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
                    <Route name="contact" exact path="/contact" component={Contact} />
                </Main>
                <Footer/>
            </React.Fragment>
        )
    }
}
