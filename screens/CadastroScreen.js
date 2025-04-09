import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet } from 'react-native';

const CadastroScreen = ({ navigation, route }) => {

	const [nome, setNome] = useState(route?.params?.nome || '');
	const [email, setEmail] = useState(route?.params?.email || '');
	const [senha, setSenha] = useState(route?.params?.senha || '');
	const [peso, setPeso] = useState(route?.params?.peso || '');
	const [altura, setAltura] = useState(route?.params?.altura || '');

	const handleCadastro = () => {
		if (!nome.trim() || !email.trim() || !senha.trim() || !peso.trim() || !altura.trim()) {
			Alert.alert('Erro', 'Todos os campos são obrigatórios.');
			return;
		}
		if (!email.includes('@') || !email.includes('.')) {
			Alert.alert('Erro', 'Email inválido. Certifique-se de que contém "@" e ".".');
			return;
		}
		if (senha.length < 6) {
			Alert.alert('Erro', 'A senha deve ter pelo menos 6 caracteres.');
			return;
		}
		if (isNaN(peso) || parseFloat(peso) <= 0) {
			Alert.alert('Erro', 'Peso deve ser um número maior que zero.');
			return;
		}
		if (isNaN(altura) || parseFloat(altura) <= 0) {
			Alert.alert('Erro', 'Altura deve ser um número maior que zero.');
			return;
		}
		navigation.navigate('Perfil', { nome, email, senha, peso, altura });
	};

	return (
		<View style={styles.container}>
			<Text style={styles.title}>Cadastro de Usuário</Text>
			<TextInput
				style={styles.input}
				placeholder="Nome"
				value={nome}
				onChangeText={setNome}
			/>
			<TextInput
				style={styles.input}
				placeholder="Email"
				value={email}
				onChangeText={setEmail}
				keyboardType="email-address"
			/>
			<TextInput
				style={styles.input}
				placeholder="Senha"
				value={senha}
				onChangeText={setSenha}
				secureTextEntry
			/>
			<TextInput
				style={styles.input}
				placeholder="Peso (kg)"
				value={peso}
				onChangeText={setPeso}
				keyboardType="numeric"
			/>
			<TextInput
				style={styles.input}
				placeholder="Altura (m)"
				value={altura}
				onChangeText={setAltura}
				keyboardType="numeric"
			/>
			<Button title="Cadastrar" onPress={handleCadastro} />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 20,
		justifyContent: 'center',
		backgroundColor: '#fff'
	},
	title: {
		fontSize: 24,
		marginBottom: 20,
		textAlign: 'center'
	},
	input: {
		width: '100%',
		height: 40,
		borderColor: 'gray',
		borderWidth: 1,
		marginBottom: 10,
		paddingHorizontal: 10,
		borderRadius: 4
	}
});

export default CadastroScreen