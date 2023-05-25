import React, { useContext, useEffect, useState } from 'react';
import { Button, Image, SafeAreaView, ScrollView, StyleSheet, View, Text } from 'react-native';
import CardContext from '../../CardContext';
import CartIcon from '../components/CartIcon';
import { getProduct } from '../services/ProductServices';
import { getProductById } from '../services/UserApis';

const ProductDetails = ({ navigation,route }) => {
	let url='http://192.168.1.36:3000/'
	const { productId,lang } = route?.params;
    const [product,setProduct] = useState({});
	const { addItemToCart ,getItemsCount, } = useContext(CardContext);
	useEffect(() => {
		// setProduct(getProduct(productId));
		getProductDetails(productId)
	},[]);

	function onAddToCart () {
		addItemToCart(product.id);
        navigation.navigate('Cart',{
            lang:lang
        })
	}
    
	const getProductDetails = async(id) => {
		getProductById(id).then((result)=>{
			let data=result.data;
			setProduct(data)
		}).catch((err)=>{console.log(err)})
		
	};
	return (
		<SafeAreaView >
			<ScrollView>
                <View style={styles.header}>
                <View style={{display:'flex',flexDirection:'row',width:'35%',justifyContent:'space-between'}}>
                <Text onPress={()=>navigation.goBack()} style={[styles.header_text]}>{lang == 'English' ? 'Back': lang == 'French'?'Dos': '后退'}</Text>
				<Text style={styles.header_text}>
					{lang == 'English' ? 'Products' : lang == 'French'?'Des produits':'产品'}
				</Text>
                </View>
				<CartIcon lang={lang} />
			    </View>
                <View style={styles.maincontainer}>
                    <View style={styles.card}>
				        <Image style={styles.image} source={{uri:`${url+product.image}`}} resizeMode="contain" />
				            <View style={styles.infoContainer}>
                                <Text style={styles.name}>{lang == 'English' ? product?.name?.en : lang == 'French' ? product?.name?.fr : product?.name?.ch}</Text>
					            <Text style={[styles.name,{fontSize:14}]}> {product.price}</Text>
					            <Text style={[styles.name,{fontSize:16}]}> {lang == 'English' ? (
                                    product.description?.en
                                    ) : lang == 'French' ? (
                                        product.description?.fr
                                    ) : (
                                        product.description?.ch
                                    )}
                                </Text>
	                            <Button onPress={onAddToCart} title='Add to Cart' style={{marginTop:10}}/>
                            </View>
                    </View>
                </View>
			</ScrollView>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
    maincontainer:{
        paddingHorizontal:20
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
        paddingVertical: 10,
        color:'black' 
    },
	image: {
		height: 160,
        width: '100%'
	},
	thumb: {
		height: 260,
		borderTopLeftRadius: 16,
		borderTopRightRadius: 16,
		width: '100%'
	},
	infoContainer: {
		padding: 16,
		
	},
	
	name: {
		fontSize: 22,
		fontWeight: '600',
		marginBottom: 8,
		color:'black'
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
export default ProductDetails;
