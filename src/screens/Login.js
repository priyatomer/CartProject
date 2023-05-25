import React, { useContext } from 'react';
import { SafeAreaView, StyleSheet, TextInput, Text, View, Button } from 'react-native';
import CardContext from '../../CardContext';
import ButtonComp from '../components/ButtonComp';
import InputComp from '../components/InputComp';

const Login = () => {
	const [
		email,
		setEmail
	] = React.useState('');
	const [
		password,
		setPassword
	] = React.useState('');
	const { login, error } = useContext(CardContext);

	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.logintextview}>
				<Text style={styles.register_text}>Login</Text>
			</View>
			<View style={styles.inner_container}>
				<InputComp
					style={styles.input}
					placeholder='Enter Email'
					onChangeText={(text) => setEmail(text)}
					value={email}
				/>
				{error && !email && <Text style={styles.error_text}>Enter valid email</Text>}
				<InputComp
					style={styles.input}
					placeholder='Enter Password'
					onChangeText={(text) => setPassword(text)}
					value={password}
				/>
				{error && !password && <Text style={styles.error_text}>Enter valid password</Text>}
			</View>
			<View style={styles.button_view}>
				<ButtonComp
					title='Login'
					style={{ width: '40%' }}
					onPress={() => {
						login(email, password);
					}}
				/>
			</View>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'white',
		padding: 20
	},
	logintextview: {
		// flex: 0.2,
		display: 'flex',
		alignItems: 'center',
		flexDirection: 'row',
		justifyContent: 'center'
	},
	input: {
		height: 50,
		margin: 15,
		borderWidth: 1,
		padding: 10,
		borderRadius: 10
	},
	register_text: {
		fontSize: 30,
		textAlign: 'center',
		marginTop: 20,
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center'
	},
	inner_container: {
		// flex: 0.3
	},
	button_view: {
		// flex: 0.2,
		marginTop: 20,
		paddingHorizontal: 10
	},
	error_text: { color: 'red', marginLeft: 20, marginTop: -10 }
});

export default Login;
