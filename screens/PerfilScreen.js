import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const PerfilScreen = ({ navigation, route }) => {
	const { nome, email, peso, altura } = route.params;

	return (
		<View style={styles.container}>
			<Text style={styles.title}>Perfil do Usuário</Text>
			<Text style={styles.label}>Nome: {nome}</Text>
			<Text style={styles.label}>Email: {email}</Text>
			<Text style={styles.label}>Senha: ******</Text>
			<Text style={styles.label}>Peso: {peso} kg</Text>
			<Text style={styles.label}>Altura: {altura} cm</Text>
			<Button
				style={styles.btn}
				title="Calcular IMC"
				onPress={() => navigation.navigate('IMC', { peso, altura })}
			/>
			<Button
				style={styles.btn}
				title="Editar"
				onPress={() => navigation.navigate('Cadastro', route.params)}
			/>
			<Button
				style={styles.btn}
				title="Sobre o app"
				onPress={() => navigation.navigate('Sobre')}
			/>
			<Button
				style={{ padding: 20 }}
				title='Voltar para a tela anterior'
				onPress={() => navigation.goBack()}
			/>
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
	label: {
		fontSize: 18,
		marginVertical: 10
	},
	btn: {
		marginBottom: 20,
		marginTop: 20,
		padding: 20
	}
});

export default PerfilScreen