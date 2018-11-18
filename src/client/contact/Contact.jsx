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
                                        id="firstName"
                                        label="Vorname"
                                        margin="normal"
                                        variant="outlined"
                                        fullWidth={true}
                                    />
                                </Grid>
                                <Grid container item xs={6} justify={'center'}>
                                    <TextField
                                        id="name"
                                        label="Name"
                                        margin="normal"
                                        variant="outlined"
                                        fullWidth={true}
                                    />
                                </Grid>
                                <Grid container item xs={6} justify={'center'}>
                                    <TextField
                                        id="street"
                                        label="Strasse"
                                        margin="normal"
                                        variant="outlined"
                                        fullWidth={true}
                                    />
                                </Grid>
                                <Grid container item xs={6} justify={'center'}>
                                    <TextField
                                        id="street-nr"
                                        label="Nr."
                                        margin="normal"
                                        variant="outlined"
                                        fullWidth={true}
                                    />
                                </Grid>
                                <Grid container item xs={12} justify={'center'}>
                                    <TextField
                                        id="email"
                                        label="Email"
                                        autoComplete="email"
                                        margin="normal"
                                        variant="outlined"
                                        fullWidth={true}
                                    />
                                </Grid>
                                <Grid container item xs={12} justify={'center'}>
                                    <TextField
                                        id="phone"
                                        label="Telefon/Handy"
                                        margin="normal"
                                        variant="outlined"
                                        fullWidth={true}
                                    />
                                </Grid>
                                <Grid container item xs={12} justify={'center'}>
                                    <TextField
                                        id="message"
                                        label="Nachricht"
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