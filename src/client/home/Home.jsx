import React, {Component} from 'react';
import styled from 'styled-components';
import { Inlay } from '../theme';
import Grid from '@material-ui/core/Grid';

const HomeTitle = styled.h2`
  margin: 1rem 0;
  font-size: 4rem;
`;

export default class Home extends Component {
    render() {
        return (
            <Inlay>
                <HomeTitle>Willkommen</HomeTitle>
                <Grid container>

                </Grid>
            </Inlay>
        )
    }
}