import axios from 'axios';

const basicUrl = 'http://localhost:3000';

export function sendMail(contactData) {
    return axios.post(basicUrl + '/api/contact/send', { contactData });
}

