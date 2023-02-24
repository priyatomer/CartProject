import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text } from 'react-native';
import { CardProvider } from './CardContext';
import CartIcon from './src/components/CartIcon';
import Cart from './src/screens/Cart';

import ProductDetails from './src/screens/ProductDetails';
import ProductListing from './src/screens/ProductListing';

const Stack = createNativeStackNavigator();

function App () {
	return (
		<CardProvider>
			<NavigationContainer>
				<Stack.Navigator screenOptions={{ headerShown: false }}>
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
				</Stack.Navigator>
			</NavigationContainer>
		</CardProvider>
	);
}

const styles = StyleSheet.create({
	headerTitle: {
		fontSize: 20
	}
});
export default App;
