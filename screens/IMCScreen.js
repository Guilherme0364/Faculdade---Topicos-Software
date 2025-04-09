import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const IMCScreen = ({ navigation, route }) => {

	const { peso, altura } = route.params;

	const alturaFloat = altura / 100

	const imc = peso / (alturaFloat * alturaFloat);

	return (
		<View style={styles.container}>
			<Text style={styles.title}>Cálculo do IMC </Text>
			<Text style={styles.label}>Seu IMC é: {imc}</Text>
			<Button title="Ver Recomendações" onPress={() => navigation.navigate('Recomendacoes', { imc })} />
			<Button title="Voltar ao Perfil" onPress={() => navigation.goBack()} />
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
	}
});

export default IMCScreen