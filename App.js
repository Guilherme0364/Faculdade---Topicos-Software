import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Pressable, TextInput } from 'react-native';
import QRCode from 'react-native-qrcode-svg';

export default function App() {
	const [name, setName] = useState('');
	const [phoneNumber, setPhoneNumber] = useState('');
	const [email, setEmail] = useState('');
	const [qrCode, setQrCode] = useState('');

	const handleQRCode = () => {		
		const qrValue = `Nome: ${name}\nTelefone: ${phoneNumber}\nEmail: ${email}`;
		setQrCode(qrValue);
	};

	return (
		<View style={styles.container}>
			<StatusBar style="auto" />
			
			<TextInput
				style={styles.input}
				placeholder="Digite o seu nome"
				value={name}
				onChangeText={setName}
			/>
			<TextInput
				style={styles.input}
				placeholder="Digite o número de telefone"
				value={phoneNumber}
				onChangeText={setPhoneNumber}
				keyboardType="phone-pad"
			/>
			<TextInput
				style={styles.input}
				placeholder="Digite o seu e-mail"
				value={email}
				onChangeText={setEmail}
				keyboardType="email-address"
			/>

			<Pressable style={styles.btnGenerate} onPress={handleQRCode}>
				<Text style={styles.txtGenerate}>Gerar QR Code</Text>
			</Pressable>

			{qrCode ? (
				<View style={styles.qrcode}>
					<QRCode value={qrCode} size={200} />
				</View>
			) : (
				<Text style={styles.noCodeText}>Preencha as informações para gerar o QR Code</Text>
			)}
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
		padding: 20,
	},
	input: {
		height: 40,
		borderColor: 'gray',
		borderWidth: 1,
		marginBottom: 15,
		paddingLeft: 8,
		width: '100%',
		borderRadius: 5,
	},
	btnGenerate: {
		backgroundColor: 'black',
		padding: 10,
		borderRadius: 5,
		justifyContent: 'center',
		alignItems: 'center',
	},
	txtGenerate: {
		color: 'white',
		fontSize: 16,
	},
	qrcode: {
		marginTop: 30,
	},
	noCodeText: {
		marginTop: 20,
		fontSize: 16,
		color: 'gray',
	},
});
