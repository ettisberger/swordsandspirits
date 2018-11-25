import React, {Component} from 'react';
import styled from 'styled-components';
import { Inlay } from '../theme';
import {Section, SectionTitle} from '../theme';
import Partners from './Partners';
import { Helmet } from 'react-helmet';

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
                <Helmet>
                    <title>
                        Swords and Spirits 2019
                    </title>
                    <meta name="Description" content="Highland Dancing Basel präsentiert die erste Highland Dance Show der Schweiz. Swords and Spirits, eine schottische Legende." />
                </Helmet>
                <Section odd>
                    <Inlay>
                        <Flyer src={'/assets/images/flyer_compressed.jpg'}/>
                    </Inlay>
                </Section>
                <Partners/>
            </React.Fragment>
        )
    }
}