import React, {Component} from 'react';
import styled from 'styled-components';
import { Inlay } from '../theme';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid'
import {Section, SectionTitle} from '../theme';
import flyer from '../../assets/images/flyer.png';
import partner from '../../assets/images/partner_placeholder.png';

const StyledButton = styled(Button)`
    && {
      margin: 10px;
    }
`;

const Flyer = styled.img`
  display: block;
  max-width: 100%;
  height: auto;
  margin: 0 auto;
`

const Partner = styled.img`
  display: block;
  max-width: 100%;
  height: 150px;
`;

export default class Home extends Component {
    render() {
        return (
            <React.Fragment>
                <Section odd>
                    <Inlay>
                        <Flyer src={flyer}/>
                    </Inlay>
                </Section>
                <Section even>
                    <Inlay>
                        <SectionTitle>Partner</SectionTitle>
                        <Grid container spacing={12} justify={'center'}>
                            <Grid container item xs={3} justify={'center'}>
                                <Partner src={partner}/>
                            </Grid>
                            <Grid container item xs={3} justify={'center'}>
                                <Partner src={partner}/>
                            </Grid>
                            <Grid container item xs={3} justify={'center'}>
                                <Partner src={partner}/>
                            </Grid>
                            <Grid container item xs={3} justify={'center'}>
                                <Partner src={partner}/>
                            </Grid>
                        </Grid>
                    </Inlay>
                </Section>
                <Section odd>
                    <Inlay>
                        <SectionTitle>Sponsoren</SectionTitle>
                        <Grid container spacing={12} justify={'center'}>
                            <Grid container item xs={3} justify={'center'}>
                                <Partner src={partner}/>
                            </Grid>
                            <Grid container item xs={3} justify={'center'}>
                                <Partner src={partner}/>
                            </Grid>
                            <Grid container item xs={3} justify={'center'}>
                                <Partner src={partner}/>
                            </Grid>
                            <Grid container item xs={3} justify={'center'}>
                                <Partner src={partner}/>
                            </Grid>
                        </Grid>
                    </Inlay>
                </Section>
            </React.Fragment>
        )
    }
}