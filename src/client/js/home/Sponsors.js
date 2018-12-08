import React, {Component} from 'react';
import {Inlay, Section, SectionTitle} from '../theme';
import Grid from '@material-ui/core/Grid/Grid';
import sponsor from '../../assets/images/swisslos_logo.jpg';
import styled from 'styled-components';
import { Link } from 'react-router-dom'

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
                        <Grid container item xs={12} sm={6} justify={'center'}>
                            <a href={'https://www.swisslos.ch'}><Sponsor src={sponsor}/></a>
                        </Grid>
                    </Grid>
                </Inlay>
            </Section>
        );
    }
}

export default Sponsors;
