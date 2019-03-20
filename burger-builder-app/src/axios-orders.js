import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-builder-ba5ad.firebaseio.com/'
})

export default instance;