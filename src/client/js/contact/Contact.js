import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import {Section, SectionTitle, Inlay} from '../theme';
import * as ContactService from './ContactService';
import StatusMessage, {openSnackbar} from '../common/StatusMessage';
import update from 'immutability-helper';
import validate from '../forms/validator'
import {Helmet} from 'react-helmet';

const initialState = {
    fields: {
        firstName: {value: '', error: '', required: true, touched: false},
        lastName: {value: '', error: '', required: true, touched: false},
        street: {value: '', error: '', required: false, touched: false},
        streetNr: {value: '', error: '', required: false,touched: false},
        city: {value: '', error: '', required: false,touched: false},
        zip: {value: '', error: '', required: false,touched: false},
        email: {value: '', error: '', required: true,touched: false},
        phone: {value: '', error: '', required: false,touched: false},
        message: {value: '', error: '', required: true,touched: false}
    },
    isValid: true
};

class Contact extends Component {

    constructor (props) {
        super(props);
        this.state = initialState;
    }

    reset() {
        this.setState(initialState);
    }


    submit = event => {
        event.preventDefault();

        ContactService.sendMail(this.state.fields).then(res => {
            if (res.data.status === 'success'){
                openSnackbar({ message: 'Kontaktaufnahme versendet.' });
                this.reset();
            }else if(res.data.status === 'fail'){
                openSnackbar({ message: 'Mailversand fehlgeschlagen.' });
            }
        });
    };

    handleChange = name => event => {
        const newState = update(this.state, {
            fields: {[name]: {$merge: {value: event.target.value}}}
        });

        this.setState(newState);
    };

    handleBlur = name => event => {
        const newState = update(this.state, {
            fields: {[name]: {$merge: {touched: true}}}
        });

        this.setState(newState);
    };

    render() {
        let {isValid, fields} = validate(this.state.fields);

        return (
            <React.Fragment>
                <Helmet>
                    <title>
                        Kontakt
                    </title>
                </Helmet>
                <Section>
                    <Inlay>
                        <SectionTitle>Kontakt</SectionTitle>
                        <form onSubmit={(e) => this.submit(e)}  noValidate autoComplete="on" method="POST">
                            <Grid container spacing={24} justify={'center'}>
                                <Grid container item xs={12} sm={6} justify={'center'}>
                                    <TextField
                                        id="firstName"
                                        label="Vorname"
                                        value={this.state.fields.firstName.value}
                                        onChange={this.handleChange('firstName')}
                                        onBlur={this.handleBlur('firstName')}
                                        margin="normal"
                                        variant="outlined"
                                        required
                                        fullWidth={true}
                                        error={fields.firstName.error !== '' && fields.firstName.touched}
                                        helperText={fields.firstName.error !== "" && fields.firstName.touched ? fields.firstName.error : ""}
                                    />
                                </Grid>
                                <Grid container item xs={12} sm={6} justify={'center'}>
                                    <TextField
                                        id="lastName"
                                        label="Nachname"
                                        value={this.state.fields.lastName.value}
                                        onChange={this.handleChange('lastName')}
                                        onBlur={this.handleBlur('lastName')}
                                        margin="normal"
                                        variant="outlined"
                                        required
                                        fullWidth={true}
                                        error={fields.lastName.error !== '' && fields.lastName.touched}
                                        helperText={fields.lastName.error !== "" && fields.lastName.touched ? fields.lastName.error : ""}
                                    />
                                </Grid>
                                <Grid container item xs={8} sm={8} justify={'center'}>
                                    <TextField
                                        id="street"
                                        label="Strasse"
                                        value={this.state.fields.street.value}
                                        onChange={this.handleChange('street')}
                                        margin="normal"
                                        variant="outlined"
                                        fullWidth={true}
                                    />
                                </Grid>
                                <Grid container item xs={4} sm={4} justify={'center'}>
                                    <TextField
                                        id="streetNr"
                                        label="Nr."
                                        value={this.state.fields.streetNr.value}
                                        onChange={this.handleChange('streetNr')}
                                        margin="normal"
                                        variant="outlined"
                                        fullWidth={true}
                                    />
                                </Grid>
                                <Grid container item xs={12} sm={6} justify={'center'}>
                                    <TextField
                                        id="city"
                                        label="Ort"
                                        value={this.state.fields.city.value}
                                        onChange={this.handleChange('city')}
                                        margin="normal"
                                        variant="outlined"
                                        fullWidth={true}
                                    />
                                </Grid>
                                <Grid container item xs={12} sm={6} justify={'center'}>
                                    <TextField
                                        id="zip"
                                        label="Postleitzahl"
                                        value={this.state.fields.zip.value}
                                        onChange={this.handleChange('zip')}
                                        margin="normal"
                                        variant="outlined"
                                        fullWidth={true}
                                    />
                                </Grid>
                                <Grid container item xs={12} justify={'center'}>
                                    <TextField
                                        id="email"
                                        label="Email"
                                        value={this.state.fields.email.value}
                                        onChange={this.handleChange('email')}
                                        onBlur={this.handleBlur('email')}
                                        autoComplete="email"
                                        margin="normal"
                                        variant="outlined"
                                        required
                                        fullWidth={true}
                                        error={fields.email.error !== '' && fields.email.touched}
                                        helperText={fields.email.error !== "" && fields.email.touched ? fields.email.error : ""}
                                    />
                                </Grid>
                                <Grid container item xs={12} justify={'center'}>
                                    <TextField
                                        id="phone"
                                        label="Telefon / Handy"
                                        value={this.state.fields.phone.value}
                                        onChange={this.handleChange('phone')}
                                        margin="normal"
                                        variant="outlined"
                                        fullWidth={true}
                                    />
                                </Grid>
                                <Grid container item xs={12} justify={'center'}>
                                    <TextField
                                        id="message"
                                        label="Nachricht"
                                        value={this.state.fields.message.value}
                                        onChange={this.handleChange('message')}
                                        onBlur={this.handleBlur('message')}
                                        margin="normal"
                                        variant="outlined"
                                        required
                                        multiline
                                        rows="10"
                                        fullWidth={true}
                                        error={fields.message.error !== '' && fields.message.touched}
                                        helperText={fields.message.error !== "" && fields.message.touched ? fields.message.error : ""}
                                    />
                                </Grid>
                                <Grid container item xs={12} justify={'center'}>
                                    <Button variant="outlined" color="primary" type="submit" disabled={!isValid}>
                                        SENDEN
                                    </Button>
                                </Grid>
                            </Grid>
                            <StatusMessage/>
                        </form>
                    </Inlay>
                </Section>
            </React.Fragment>
        );
    }
}

export default Contact;