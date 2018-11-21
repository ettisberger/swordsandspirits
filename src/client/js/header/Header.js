import React, {Component} from 'react';
import Grid from '@material-ui/core/Grid';
import styled from 'styled-components';
import theme, {accent1Color, brandPrimary} from '../theme';
import logo from '../../assets/images/logo_header.png';
import NavigationBar from './navigation/NavigationBar';
import MobileNavigationBar from './MobileNavigationBar';

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

export default class Header extends Component {
    render() {

        if(theme.breakpoints.down('sm')){
            return (
                <MobileNavigationBar/>
            )
        } else {
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
}