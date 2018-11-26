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

const Text = styled.p`
  line-height: 1.4;
`;

export default class Home extends Component {
    render() {
        return (
            <React.Fragment>
                <Helmet>
                    <title>Swords and Spirits - Eine schottische Legende</title>
                    <meta name="Description" content="Highland Dancing Basel präsentiert die erste Highland Dance Show der Schweiz. Swords and Spirits, eine schottische Legende." />
                </Helmet>
                <Section even>
                    <Inlay>
                        <SectionTitle>Swords and Spirits – eine schottische Legende</SectionTitle>
                        <Text>
                            Die Tanz-Show Swords and Spirits – eine schottische Legende erzählt die Geschichte von zwei schottischen Schwestern, Moira und Stella.
                            Das Publikum wird mitgenommen auf eine Reise durch die schottischen Highlands wo die beiden Schwestern durch Tanz ihr Wiedersehen,
                            ihre gemeinsamen Abenteuer und ihre tiefe Schwesterliebe erleben.
                            Die Show wird sowohl traditionelle s als auch neu-choreografierte Tänze präsentieren und wir freuen uns, mit mehreren Gästen aufzutreten:
                            die Anam Irish Folk Band, die Pipes and Drums of Basel und die Maguire O’Shea Irish Dancers.
                        </Text>
                    </Inlay>
                </Section>
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