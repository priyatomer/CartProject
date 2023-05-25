import AsyncStorage from '@react-native-async-storage/async-storage';
export const requestInterceptor = async(config) => {
	// const accessToken = '';
	// if (accessToken != null) {
	// 	config.headers['x-auth'] = accessToken;
	// }
	const token= await AsyncStorage.getItem('userToken');
	console.log(token,"authentication")
	if (token) {
		config.headers['Authorization'] = `Bearer ${token}`;
	}
	config.headers['Content-Type'] = 'application/json';
	console.log('Headers:', config.headers);
	console.log('Method:', config.method);
	console.log('URL:', config.baseURL + config.url);

	return config;
};

// const callRefreshToken=()=>{
// 	return new instance of axios.post().then
// }
export const responseInterceptor = (config) => {
	console.log('REQUEST....');
	console.log('Headers:', config.config.headers);
	console.log('Method:', config.config.method);
	console.log('URL:', config.config.baseURL + config.config.url);

	console.log('RESPONSE....');
	console.log('Status:', config?.status);
	console.log('Response:', config);

	return config;
};


export const responseErrorHandler=error=>{
	const originalConfig=error.config;

	if(error?.response?.status===401 && !originalConfig._retry){
		console.log("User is unauthorized.......");
		//return refreshTokenApiCall()
	}
	alert(error);

return Promise.reject(error);
}

export const requestErrorHandler=error=>{
	

return Promise.reject(error);
}

