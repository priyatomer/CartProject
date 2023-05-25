import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import ButtonComp from '../components/ButtonComp';
import InputComp from '../components/InputComp';
import { registerUserApi } from '../services/UserApis';

const Register = ({ navigation }) => {
	const [
		name,
		setName
	] = useState('');
	const [
		email,
		setEmail
	] = useState('');
	const [
		phone,
		setPhone
	] = useState('');
	const [
		password,
		setPassword
	] = useState('');
	const [
		confirmPassword,
		setConfirmPassword
	] = useState('');
	const [
		error,
		setError
	] = useState(false);

	const registerUser = async () => {
		if (!name || !email || !phone || !password || !confirmPassword) {
			setError(true);
			return false;
		}
		try {
			const payload = {
				name,
				email,
				phone,
				password,
				confirmPassword
			};
			const result = await registerUserApi(payload);
			const data = result.data;
			if (data.error || !data) {
				alert('Invalid Registration');
			} else {
				alert('Registration Successful');
				navigation.navigate('Login');
			}
		} catch (err) {
			console.log(err, 'Register error');
		}
	};
	return (
		<SafeAreaView style={styles.container}>
			{/* <View style={{ flex: 0.9 }}> */}
			<Text style={styles.register_text}>Register</Text>
			<View style={styles.inner_container}>
				<InputComp
					style={styles.input}
					placeholder='Enter name'
					onChangeText={(e) => setName(e)}
					value={name}
					keyboardType='default'
				/>
				{error && !name && <Text style={styles.error_text}>Enter valid name</Text>}
				<InputComp
					style={styles.input}
					placeholder='Enter email'
					onChangeText={(e) => setEmail(e)}
					value={email}
					keyboardType='default'
				/>
				{error && !email && <Text style={styles.error_text}>Enter valid email</Text>}
				<InputComp
					style={styles.input}
					placeholder='Enter Phone Number'
					onChangeText={(e) => setPhone(e)}
					value={phone}
					keyboardType='number-pad'
				/>
				{error && !phone && <Text style={styles.error_text}>Enter valid phone</Text>}
				<InputComp
					style={styles.input}
					placeholder='Enter Password'
					onChangeText={(e) => setPassword(e)}
					value={password}
					keyboardType='default'
				/>
				{error && !password && <Text style={styles.error_text}>Enter valid password</Text>}
				<InputComp
					style={styles.input}
					placeholder='Enter Confirm Password'
					onChangeText={(e) => setConfirmPassword(e)}
					value={confirmPassword}
					keyboardType='default'
				/>
				{error && !confirmPassword && <Text style={styles.error_text}>Enter valid confirm Password</Text>}
			</View>
			<View>
				<View style={styles.button_view}>
					<ButtonComp title='Register' onPress={() => registerUser()} />
				</View>
				<View style={styles.login_text}>
					<Text style={{ color: 'blue' }}>Already A User?</Text>
					<Text onPress={() => navigation.navigate('Login')}>Login</Text>
				</View>
			</View>
			{/* </View> */}
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'white',
		padding: 20
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

		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center'
	},
	inner_container: {},
	login_text: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'center',
		marginTop: 10
	},
	button_view: {
		paddingHorizontal: 15
	},
	error_text: { color: 'red', marginLeft: 20, marginTop: -10 }
});

export default Register;
