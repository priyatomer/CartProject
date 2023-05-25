import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text } from 'react-native';
import CartIcon from '../components/CartIcon';
import Cart from '../screens/Cart';
import ProductDetails from '../screens/ProductDetails';
import ProductListing from '../screens/ProductList/ProductListing';

const Stack = createNativeStackNavigator();

function AppStack () {
	return (
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
	);
}

const styles = StyleSheet.create({
	headerTitle: {
		fontSize: 20
	}
});
export default AppStack;
