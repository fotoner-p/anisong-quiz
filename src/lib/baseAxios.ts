import axios, { AxiosInstance } from 'axios';
// import cookies from 'js-cookie';

const URL = "http://anisong.fotone.moe:8000" //.env로 바꾸기

const baseAxios: AxiosInstance = axios.create({
  baseURL: `${URL}`, 
  headers: {
    // access_token: cookies.get('access_token'),
  },
});

export default baseAxios