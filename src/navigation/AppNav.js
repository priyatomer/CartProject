import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import CardContext from '../../CardContext';
import { ActivityIndicator, View } from 'react-native';
import AppStack from './AppStack';
import AuthStack from './AuthStack';

const Stack = createNativeStackNavigator();

const AppNav = () => {
	const { isLoading, userToken } = useContext(CardContext);
	console.log(userToken, 'token');

	if (isLoading) {
		<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
			<ActivityIndicator size={'large'} />
		</View>;
	}
	return <NavigationContainer>{userToken !== null ? <AppStack /> : <AuthStack />}</NavigationContainer>;
};

export default AppNav;
