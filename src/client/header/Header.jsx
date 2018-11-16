import React, { Component } from 'react';
import NavigationBar from '../navigation/NavigationBar.jsx';
import Grid from '@material-ui/core/Grid';
import styled from 'styled-components';
import {accent1Color, brandPrimary} from '../theme';
import logo from '../../client/assets/images/logo_header.png';
import theme from './../theme';
import {Route} from 'react-router-dom';
import Home from '../home/Home.jsx';

const HeaderWrapper = styled.header`
    background-color: ${brandPrimary};
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    padding: 20px 30px;
    z-index: 9999;
    opacity: 0.9;
`;

const Logo = styled.img`
    max-width: 100%; 
    height: 70px;
    float: left;
    
  ${theme.breakpoints.down('sm')}{
    max-width: 100%; 
  }
`;

const HeaderTitle = styled.div`
  font-size: 6rem;
  font-family: 'Caolingia';
  color: ${accent1Color};
  text-align: left;
  
  ${theme.breakpoints.down('lg')}{
    font-size: 5rem;
  }
  
  ${theme.breakpoints.down('md')}{
    font-size: 3rem;
  }  
  
  ${theme.breakpoints.down('sm')}{
    font-size: 1.5rem;
  }
`;

export default class Header extends Component {
    render() {
        return (
            <HeaderWrapper>
                <Grid container spacing={12}>
                    <Grid item xs={4}>
                        <Logo src={logo}/>
                    </Grid>
                    <NavigationBar/>
                </Grid>
            </HeaderWrapper>
        )
    }
}