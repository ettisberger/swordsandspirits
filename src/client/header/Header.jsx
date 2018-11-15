import React, { Component } from 'react';
import NavigationBar from '../navigation/NavigationBar.jsx';
import Grid from '@material-ui/core/Grid';
import styled from 'styled-components';
import {accent1Color, brandPrimary} from '../theme';
import logo from '../../client/assets/images/logo_white.png';
import theme from './../theme';

const HeaderWrapper = styled.div`
    border-bottom: 10px solid ${brandPrimary};
    background-color: ${brandPrimary};
`;

const Logo = styled.img`
    max-width: 50%; 
    height: auto;
    padding: 1rem;
    
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
    // <Logo src={logo} />
    render() {
        return (
            <header>
                <HeaderWrapper>
                    <Grid container alignItems="center" spacing={24}>
                        <Grid item xs={3}>
                            <Logo src={logo}></Logo>
                        </Grid>
                        <Grid item xs={9}>
                            <HeaderTitle>SWORDS AND SPIRITS</HeaderTitle>
                        </Grid>
                    </Grid>
                </HeaderWrapper>
            </header>
        )
    }
}