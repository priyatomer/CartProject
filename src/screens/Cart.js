import React, { useContext, useState, useEffect } from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, Image, Button } from 'react-native';
import { getProduct } from '../services/ProductServices';
import CardContext from '../../CardContext';
import CartIcon from '../components/CartIcon';

const Cart = ({navigation,route}) => {
	const { items } = useContext(CardContext);
	const {lang} = route?.params;
	const { removeItemToCart,getItemsCount,increment } = useContext(CardContext);
	const [product,setProduct] = useState({});
    const [quantity,setQuantity] = useState();
	useEffect(() => {
		setProduct(getProduct());
        getItemsCount ()
	});

	function onRemoveToCart (id) {
		removeItemToCart(id);
	}

	function renderItem ({ item }) {
		return (
			<View style={styles.card}>
				<Image style={styles.thumb} source={item.product.image} resizeMode='contain' />
				<View style={styles.infoContainer}>
					<Text style={styles.name}>{lang == 'English' ? item.product.name?.en : lang == 'French' ? item.product.name?.fr : item.product.name?.ch}</Text>
					<Text style={styles.price}>{lang == 'English' ? item.product.price?.en : lang == 'French' ? item.product.price?.fr : item.product.price?.ch}</Text>
					<Text style={styles.price}>{lang == 'English' ? (
							item.product.descripton?.en
						) : lang == 'French' ? (
							item.product.descripton?.fr
						) : (
							item.product.descripton?.ch
						)}</Text>
                    <View style={styles.quantity_view}>
					<View style={styles.quantity_view_one}>
						<Button title="+" onPress={()=>{
							setQuantity(item.qty++)
						//   onIncrement(item?.product?.id)
						
						}}/>
						<Text>{item.qty}</Text>
						<Button title="-" onPress={()=>(item.qty <1 ? setQuantity(0):setQuantity(item.qty--))}/>
					</View>
					<View style={styles.quantity_view_two}>	
						<Button title='Remove Item' onPress={() => onRemoveToCart(item?.product?.id)} />
					</View>
					</View>
				</View>
			</View>
		);
	}
	return (
		<SafeAreaView style={styles.container}>
		   <View
				style={styles.header}>
				 <View style={{display:'flex',flexDirection:'row',width:'35%',justifyContent:'space-between'}}>
                <Text onPress={()=>navigation.navigate('Products')} style={[styles.header_text]}>{lang == 'English' ? 'Back': lang == 'French'?'Dos': '后退'}</Text>
				<Text style={styles.header_text}>
					{lang == 'English' ? 'Products' : lang == 'French'?'Des produits':'产品'}
				</Text>
                </View>
				<CartIcon lang={lang} />
			</View>
			<View style={{paddingHorizontal:20}}>
			<FlatList
				style={styles.itemsList}
				contentContainerStyle={styles.itemListContainer}
				data={items}
				renderItem={renderItem}
				keyExtractor={(item) => {
					item.product.id.toString();
				}}
				showsVerticalScrollIndicator={false}
			/>
			</View>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
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
	},
    quantity_view:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        marginVertical:10
        
    },
    quantity_view_one:{
		display:'flex',
		flexDirection:'row' ,
		width:'40%' ,
		justifyContent:'space-between', 
	},
 quantity_view_two:{
		width:'40%'  
	},
	});

export default Cart;
