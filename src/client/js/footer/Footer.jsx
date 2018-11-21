import React, { Component } from 'react';
import styled from 'styled-components';
import theme, {accent1Color, brandPrimary, Inlay } from '../theme';
import Grid from '@material-ui/core/Grid'

const FooterWrapper = styled.div`
    height: 15rem;
    padding: 3rem 0;
    border-bottom: 10px solid ${brandPrimary};
    background-color: ${brandPrimary};
    color: ${accent1Color};
    line-height: 1.4rem;
    
    ${theme.breakpoints.down('sm')}{
      && {
        height: auto;
      }
    }
`;

const FooterItem = styled(Grid)`
    ${theme.breakpoints.down('sm')}{
      && {
        margin: 1rem 0;
      }
    }
`;

const FooterTitle = styled.div`
  font-weight: bold;
`;

class Footer extends Component {

    render() {
        return (
            <footer>
                <FooterWrapper>
                    <Inlay>
                        <Grid container justify={'center'}>
                            <FooterItem item justify={'center'} xs={12} sm={6}>
                                <FooterTitle>Kompass</FooterTitle>
                                <p>
                                    Highland Dancing Basel<br/>
                                    www.highlanddance.ch<br/>
                                    2018/2019
                                </p>
                            </FooterItem>
                            <FooterItem item justify={'center'} xs={12} sm={6} >
                                <FooterTitle>Kontakt</FooterTitle>
                                <p>
                                    Kontaktperson XY<br/>
                                    info AT swordsandspirits.ch<br/>
                                    +4179 XXX XX XX
                                </p>
                            </FooterItem>
                        </Grid>
                    </Inlay>
                </FooterWrapper>
            </footer>
        )
    }
}
export default Footer;