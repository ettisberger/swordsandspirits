import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import {Section, SectionTitle, Inlay} from '../theme';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import OutlinedInput from '@material-ui/core/OutlinedInput';

class Tickets extends Component {

    constructor (props) {
        super(props);
        this.state = {
            firstName: '',
            name: '',
            street: '',
            streetNr: '',
            email: '',
            phone: '',
            date: '',
            ticketsAdults: 0,
            ticketsKids: 0,
            print: 'printAthome',
            payment: 'prepayment',
            message: ''
        }
    };


    submit = event => {
        // TODO call node server
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
                        <SectionTitle>Tickets</SectionTitle>
                        <form noValidate autoComplete="on">
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
                                    <FormControl variant="outlined" fullWidth={true} required>
                                        <InputLabel
                                            ref={ref => {
                                                this.InputLabelRef = ref;
                                            }}
                                            htmlFor="date"
                                        >
                                            Vorstellung
                                        </InputLabel>
                                        <Select
                                            native
                                            value={this.state.date}
                                            onChange={this.handleChange('date')}
                                            input={
                                                <OutlinedInput
                                                    name="date"
                                                    labelWidth={this.state.labelWidth}
                                                    id="date"
                                                />
                                            }
                                        >
                                            <option value={''}>Bitte Vorstellung wählen</option>
                                            <option value={'saturday'}>Samstag, 10.Mai 2019 / 19.30 Uhr</option>
                                            <option value={'sunday'}>Sonntag, 11.Mai 2019 / 14.00 Uhr</option>
                                        </Select>
                                    </FormControl>
                                </Grid>
                                <Grid container item xs={6} justify={'center'}>
                                    <TextField
                                        id="ticketsAdults"
                                        label="Anzahl Tickets (Erwachsene, je 32.-)"
                                        value={this.state.ticketsAdults}
                                        onChange={this.handleChange('ticketsAdults')}
                                        type="number"
                                        variant="outlined"
                                        fullWidth={true}
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                        margin="normal"
                                    />
                                </Grid>
                                <Grid container item xs={6} justify={'center'}>
                                    <TextField
                                        id="ticketsAdults"
                                        label="Anzahl Tickets (Erwachsene, je 32.-)"
                                        value={this.state.ticketsAdults}
                                        onChange={this.handleChange('ticketsAdults')}
                                        type="number"
                                        variant="outlined"
                                        fullWidth={true}
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                        margin="normal"
                                    />
                                </Grid>
                                <Grid container item xs={6} justify={'center'}>
                                    <FormControl component="fieldset" fullWidth={true} >
                                        <FormLabel component="legend">Versand</FormLabel>
                                        <RadioGroup
                                            aria-label="print"
                                            name="print"
                                            value={this.state.print}
                                            onChange={this.handleChange('print')}
                                        >
                                            <FormControlLabel value="printAthome" control={<Radio color="primary"/>} label="Print@Home" />
                                            <FormControlLabel value="ship" control={<Radio color="primary"/>} label="Versand (+5Fr)" />
                                        </RadioGroup>
                                    </FormControl>
                                </Grid>
                                <Grid container item xs={6} justify={'center'}>
                                    <FormControl component="fieldset" fullWidth={true} >
                                        <FormLabel component="legend">Bezahlung</FormLabel>
                                        <RadioGroup
                                            aria-label="payment"
                                            name="payment"
                                            value={this.state.payment}
                                            onChange={this.handleChange('payment')}
                                        >
                                            <FormControlLabel value="prepayment" control={<Radio color="primary"/>} label="Vorauskasse" />
                                            <FormControlLabel value="bill" control={<Radio color="primary"/>} label="Rechnung" />
                                        </RadioGroup>
                                    </FormControl>
                                </Grid>

                                <Grid container item xs={12} justify={'center'}>
                                    <TextField
                                        id="message"
                                        label="Nachricht"
                                        value={this.state.message}
                                        onChange={this.handleChange('message')}
                                        margin="normal"
                                        variant="outlined"
                                        multiline
                                        rows="10"
                                        fullWidth={true}
                                    />
                                </Grid>
                                <Grid container item xs={12} justify={'center'}>
                                    <Button variant="outlined" color="primary" onClick={(event) => this.submit(event)}>
                                        BESTELLEN
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

export default Tickets;