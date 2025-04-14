import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import axios from 'axios';
import { useState, useEffect } from 'react';

export default function App() {

	const [res, setRes] = useState([])
	const [cep, setCep] = useState("")

	const instance = axios.create({
		baseURL: `https://viacep.com.br/ws/${cep}/json`
	})

	const getCEP = () => {
		useEffect(() => {
			instance.get().then((response) => {
				setRes(response.data)
				console.log(response.data)
			})
		}, [])
	}

	return (
		<View style={styles.container}>

			<TextInput
				onChangeText={setCep}
				value={cep}
				placeholder='Digite um CEP válido'
			/>

			<Button
				onPress={getCEP}
			/>

			{res && (
				<View>
					<Text>{res.cep}</Text>
					<Text>{res.ddd}</Text>
				</View>
			)}

			<StatusBar style="auto" />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
