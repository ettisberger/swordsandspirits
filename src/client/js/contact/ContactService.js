import axios from 'axios';

export function sendMail(contactData) {
    return axios.post('/api/contact/send', { contactData });
}

