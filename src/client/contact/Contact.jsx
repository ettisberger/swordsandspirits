import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import {Section, SectionTitle, Inlay} from '../theme';

class Contact extends Component {

    constructor (props) {
        super(props);
        this.state = {
            firstName: '',
            name: '',
            street: '',
            streetNr: '',
            email: '',
            phone: '',
            message: ''
        }
    };


    submit = event => {
        console.log("submit", event);
        console.log(this.state);
    };

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value
        });
    };

    render() {
        return (
            <React.Fragment>
                <Section>
                    <Inlay>
                        <SectionTitle>Kontakt</SectionTitle>
                        <form onSubmit={(e) => this.submit(e)} noValidate autoComplete="on">
                            <Grid container spacing={24} justify={'center'}>
                                <Grid container item xs={6} justify={'center'}>
                                    <TextField
                                        id="firstName"
                                        label="Vorname"
                                        value={this.state.firstName}
                                        onChange={this.handleChange('firstName')}
                                        margin="normal"
                                        variant="outlined"
                                        required
                                        fullWidth={true}
                                    />
                                </Grid>
                                <Grid container item xs={6} justify={'center'}>
                                    <TextField
                                        id="name"
                                        label="Name"
                                        value={this.state.name}
                                        onChange={this.handleChange('name')}
                                        margin="normal"
                                        variant="outlined"
                                        required
                                        fullWidth={true}
                                    />
                                </Grid>
                                <Grid container item xs={6} justify={'center'}>
                                    <TextField
                                        id="street"
                                        label="Strasse"
                                        value={this.state.street}
                                        onChange={this.handleChange('street')}
                                        margin="normal"
                                        variant="outlined"
                                        fullWidth={true}
                                    />
                                </Grid>
                                <Grid container item xs={6} justify={'center'}>
                                    <TextField
                                        id="streetNr"
                                        label="Nr."
                                        value={this.state.streetNr}
                                        onChange={this.handleChange('streetNr')}
                                        margin="normal"
                                        variant="outlined"
                                        fullWidth={true}
                                    />
                                </Grid>
                                <Grid container item xs={12} justify={'center'}>
                                    <TextField
                                        id="email"
                                        label="Email"
                                        value={this.state.email}
                                        onChange={this.handleChange('email')}
                                        autoComplete="email"
                                        margin="normal"
                                        variant="outlined"
                                        required
                                        fullWidth={true}
                                    />
                                </Grid>
                                <Grid container item xs={12} justify={'center'}>
                                    <TextField
                                        id="phone"
                                        label="Telefon/Handy"
                                        value={this.state.phone}
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
                                        value={this.state.message}
                                        onChange={this.handleChange('message')}
                                        margin="normal"
                                        variant="outlined"
                                        required
                                        multiline
                                        rows="10"
                                        fullWidth={true}
                                    />
                                </Grid>
                                <Grid container item xs={12} justify={'center'}>
                                    <Button variant="outlined" color="primary" type="submit">
                                        SENDEN
                                    </Button>
                                </Grid>
                            </Grid>
                        </form>
                    </Inlay>
                </Section>
            </React.Fragment>
        );
    }
}

export default Contact;