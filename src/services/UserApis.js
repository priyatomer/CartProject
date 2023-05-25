import axiosAPI from './AxiosApi';

export const registerUserApi = (payload) => {
	console.log(payload, 'inner api');
	return axiosAPI.post('/user/register-user', payload);
};
export const loginUserApi = (payload) => {
	console.log(payload, 'inner api');
	return axiosAPI.post('/user/signin-user', payload);
};
export const getProductListing = () => {
	return axiosAPI.get('/products');
};

export const getProductById = (productId) => {
	console.log(productId, 'producttttt new id');
	return axiosAPI.get(`/products/${productId}`);
};
