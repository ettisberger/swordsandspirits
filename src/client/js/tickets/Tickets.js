import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import {Inlay, Section, SectionTitle} from '../theme';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import * as TicketService from '../tickets/TicketService';
import StatusMessage, {openSnackbar} from '../common/StatusMessage';
import update from 'immutability-helper';
import validate from '../forms/validator';

const initialState = {
    fields: {
        firstName: {value: '', error: '', touched: false},
        lastName: {value: '', error: '', touched: false},
        street: {value: '', error: '', touched: false},
        streetNr: {value: '', error: '', touched: false},
        city: {value: '', error: '', touched: false},
        zip: {value: '', error: '', touched: false},
        email: {value: '', error: '', touched: false},
        phone: {value: '', error: '', touched: false},
        message: {value: '', error: '', touched: false},
        showData: {value: '', error: '', touched: false},
        ticketsAdults: {value: 0, error: '', touched: false},
        ticketsKids: {value: 0, error: '', touched: false},
        print: {value: 'printAthome', error: '', touched: false},

    },
    isValid: true,
    labelWidth: 0
};

const ticketPriceAdults = 32;
const ticketPriceKids = 20;
const shipmentPrice = 5;

class Tickets extends Component {

    constructor (props) {
        super(props);
        this.state = initialState;
    }

    reset() {
        this.setState(initialState);
    }

    componentDidMount() {
        this.setState({
            labelWidth: ReactDOM.findDOMNode(this.InputLabelRef).offsetWidth,
        });
    }

    submit = event => {
        event.preventDefault();

        TicketService.sendMail(this.state).then(res => {
            if (res.data.status === 'success'){
                openSnackbar({ message: 'Bestellung versendet.' });
                this.reset();
            }else if(res.data.status === 'fail'){
                openSnackbar({ message: 'Bestellung fehlgeschlagen.' });
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

    calculateTotalCost() {
        return this.state.ticketsAdults * ticketPriceAdults + this.state.ticketsKids * ticketPriceKids + (this.state.print === 'ship' ? shipmentPrice : 0);
    };

    render() {
        let {isValid, fields} = validate(this.state.fields);

        return (
            <React.Fragment>
                <Section>
                    <Inlay>
                        <SectionTitle>Tickets</SectionTitle>
                        <form noValidate autoComplete="on">
                            <Grid container spacing={24} justify={'center'}>
                                <Grid container item xs={12} sm={6} justify={'center'}>
                                    <TextField
                                        id="firstName"
                                        label="Vorname"
                                        value={this.state.firstName}
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
                                        value={this.state.lastName}
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
                                        value={this.state.street}
                                        onChange={this.handleChange('street')}
                                        onBlur={this.handleBlur('street')}
                                        required
                                        margin="normal"
                                        variant="outlined"
                                        fullWidth={true}
                                        error={fields.street.error !== '' && fields.street.touched}
                                        helperText={fields.street.error !== "" && fields.street.touched ? fields.street.error : ""}
                                    />
                                </Grid>
                                <Grid container item xs={4} sm={4} justify={'center'}>
                                    <TextField
                                        id="streetNr"
                                        label="Nr."
                                        value={this.state.streetNr}
                                        onChange={this.handleChange('streetNr')}
                                        required
                                        margin="normal"
                                        variant="outlined"
                                        fullWidth={true}
                                    />
                                </Grid>
                                <Grid container item xs={12} sm={6} justify={'center'}>
                                    <TextField
                                        id="city"
                                        label="Ort"
                                        value={this.state.city}
                                        onChange={this.handleChange('city')}
                                        onBlur={this.handleBlur('city')}
                                        required
                                        margin="normal"
                                        variant="outlined"
                                        fullWidth={true}
                                        error={fields.city.error !== '' && fields.city.touched}
                                        helperText={fields.city.error !== "" && fields.city.touched ? fields.city.error : ""}
                                    />
                                </Grid>
                                <Grid container item xs={12} sm={6} justify={'center'}>
                                    <TextField
                                        id="zip"
                                        label="Postleitzahl"
                                        value={this.state.zip}
                                        onChange={this.handleChange('zip')}
                                        onBlur={this.handleBlur('zip')}
                                        required
                                        margin="normal"
                                        variant="outlined"
                                        fullWidth={true}
                                        error={fields.zip.error !== '' && fields.zip.touched}
                                        helperText={fields.zip.error !== "" && fields.zip.touched ? fields.zip.error : ""}
                                    />
                                </Grid>
                                <Grid container item xs={12} justify={'center'}>
                                    <TextField
                                        id="email"
                                        label="Email"
                                        value={this.state.email}
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
                                            htmlFor="showDate"
                                        >
                                            Datum / Uhrzeit
                                        </InputLabel>
                                        <Select
                                            native
                                            value={this.state.showDate}
                                            onChange={this.handleChange('showDate')}
                                            onBlur={this.handleBlur('showDate')}
                                            input={
                                                <OutlinedInput
                                                    name="age"
                                                    labelWidth={this.state.labelWidth}
                                                    id="showDate"
                                                />
                                            }
                                            error={fields.showDate.error !== '' && fields.showDate.touched}
                                            helperText={fields.showDate.error !== "" && fields.showDate.touched ? fields.showDate.error : ""}
                                        >
                                            <option value="" />
                                            <option value={'saturday'}>Samstag, 11.Mai 2019 / 19.30 Uhr</option>
                                            <option value={'sunday'}>Sonntag, 12.Mai 2019 / 14.00 Uhr</option>
                                        </Select>
                                    </FormControl>
                                </Grid>
                                <Grid container item xs={12} sm={6} justify={'center'}>
                                    <TextField
                                        id="ticketsAdults"
                                        label={"Anzahl Tickets (Erwachsene, je " +  ticketPriceAdults + ".-)"}
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
                                <Grid container item xs={12} sm={6} justify={'center'}>
                                    <TextField
                                        id="ticketsKids"
                                        label={"Anzahl Tickets (Kinder, je " +  ticketPriceKids + ".-)"}
                                        value={this.state.ticketsKids}
                                        onChange={this.handleChange('ticketsKids')}
                                        type="number"
                                        variant="outlined"
                                        fullWidth={true}
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                        margin="normal"
                                    />
                                </Grid>
                                <Grid container item xs={12} sm={12} justify={'center'}>
                                    <FormControl component="fieldset" fullWidth={true} >
                                        <FormLabel component="legend">Versand</FormLabel>
                                        <RadioGroup
                                            aria-label="print"
                                            name="print"
                                            value={this.state.print}
                                            onChange={this.handleChange('print')}
                                        >
                                            <FormControlLabel value="printAthome" control={<Radio color="primary"/>} label="Print@Home" />
                                            <FormControlLabel value="ship" control={<Radio color="primary"/>} label={"Versand (+" + shipmentPrice + " Fr)"} />
                                        </RadioGroup>
                                    </FormControl>
                                </Grid>
                                <Grid container item xs={12} justify={'center'}>
                                    <TextField
                                        id="totalCost"
                                        label="Gesamtbetrag"
                                        value={this.calculateTotalCost() + " CHF"}
                                        onChange={this.handleChange('totalCost')}
                                        margin="normal"
                                        disabled
                                        variant="outlined"
                                        fullWidth={true}
                                    />
                                </Grid>
                                <Grid container item xs={12} justify={'flex-start'}>
                                    <h5>Bezahlung</h5>
                                    <p>
                                        Nach ausgeführter Bestellung werden wir Ihnen die Bankdaten per Email mitteilen. Nach erfolgreicher
                                        Bezahlung erhalten Sie die Tickets entsprechend der gewählten Versandart.
                                    </p>
                                </Grid>
                                <Grid container item xs={12} justify={'center'}>
                                    <TextField
                                        id="message"
                                        label="Bemerkungen"
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
                                    <Button variant="outlined" color="primary" onClick={(event) => this.submit(event)} disabled={!isValid}>
                                        BESTELLEN
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

export default Tickets;