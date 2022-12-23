import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://ws.apicep.com/'
});

export default instance;