import React from 'react';
import { TextInput, View } from 'react-native';

const InputComp = ({ style, placeholder, onChangeText, value, keyboardType }) => {
	return (
		<View>
			<TextInput
				style={style}
				placeholder={placeholder}
				onChangeText={onChangeText}
				value={value}
				keyboardType={keyboardType}
			/>
		</View>
	);
};

export default InputComp;
