import React, { useState, useEffect, useContext } from 'react';
import ProductDetails from './ProductDetails';
import { StyleSheet, FlatList, View, Button, TouchableOpacity, Image, Text } from 'react-native';
import Product from '../components/Product';
import { getProducts } from '../services/ProductServices';
import en from '../locales/en.json';
import fr from '../locales/fr.json';
import ch from '../locales/ch.json';
import CardContext from '../../CardContext';
import CartIcon from '../components/CartIcon';

const ProductListing = ({ navigation }) => {
	function renderProduct ({ item }) {
		return (
			<TouchableOpacity
				style={styles.card}
				onPress={() => {
					navigation.navigate('ProductDetails', {
						productId: item.id,
						lang: lang
					});
				}}>
				<Image style={styles.thumb} source={item.image} resizeMode='contain' />
				<View style={styles.infoContainer}>
					<Text style={styles.name}>
						{lang == 'English' ? item.name.en : lang == 'French' ? item.name.fr : item.name.ch}
					</Text>
					<Text style={styles.price}>
						{lang == 'English' ? item.price.en : lang == 'French' ? item.price.fr : item.price.ch}
					</Text>
					<Text style={styles.desc}>
						{lang == 'English' ? (
							item.descripton.en
						) : lang == 'French' ? (
							item.descripton.fr
						) : (
							item.descripton.ch
						)}
					</Text>
				</View>
			</TouchableOpacity>
			// <Product
			// 	{...product}
			// 	language={language}
			// 	onPress={() => {
			// 		navigation.navigate('ProductDetails', {
			// 			productId: product.id
			// 		});
			// 	}}
			// />
		);
	}

	const [products,setProducts] = useState();
	const [lang,setLang] = useState('English');

	useEffect(() => {
		setProducts(getProducts());
	}, []);

	// const french = fr;
	// const english = en;
	// const chinese = ch;
	// console.log(lang, 'lannn');

	const onPressButton = (lng) => {
		setLang(lng);
		// console.log(lng, 'easy');
		// if (lng == 'English') {
		// 	console.log('priya');
		// 	setLanguage(english.ImportedUsLemons);
		// }
		// console.log(language, 'languges');
		// if (lng == 'French') {
		// 	console.log('priya tomer');
		// 	setLanguage(french.ImportedUsLemons);
		// }
		// if (lng == 'Chinese') {
		// 	console.log('priya tomer');
		// 	setLanguage(chinese.ImportedUsLemons);
		// }
	};
	return (
        <>
        <View style={styles.header}>
				<Text style={styles.header_text}>
					{lang == 'English' ? 'Products' : lang == 'French'?'Des produits':'产品'}
				</Text>
				<CartIcon lang={lang} />
		</View>
		<View style={styles.container}>
			<View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginVertical: 10 }}>
				<Button title='English' onPress={(event) => onPressButton('English')} />
				<Button title='Chinese' onPress={(event) => onPressButton('Chinese')} />
				<Button title='French' onPress={(event) => onPressButton('French')} />
			</View>
            <FlatList
				style={styles.productList}
				contentContainerStyle={styles.productListContainer}
				keyExtractor={(item) => {
					item.id.toString();
				}}
				data={products}
				renderItem={(item) => renderProduct(item)}
				showsVerticalScrollIndicator={false}
			/>
		</View>
        </>
	);
};
const styles = StyleSheet.create({
	container: {
		paddingHorizontal: 20
	},
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
    header:{
        backgroundColor: 'white',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10
    },
    header_text:{ 
        textAlign: 'center',
        fontSize: 15, 
        fontWeight: '600', 
        padding: 10,
        color:'black' 
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
	},
	price: {
		fontWeight: '600'
	}
});
export default ProductListing;
