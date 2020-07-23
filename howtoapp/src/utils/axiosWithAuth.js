import axios from 'axios';

export const axiosWithAuth = () => {
    const token = localStorage.getItem('token');
    return axios.create({
        baseURL: 'https://how-to-2-team-win.herokuapp.com/api',
        headers: {
            Authorization: token
        }
    })
}