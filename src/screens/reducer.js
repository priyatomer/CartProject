const reducer = (state, action) => {
	if (action.type === 'CLEAR_CART') {
		return { ...state, item: [] };
	}

	return state;
};

export default reducer;
