import {Inlay, Section, SectionTitle} from '../theme';
import Grid from '@material-ui/core/Grid/Grid';
import React, {Component} from 'react';
import styled from 'styled-components';

const PartnerImage = styled.img`
  display: block;
  max-width: 200px;
  height: auto;
  max-height: 180px;
`;

const PartnerTitle = styled.span`
  text-align: center;
`;

const PartnerLogo = styled(Grid)`
  height: 180px;
`;

class Partners extends Component {
    render () {
        return (
            <Section even>
                <Inlay>
                    <SectionTitle>Gäste & Partner</SectionTitle>
                    <Grid container spacing={16} justify={'center'}>
                        <Grid container item xs={12} sm={6} md={4} justify={'center'} direction={'column'} alignItems={'center'}>
                            <PartnerLogo container item justify={'center'} direction={'column'} alignItems={'center'}>
                                <PartnerImage src={'/assets/images/anam_logo.svg'}/>
                            </PartnerLogo>
                            <PartnerTitle>Irish Folk Band</PartnerTitle>
                        </Grid>
                        <Grid container item xs={12} sm={6} md={4} justify={'center'} direction={'column'} alignItems={'center'}>
                            <PartnerLogo container item justify={'center'} direction={'column'} alignItems={'center'}>
                                <PartnerImage src={'/assets/images/maguire_oshea_logo.jpg'}/>
                            </PartnerLogo>
                            <PartnerTitle>Maguire O’Shea Irish Dancers</PartnerTitle>
                        </Grid>
                        <Grid container item xs={12} sm={6} md={4} justify={'center'} direction={'column'} alignItems={'center'}>
                            <PartnerLogo container item justify={'center'} direction={'column'} alignItems={'center'}>
                                <PartnerImage src={'/assets/images/pdbs_logo.png'}/>
                            </PartnerLogo>
                            <PartnerTitle>Pipes and Drums of Basel</PartnerTitle>
                        </Grid>
                    </Grid>
                </Inlay>
            </Section>
        )
    }
}

export default Partners;