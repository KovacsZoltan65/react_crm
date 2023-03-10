import axios from 'axios';
//import { AxiosError } from 'axios';
import { ApiError } from '../api/ApiError';
import { readToken } from '../services/localStorage.service';

export const httpApi = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL
});

httpApi.interceptors.request.use((config) => {
    config.headers = {...config.headers, Authorization: `Bearer ${readToken()}`};

    return config;
});

httpApi.interceptors.response.use(undefined, (error) => {
    throw new ApiError(error.response.data.message || error.message, error.response.data);
});