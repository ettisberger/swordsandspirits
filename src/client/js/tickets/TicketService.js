import axios from 'axios';

export function sendMail(ticketData) {
    return axios.post('/api/tickets/send', { ticketData });
}

