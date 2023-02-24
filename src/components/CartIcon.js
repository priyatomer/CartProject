import React, { useContext } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

import CardContext from '../../CardContext';

const CartIcon = ({ navigation, lang }) => {
	const { getItemsCount } = useContext(CardContext);
	return (
		<TouchableOpacity style={styles.container}>
			<Text style={styles.text}>
				{lang == 'English' ? 'Cart' : lang == 'French' ? 'Chariot' : '大车'}({getItemsCount()})
			</Text>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	container: {
		marginHorizontal: 8,
		backgroundColor: '#000',
		height: 40,
		padding: 12,
		borderRadius: 32 / 2,
		alignItems: 'center',
		justifyContent: 'center'
	},
	text: {
		color: 'white',
		fontWeight: 'bold'
	}
});

export default CartIcon;
