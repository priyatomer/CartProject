import React, { createContext, useEffect, useState } from 'react';
import { getProduct } from './src/services/ProductServices';
import en from './src/locales/en.json';
import fr from './src/locales/fr.json';
import { Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { BASE_URL } from './src/config';
import { loginUserApi } from './src/services/UserApis';
export const CardContext = createContext();

export function CardProvider (props) {
	const [
		items,
		setItems
	] = useState([]);

	const [
		isLoading,
		setIsLoading
	] = useState(true);
	const [
		userToken,
		setUserToken
	] = useState(null);
	const [
		userInfo,
		setUserInfo
	] = useState(null);

	const[error,setError]=useState(false);

	const login = (email, password) => {
		console.log(email, password, 'here');
		console.log('login ho gya');
		if ( !email ||  !password) {
			setError(true);
			return false;
		}
		const payload={
			email, password
		}
		setIsLoading(true);
		loginUserApi(payload)
			.then((res) => 
			
			{
				let userInfo=res?.data;
				Alert("hello login")
			setUserInfo(userInfo)
			setUserToken(userInfo.result.token)
			AsyncStorage.setItem('userInfo', JSON.stringify(userInfo));
			AsyncStorage.setItem('userToken', userInfo.result.token);
		}
			)
			.catch((err) => {
				if(err){
					Alert("Invalid Credentials")
				}
				console.log(err, 'error coming');
			});
		
		setIsLoading(false);
	};
	const logout = () => {
		setIsLoading(true);
		setUserToken(null);
		AsyncStorage.removeItem('userInfo');
		AsyncStorage.removeItem('userToken');
		setIsLoading(false);
	};

	const isLoggedIn = async () => {
		try {
			setIsLoading(true);
			let userInfo = await AsyncStorage.getItem('userInfo');
			let userToken = await AsyncStorage.getItem('userToken');
			userInfo=JSON.parse(userInfo);
			if(userInfo){
				setUserToken(userToken);
				setUserInfo(userInfo)
			}
			
			setIsLoading(false);
		} catch (err) {
			console.log(`isLogged in error ${err}`);
		}
	};
	useEffect(() => {
		isLoggedIn();
	}, []);

	function addItemToCart (id) {
		const product = getProduct(id);
		setItems((prevItems) => {
			const item = prevItems.find((item) => item.id == id);
			if (!item) {
				return [
					...prevItems,
					{
						id: 1,
						qty: 1,
						product
					}
				];
			} else {
				return prevItems.map((item) => {
					if (item.id == id) {
						item.qty++;
					}
					return item;
				});
			}
		});
	}

	function removeItemToCart (id) {
		setItems(items.filter((item) => item.product.id !== id));
	}
	function getItemsCount () {
		return items.reduce((sum, item) => sum + item.qty, 0);
	}

	return (
		<CardContext.Provider
			value={{
				en,
				fr,
				items,
				setItems,
				getItemsCount,
				addItemToCart,
				removeItemToCart,
				login,
				logout,
				isLoading,
				userToken,
				userInfo,
				error
				// increment
			}}>
			{props.children}
		</CardContext.Provider>
	);
}

export default CardContext;
