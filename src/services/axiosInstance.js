
import axios from 'axios';
const apiKey = process.env.AUTHORIZATION_TOKEN;

const axiosInstance = axios.create({
  baseURL: 'https://api-app-staging.wobot.ai/app/v1/',
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
    'Authorization':"Bearer 4ApVMIn5sTxeW7GQ5VWeWiy"
  },
});

export default axiosInstance;