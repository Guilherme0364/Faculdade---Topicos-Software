import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const RecomendacoesScreen = ({ navigation, route }) => {
	const { imc } = route.params;
	let recomendacao = '';

	if (imc < 18.5) {
		recomendacao = "Você está abaixo do peso. Considere consultar um nutricionista para melhorar sua alimentação.";
	} else if (imc >= 18.5) {
		recomendacao = "Seu peso está normal. Continue com seus hábitos saudáveis!";
	} else if (imc >= 25 && imc < 30) {
		recomendacao = "Você está com sobrepeso. Adote uma alimentação equilibrada e pratique exercícios regularmente.";
	} else {
		recomendacao = "Você está com obesidade. É importante procurar orientação médica para um plano de saúde adequado.";
	}

	return (
		<View style={styles.container}>
			<Text style={styles.title}>Recomendações</Text>
			<Text style={styles.label}>Seu IMC é: {imc}</Text>
			<Text style={styles.text}>{recomendacao}</Text>
			<Button title="Voltar" onPress={() => navigation.goBack()} />
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
	text: {
		fontSize: 16,
		marginVertical: 10,
		textAlign: 'center'
	}
});

export default  RecomendacoesScreen