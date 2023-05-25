import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
	main_container: { flex: 1 },
	container: {
		flex: 0.15,
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
	header: {
		backgroundColor: 'white',
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		padding: 10,
		flex: 0.05
	},
	header_text: {
		textAlign: 'center',
		fontSize: 15,
		fontWeight: '600',
		padding: 10,
		color: 'black'
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
		fontWeight: '600',
		marginBottom: 8,
		color: 'black'
	},
	price: {
		fontWeight: '600'
	},
	username: {
		fontSize: 20,
		color: 'blue'
	},
	productlist: {
		flex: 0.8,
		paddingHorizontal: 20
	},
	message_view: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		flex: 0.6
	}
});
