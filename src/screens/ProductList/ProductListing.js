import React, { useState, useEffect, useContext } from 'react';
import {FlatList, View, Button, TouchableOpacity, Image, Text, SafeAreaView } from 'react-native';
// import { getProducts } from '../services/ProductServices';
import { styles } from './style';
import CardContext from '../../../CardContext';
import CartIcon from '../../components/CartIcon';
import ButtonComp from '../../components/ButtonComp';
import { getProductListing } from '../../services/UserApis';

const ProductListing = ({ navigation }) => {

	const {logout,userInfo}=useContext(CardContext)
	const [products,setProducts] = useState();
	const [lang,setLang] = useState('English');

	function renderProduct ({ item }) {
		let url='http://192.168.1.36:3000/'
		return (
			<TouchableOpacity
				style={styles.card}
				onPress={() => {
					navigation.navigate('ProductDetails', {
						productId: item._id,
						lang: lang
					});
				}}>
				<Image style={styles.thumb} source={{uri:`${url+item.image}`}} resizeMode='contain' />
				<View style={styles.infoContainer}>
					<Text style={styles.name}>
						{lang == 'English' ? item?.name?.en : lang == 'French' ? item.name?.fr : item.name.ch}
					</Text>
					<Text style={[styles.name,{fontSize:14}]}>
						{item.price}
					</Text>
					<Text style={[styles.name,{fontSize:16}]}>
						{lang == 'English' ? (
							item.description?.en
						) : lang == 'French' ? (
							item.description?.fr
						) : (
							item.description?.ch
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

	useEffect(() => {
		// setProducts(getProducts());
		getApiProducts();
	}, []);

	const onPressButton = (lng) => {
		setLang(lng);
	};

	const getApiProducts = async () => {
		try {
			const result = await getProductListing();
			const data = result.data;
			setProducts(data)
		} catch (err) {
		console.log(err,"Products Error")
		}
	};
	return (
        <SafeAreaView style={styles.main_container}>
        <View style={styles.header}>
				<Text style={styles.header_text}>
					{lang == 'English' ? 'Products' : lang == 'French'?'Des produits':'产品'}
				</Text>
				<CartIcon lang={lang} />
		</View>
		<View style={styles.container}>
			<View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginVertical: 10 }}>
				<Button title='English' onPress={(event) => onPressButton('English')} />
				{/* <Button title='Chinese' onPress={(event) => onPressButton('Chinese')} /> */}
				<Button title='French' onPress={(event) => onPressButton('French')} />
				<ButtonComp title="Logout" onPress={()=>{logout()}}/>
			</View>
			<Text style={styles.username}>Hi {userInfo?.result?.userLogin?.name} is there !!!!</Text>
			</View>
			{products?.length>0
			?
			(<View style={styles.productlist}>
            <FlatList
				style={styles.productList}
				contentContainerStyle={styles.productListContainer}
				keyExtractor={(item) => {
					item.id
				}}
				data={products}
				renderItem={(item) => renderProduct(item)}
				showsVerticalScrollIndicator={false}
			/>
			</View>)
			:
			(
			<View style={styles.message_view}>
				<Text style={{color:'blue',fontSize:16}}>No Products Found</Text>
			</View>
			)
			}
		{/* </View> */}
        </SafeAreaView>
	);
};

export default ProductListing;
