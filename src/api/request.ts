import axios from 'axios';
import config from '../constants/config';

export default axios.create({
  baseURL: config.API_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});
