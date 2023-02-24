import React from 'react';
import { TouchableOpacity, View, Image, Text, StyleSheet } from 'react-native';

const Product = ({ name, price, image, onPress, descripton, language }) => {
	console.log(language, 'cone');
	return (
		<TouchableOpacity style={styles.card} onPress={onPress}>
			<Image style={styles.thumb} source={image} resizeMode='contain' />
			<View style={styles.infoContainer}>
				<Text style={styles.name}>{language}</Text>
				<Text style={styles.price}>$ {price}</Text>
				<Text style={styles.price}>{descripton}</Text>
			</View>
		</TouchableOpacity>
	);
};
const styles = StyleSheet.create({
	card: {
		backgroundColor: 'white',
		borderRadius: 16,
		shadowOpacity: 0.2,
		shadowRadius: 4,
		shadowColor: 'black',
		shadowOffset: {
			height: 0,
			width: 0
		},
		elevation: 1,
		marginVertical: 20
	},
	thumb: {
		height: 160,
		borderTopLeftRadius: 16,
		borderTopRightRadius: 16,
		width: '100%'
	},
	infoContainer: {
		padding: 16
	},
	name: {
		fontSize: 22,
		fontWeight: 'bold'
	},
	name: {
		fontSize: 22,
		fontWeight: '600',
		marginBottom: 8
	}
});

export default Product;
