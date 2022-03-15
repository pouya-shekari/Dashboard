import axios from 'axios';
const BASE_URL = 'https://61ee6204d593d20017dbadb4.mockapi.io';

axios.defaults.baseURL = BASE_URL;

export function getCourses(query) {
    return new Promise((resolve, reject) => {
        //?search=Clothing&page=1&limit=2
        axios.get(`/courses${query}`)
            .then(response => resolve(response))
            .catch(error => reject(error))
    });
}

