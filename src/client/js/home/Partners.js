import {Inlay, Section, SectionTitle} from '../theme';
import Grid from '@material-ui/core/Grid/Grid';
import anam from '../../assets/images/anam_logo.svg';
import React, {Component} from 'react';
import styled from 'styled-components';

const Partner = styled.img`
  display: block;
  max-width: 100%;
  height: 150px;
`;

class Partners extends Component {
    render () {
        return (
            <Section even>
                <Inlay>
                    <SectionTitle>Gäste & Partner</SectionTitle>
                    <Grid container spacing={12} justify={'center'}>
                        <Grid container item xs={12} sm={6} md={3} justify={'center'}>
                            <Partner src={anam}/>
                            <span>Irish Folk Band</span>
                        </Grid>
                    </Grid>
                </Inlay>
            </Section>
        )
    }
}

export default Partners;