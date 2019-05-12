import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { brandPrimary, Inlay, Section, SectionTitle, whiteColor } from '../theme';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import FormHelperText from '@material-ui/core/FormHelperText'
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import * as TicketService from '../tickets/TicketService';
import StatusMessage, {openSnackbar} from '../common/StatusMessage';
import update from 'immutability-helper';
import validate from '../forms/validator';
import {Helmet} from 'react-helmet';
import styled from 'styled-components';

const initialState = {
    fields: {
        firstName: {value: '', error: '', required: true, touched: false},
        lastName: {value: '', error: '', required: true,touched: false},
        street: {value: '', error: '', required: true,touched: false},
        streetNr: {value: '', error: '', required: false,touched: false},
        city: {value: '', error: '', required: true,touched: false},
        zip: {value: '', error: '', required: true,touched: false},
        email: {value: '', error: '', required: true,touched: false},
        phone: {value: '', error: '', required: false,touched: false},
        message: {value: '', error: '', required: false,touched: false},
        showDate: {value: '', error: '', required: true,touched: false},
        ticketsAdults: {value: 0, error: '', required: false,touched: false},
        ticketsKids: {value: 0, error: '', required: false,touched: false},
        print: {value: 'reservation', error: '', required: false,touched: false},

    },
    isValid: true,
    isSubmitDisabled: false,
    labelWidth: 0
};

const ticketPriceAdults = 32;
const ticketPriceKids = 20;
const shipmentPrice = 5;

const Banner = styled.div`
  padding: 30px 10px;
  background-color: ${brandPrimary};
  color: ${whiteColor};
  line-height: 1.3;
`

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
        this.setState( {isSubmitDisabled: true});

        TicketService.sendMail(this.state.fields).then(res => {
            if (res.data.status === 'success'){
                openSnackbar({ message: 'Bestellung versendet.' });
                this.reset();
            }else if(res.data.status === 'fail'){
                openSnackbar({ message: 'Bestellung fehlgeschlagen.' });
                this.setState( {isSubmitDisabled: false});
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
        return this.state.fields.ticketsAdults.value * ticketPriceAdults + this.state.fields.ticketsKids.value * ticketPriceKids + (this.state.fields.print.value === 'ship' ? shipmentPrice : 0);
    };

    render() {
        let {isValid, fields} = validate(this.state.fields);

        return (
            <React.Fragment>
                <Helmet>
                    <title>
                        Ticket-Bestellung
                    </title>
                </Helmet>
                <Section>
                    <Inlay>
                        <SectionTitle>Tickets</SectionTitle>
                        <Banner>Der offizielle Ticketverkauf ist ab sofort geschlossen. Es können jedoch weiterhin Tickets mit dem bestehenden Formular vorreserviert und gegen Barzahlung an der Abendkasse abgeholt werden. Die Abendkasse ist am Samstag ab 18.30 geöffnet,
                            am Sonntag ab 13 Uhr. Vielen Dank für Ihr Verständnis.</Banner>
                        <form noValidate autoComplete="on">
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
                                        value={this.state.fields.zip.value}
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
                                    <FormControl
                                        variant="outlined"
                                        fullWidth={true}
                                        required
                                        error={fields.showDate.error !== '' && fields.showDate.touched}
                                    >
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
                                            value={this.state.fields.showDate.value}
                                            onChange={this.handleChange('showDate')}
                                            onBlur={this.handleBlur('showDate')}
                                            input={
                                                <OutlinedInput
                                                    name="age"
                                                    labelWidth={this.state.labelWidth}
                                                    id="showDate"
                                                />
                                            }
                                        >
                                            <option value="" />
                                            
                                        </Select>
                                        <FormHelperText>{fields.showDate.error !== "" && fields.showDate.touched ? fields.showDate.error : ""}</FormHelperText>
                                    </FormControl>
                                </Grid>
                                <Grid container item xs={12} sm={6} justify={'center'}>
                                    <TextField
                                        id="ticketsAdults"
                                        label={"Anzahl Tickets (Erwachsene, je " +  ticketPriceAdults + ".-, freie Platzwahl)"}
                                        value={this.state.fields.ticketsAdults.value}
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
                                        label={"Anzahl Tickets (Kinder bis 16, je " +  ticketPriceKids + ".-, freie Platzwahl)"}
                                        value={this.state.fields.ticketsKids.value}
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
                                            value={this.state.fields.print.value}
                                            onChange={this.handleChange('print')}
                                        >
                                            <FormControlLabel value="reservation" control={<Radio color="primary"/>} label="Reservation (Barzahlung an der Abendkasse)"/>
                                            <FormControlLabel value="printAthome" control={<Radio color="primary"/>} label="Print@Home" disabled/>
                                            <FormControlLabel value="ship" control={<Radio color="primary"/>} label={"Versand (+" + shipmentPrice + " Fr)"} disabled/>
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
                                        Aufgrund der kurzfristigen Bestellung werden keine Tickets mehr versendet. Ihre Tickets können Sie gerne an der Abendkasse gegen Barzahlung abholen.
                                        Vielen Dank.
                                    </p>
                                </Grid>
                                <Grid container item xs={12} justify={'center'}>
                                    <TextField
                                        id="message"
                                        label="Bemerkungen"
                                        value={this.state.fields.message.value}
                                        onChange={this.handleChange('message')}
                                        margin="normal"
                                        variant="outlined"
                                        multiline
                                        rows="10"
                                        fullWidth={true}
                                    />
                                </Grid>
                                <Grid container item xs={12} justify={'center'}>
                                    <Button variant="outlined" color="primary" onClick={(event) => this.submit(event)} disabled={!isValid || this.state.isSubmitDisabled }>
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
