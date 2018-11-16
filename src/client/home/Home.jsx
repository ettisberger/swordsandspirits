import React, {Component} from 'react';
import styled from 'styled-components';
import { Inlay } from '../theme';
import Button from '@material-ui/core/Button';
import flyer from '../assets/images/flyer.png'

const StyledButton = styled(Button)`
    && {
      margin: 10px;
    }
`;

const Flyer = styled.img`
  display: block;
  max-width: 100%;
  height: auto;
  margin: 200px auto;
`

export default class Home extends Component {
    render() {
        return (
            <Inlay>
                <Flyer src={flyer}/>
            </Inlay>
        )
    }
}