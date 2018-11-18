import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import {Section, SectionTitle, Inlay} from '../theme';

class Contact extends Component {

    render() {
        const { classes } = this.props;

        return (
            <React.Fragment>
                <Section>
                    <Inlay>
                        <SectionTitle>Kontakt</SectionTitle>
                        <form noValidate autoComplete="on">
                            <Grid container spacing={24} justify={'center'}>
                                <Grid container item xs={6} justify={'center'}>
                                    <TextField
                                        id="outlined-uncontrolled"
                                        label="Vorname"
                                        defaultValue="Vorname"
                                        margin="normal"
                                        variant="outlined"
                                        fullWidth={true}
                                    />
                                </Grid>
                                <Grid container item xs={6} justify={'center'}>
                                    <TextField
                                        id="outlined-uncontrolled"
                                        label="Name"
                                        defaultValue="Name"
                                        margin="normal"
                                        variant="outlined"
                                        fullWidth={true}
                                    />
                                </Grid>
                                <Grid container item xs={6} justify={'center'}>
                                    <TextField
                                        id="outlined-uncontrolled"
                                        label="Strasse"
                                        defaultValue="Strasse"
                                        margin="normal"
                                        variant="outlined"
                                        fullWidth={true}
                                    />
                                </Grid>
                                <Grid container item xs={6} justify={'center'}>
                                    <TextField
                                        id="outlined-uncontrolled"
                                        label="Nr."
                                        defaultValue="Nr."
                                        margin="normal"
                                        variant="outlined"
                                        fullWidth={true}
                                    />
                                </Grid>
                                <Grid container item xs={12} justify={'center'}>
                                    <TextField
                                        id="outlined-uncontrolled"
                                        label="Telefon/Handy"
                                        defaultValue="Telefon/Handy"
                                        margin="normal"
                                        variant="outlined"
                                        fullWidth={true}
                                    />
                                </Grid>
                                <Grid container item xs={12} justify={'center'}>
                                    <TextField
                                        id="outlined-uncontrolled"
                                        label="Nachricht"
                                        defaultValue=""
                                        margin="normal"
                                        variant="outlined"
                                        multiline
                                        rows="10"
                                        fullWidth={true}
                                    />
                                </Grid>
                            </Grid>
                        </form>
                    </Inlay>
                </Section>
            </React.Fragment>
        );
    }
}

Contact.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default Contact;