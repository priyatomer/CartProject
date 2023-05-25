import React from 'react';
import { Button } from 'react-native';

const ButtonComp = ({ title, onPress, style }) => {
	console.log(onPress, 'kk');
	return <Button title={title} onPress={onPress} style={style} />;
};

export default ButtonComp;
