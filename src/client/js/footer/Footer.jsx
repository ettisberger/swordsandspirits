import React, { Component } from 'react';
import styled from 'styled-components';
import {accent1Color, brandPrimary, Inlay} from '../theme';
import Grid from '@material-ui/core/Grid'

const FooterWrapper = styled.div`
    height: 15rem;
    padding: 3rem 0;
    border-bottom: 10px solid ${brandPrimary};
    background-color: ${brandPrimary};
    color: ${accent1Color};
    line-height: 1.4rem;
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
                            <Grid item justify={'center'} xs={6}>
                                <FooterTitle>Kompass</FooterTitle>
                                <p>
                                    Highland Dancing Basel<br/>
                                    www.highlanddance.ch<br/>
                                    2018/2019
                                </p>
                            </Grid>
                            <Grid item justify={'center'} xs={6}>
                                <FooterTitle>Kontakt</FooterTitle>
                                <p>
                                    Kontaktperson XY<br/>
                                    info AT swordsandspirits.ch<br/>
                                    +4179 XXX XX XX
                                </p>
                            </Grid>
                        </Grid>
                    </Inlay>
                </FooterWrapper>
            </footer>
        )
    }
}
export default Footer;