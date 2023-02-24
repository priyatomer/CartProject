import React, { createContext, useEffect, useState } from 'react';
import { getProduct } from './src/services/ProductServices';
import en from './src/locales/en.json';
import fr from './src/locales/fr.json';
export const CardContext = createContext();

export function CardProvider (props) {
	const [
		items,
		setItems
	] = useState([]);

	function addItemToCart (id) {
		const product = getProduct(id);
		setItems((prevItems) => {
			const item = prevItems.find((item) => item.id == id);
			if (!item) {
				return [
					...prevItems,
					{
						id: 1,
						qty: 1,
						product
					}
				];
			} else {
				return prevItems.map((item) => {
					if (item.id == id) {
						item.qty++;
					}
					return item;
				});
			}
		});
	}

	function removeItemToCart (id) {
		setItems(items.filter((item) => item.product.id !== id));
	}
	function getItemsCount () {
		return items.reduce((sum, item) => sum + item.qty, 0);
	}

	return (
		<CardContext.Provider
			value={{
				en,
				fr,
				items,
				setItems,
				getItemsCount,
				addItemToCart,
				removeItemToCart
				// increment
			}}>
			{props.children}
		</CardContext.Provider>
	);
}

export default CardContext;
