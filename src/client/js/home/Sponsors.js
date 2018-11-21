import React, {Component} from 'react';
import {Inlay, Section, SectionTitle} from '../theme';
import Grid from '@material-ui/core/Grid/Grid';
import partner from '../../assets/images/partner_placeholder.png';
import styled from 'styled-components';

const Sponsor = styled.img`
  display: block;
  max-width: 100%;
  height: 150px;
`;

class Sponsors extends Component {
    constructor (props) {
        super(props);
    }

    render() {
        return (
            <Section odd>
                <Inlay>
                    <SectionTitle>Sponsoren</SectionTitle>
                    <Grid container spacing={12} justify={'center'}>
                        <Grid container item xs={3} justify={'center'}>
                            <Sponsor src={partner}/>
                        </Grid>
                        <Grid container item xs={3} justify={'center'}>
                            <Sponsor src={partner}/>
                        </Grid>
                        <Grid container item xs={3} justify={'center'}>
                            <Sponsor src={partner}/>
                        </Grid>
                        <Grid container item xs={3} justify={'center'}>
                            <Sponsor src={partner}/>
                        </Grid>
                    </Grid>
                </Inlay>
            </Section>
        );
    }
}

export default Sponsors;