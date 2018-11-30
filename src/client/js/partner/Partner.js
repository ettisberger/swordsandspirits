import React, {Component} from 'react';
import styled from 'styled-components';
import {brandPrimary, Inlay} from '../theme';
import {Section, SectionTitle} from '../theme';
import { Helmet } from 'react-helmet';

const Text = styled.p`
  line-height: 1.4;
  
  a {
    color: ${brandPrimary};
  }
`;

export default class Partner extends Component {
    render() {
        return (
            <React.Fragment>
                <Helmet>
                    <title>Swords and Spirits - Partner</title>
                </Helmet>
                <Section even>
                    <Inlay>
                        <SectionTitle>Maguire O’Shea Irish Dancers</SectionTitle>
                        <Text>
                            Maguire O’Shea Switzerland wurde im Jahr 2016 als eine zusätzliche Gruppe von der weltbekannten Maguire O’Shea Academy in London gegründet.
                            Iniitiert durch Michael & Deirdre Maguire hat die Tanzschule über 50 Schülerinnen und Schüler, die in Basel und Zürich die Lokalitäten besuchen.
                            <br/>
                            <br/>
                            Die Gruppe nimmt an verschiedenen Anlässen in der Schweiz teil, wie zum Beispiel an der Tanzparade Basel und Zürich oder auch am
                            World Economic Forum in Davos. Unsere Tänzerinnen und Tänzer treten auch an Firmenanlässe oder Hochzeiten auf, und Highlights jedes Jahres
                            sind die Festivitäten zum St Patrick’s Day.
                        </Text>
                    </Inlay>
                </Section>
                <Section odd>
                    <Inlay>
                        <SectionTitle>Pipes and Drums of Basel</SectionTitle>
                        <Text>
                            The Pipes and Drums of Basel ist eine der ältesten und gleichzeitig grössten und erfolgreichsten Pipe Bands der Schweiz. Die Band wurde bereits 1978 in Basel
                            gegründet und verfolgt seitdem das Ziel, ihr Publikum mit Schottischer Dudelsack Musik und Trommeln zu begeistern.
                            <br/>
                            <br/>
                            Die Pipes and Drums of Basel treten regelmässig an verschiedensten Anlässen wie Hochzeiten, Firmen- und Jubiläumsanlässe und sonstigen Festen auf. Dies einerseits
                            als ganze Band aber auch mit Kleinformation oder Solospielern.
                            <br/>
                            <br/>
                            Nebst den regelmässigen Auftritten organisieren sie aber auch seit jeher immer wieder grosse Konzerte und Anlässe, um sich in der Öffentlichkeit zu präsentieren
                            und engagieren dazu auch regelmässig namhafte Bands aus Schottland.
                            <br/>
                            <br/>
                            Nebst den konzertanten Auftritten bestreitet eine Formation der Band auch regelmässig Wettbewerbe im In- und Ausland. Dies sowohl als Band wie auch als Solospieler.
                            Die Ergebnisse daraus lassen sich sehen - Die Band hat in den letzten Jahren bereits zum sechsten Mal den Schweizer Meistertitel gewonnen und konnte auch als erste
                            und bisher einzige Band in Schottland einen Wettbewerb für sich entscheiden.
                            <br/>
                            <br/>
                            Um dieses breite Spektrum abdecken zu können und sich stetig zu verbessern, investieren sie viel in die Aus- und Weiterbildung ihrer Mitglieder. Nebst den ordentlichen
                            Proben der Band und zusätzlichen Proben der Wettkampfformation führen sie auch jährliche Workshops mit schottischen Instruktoren durch. Zudem motivieren sie unsere
                            Mitglieder an externen Weiterbildungskursen wie zum Beispiel der jährlichen Winter School des College of Piping teilzunehmen.
                        </Text>
                    </Inlay>
                </Section>
            </React.Fragment>
        )
    }
}