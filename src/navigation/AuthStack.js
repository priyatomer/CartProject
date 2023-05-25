import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text } from 'react-native';
import Login from '../screens/Login';
import Register from '../screens/Register';

const Stack = createNativeStackNavigator();

function AuthStack () {
	return (
		<Stack.Navigator screenOptions={{ headerShown: false }}>
			<Stack.Screen name='Register' component={Register} />
			<Stack.Screen name='Login' component={Login} />
		</Stack.Navigator>
	);
}

const styles = StyleSheet.create({
	headerTitle: {
		fontSize: 20
	}
});
export default AuthStack;
