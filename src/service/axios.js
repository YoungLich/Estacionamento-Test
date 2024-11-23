import axios from 'axios';

const api = axios.create({
  baseURL: 'https://receitaws.com.br/v1',

});



export default api;