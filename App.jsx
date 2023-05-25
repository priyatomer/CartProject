import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text } from 'react-native';
import { CardProvider } from './CardContext';
import CartIcon from './src/components/CartIcon';
import AppNav from './src/navigation/AppNav';
import AppStack from './src/navigation/AuthStack';
import Cart from './src/screens/Cart';
import Login from './src/screens/Login';

import Register from './src/screens/Register';

const Stack = createNativeStackNavigator();

function App () {
	return (
		<CardProvider>
			<AppNav />
			{/* <Stack.Navigator screenOptions={{ headerShown: false }}>
					
					<Stack.Screen
						name='Products'
						component={ProductListing}
						options={({ navigation }) => ({
							title: 'Products',
							headerTitleStyle: styles.headerTitle,
							headerRight: () => <CartIcon navigation={navigation} />
						})}
					/>
					<Stack.Screen
						name='ProductDetails'
						component={ProductDetails}
						options={({ navigation }) => ({
							title: 'Product Details',
							headerTitleStyle: styles.headerTitle,
							headerRight: () => <CartIcon navigation={navigation} />
						})}
					/>
					<Stack.Screen
						name='Cart'
						component={Cart}
						options={({ navigation }) => ({
							title: 'My Cart',
							headerTitleStyle: styles.headerTitle,

							headerRight: () => <CartIcon navigation={navigation} />
						})}
					/>
				</Stack.Navigator> */}
		</CardProvider>
	);
}

const styles = StyleSheet.create({
	headerTitle: {
		fontSize: 20
	}
});
export default App;
