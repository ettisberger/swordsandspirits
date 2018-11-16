import React, { Component } from 'react';
import NavigationBar from '../navigation/NavigationBar.jsx';
import Grid from '@material-ui/core/Grid';
import styled from 'styled-components';
import {accent1Color, brandPrimary} from '../theme';
import logo from '../../client/assets/images/logo_header.png';
import theme from './../theme';

const HeaderWrapper = styled.div`
    background-color: ${brandPrimary};
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    padding: 20px 30px;
    z-index: 9999;
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

const NavItem = styled.div`
  color: ${accent1Color};
  font-size: 18px;
  text-align: right;
`

export default class Header extends Component {
    // <Logo src={logo} />
    render() {
        return (
            <header>
                <HeaderWrapper>
                    <Grid container spacing={12}>
                        <Grid item xs={4}>
                            <Logo src={logo}/>
                        </Grid>
                        <Grid container item xs={8} justify={'flex-end'} alignItems={'center'}>
                                <Grid item xs={3}><NavItem>HOME</NavItem></Grid>
                                <Grid item xs={3}><NavItem>TICKETS</NavItem></Grid>
                                <Grid item xs={3}><NavItem>KONTAKT</NavItem></Grid>
                        </Grid>
                    </Grid>
                </HeaderWrapper>
            </header>
        )
    }
}