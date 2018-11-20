import axios from 'axios';

const basicUrl = 'http://localhost:3000';

export function sendMail(ticketData) {
    return axios.post(basicUrl + '/api/tickets/send', { ticketData });
}

