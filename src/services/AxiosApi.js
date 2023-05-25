import axios from 'axios';
import {
	requestErrorHandler,
	responseErrorHandler,
	requestInterceptor,
	responseInterceptor
} from './AxiosHelperMethods';

export const baseURL = 'http://192.168.1.36:3000';
const axiosAPI = axios.create({
	baseURL: baseURL
});

axiosAPI.interceptors.request.use(requestInterceptor, requestErrorHandler);
axiosAPI.interceptors.response.use(responseInterceptor, responseErrorHandler);

export default axiosAPI;
