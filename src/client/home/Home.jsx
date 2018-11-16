import React, {Component} from 'react';
import styled from 'styled-components';
import { Inlay } from '../theme';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Contact from './Contact.jsx';

const HomeTitle = styled.h2`
  margin: 1rem 0;
  font-size: 4rem;
`;

const StyledButton = styled(Button)`
    && {
      margin: 10px;
    }
`;

export default class Home extends Component {
    render() {
        return (
            <Inlay>
                <HomeTitle>Willkommen</HomeTitle>
                <StyledButton color={'primary'} variant={'outlined'}>Kontaktformular</StyledButton>
                <StyledButton color={'primary'} variant={'outlined'} >Tickets</StyledButton>
                <Contact/>
            </Inlay>
        )
    }
}