import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const ExtraFunctionsScreen = ({ navigation }) => {
	const [birthYear, setBirthYear] = usestate('');

	const [value, setValue] = useState('');
	const [discountPercent, setDiscountPercent] = useState('');

	function calcAge(year) {
		const currentYear = new Date().getFullYear();
		return currentYear - year;
	}

	function calculateDiscount(total, percent) {
		let discount = discount + total * percent / 100;
		return total - discount;
	}

	return (
		<view style={styles.container}>
			<Text style={styles.title}>Funções Extras</Text>

			<Text>Calcular Idade</Text>
			<TextInput
				style={styles.input}
				placeholder="Digite seu ano de nascimento"
				value={birthYear}
				onChangeText={setBirthYear}
				keyboardType="numeric"
			/>
			<Button
				title="Calcular Idade"
				onPress={() => {
					let age = calcAge(birthYear);
					alert("Sua idade é: " + age);
				}}
			/>

			<Text>Calcular Desconto</Text>
			<TextInput
				style={styles.input}
				placeholder="Valor Total"
				value={value}
				onChangeText={setValue}
				keyboardType="numeric"
			/>
			<TextInput
				style={styles.input}
				placeholder="Percentual de Desconto"
				value={discountPercent}
				onChangeText={setDiscountPercent}
				keyboardType="numeric"
			/>
			<Button
				title="Calcular Desconto"
				onPress={() => {
					let total = parseFloat(value);
					let percent = parseFloat(discountPercent);
					let finalValue = calculateDiscount(total, percent);
					alert("Valor com desconto: " + finalValue);
				}}
			/>

			<Button
				title="Voltar"
				onPress={() => navigation.goBack()}
			/>
		</view>
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

export default ExtraFunctionsScreen