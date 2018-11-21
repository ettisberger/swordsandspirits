import React, {Component} from 'react';
import styled from 'styled-components';
import { Inlay } from '../theme';
import {Section, SectionTitle} from '../theme';
import flyer from '../../assets/images/flyer.png';
import Partners from './Partners';

const Flyer = styled.img`
  display: block;
  max-width: 100%;
  height: auto;
  margin: 0 auto;
`

export default class Home extends Component {
    render() {
        return (
            <React.Fragment>
                <Section odd>
                    <Inlay>
                        <Flyer src={flyer}/>
                    </Inlay>
                </Section>
                <Partners/>
            </React.Fragment>
        )
    }
}