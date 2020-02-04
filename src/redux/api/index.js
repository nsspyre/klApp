import axios from 'axios';

const baseURL = 'https://kl.nsspyre.now.sh/api/';
const baseURLdev = 'https://localhost:3000/api/';

export async function apiCall (url, data, headers, method) {
    try {
        const result = await axios({
            method,
            url: `${baseURL}${url}`,
            data,
            headers
        });

        return result.data;
    } catch (err) {
        throw err.response.data.message
    }
}


