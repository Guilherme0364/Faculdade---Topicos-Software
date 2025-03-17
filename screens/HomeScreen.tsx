import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { DrawerNavigationProp } from '@react-navigation/drawer';

const HomeScreen = ({ navigation }: { navigation: DrawerNavigationProp<any> }) => {
	return (
		<View style={styles.container}>
			<Text style={styles.titulo}>Página Inicial</Text>

			<Pressable style={styles.botao} onPress={navigation.toggleDrawer}>
				<Text style={styles.textoBotao}>Abrir Menu</Text>
			</Pressable>

			<Pressable style={styles.botao} onPress={() => navigation.jumpTo('CadastroAluno')}>
				<Text style={styles.textoBotao}>Novo Aluno</Text>
			</Pressable>

			<Pressable style={styles.botao} onPress={() => navigation.jumpTo('CadastroFuncionario')}>
				<Text style={styles.textoBotao}>Novo Funcionário</Text>
			</Pressable>
		</View>
	);
};

export default HomeScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#eef2ff',
		alignItems: 'center',
		justifyContent: 'flex-start',
		marginTop: 60,
		paddingHorizontal: 25,
	},
	titulo: {
		fontSize: 26,
		fontWeight: 'bold',
		marginBottom: 35,
		color: '#222',
	},
	botao: {
		backgroundColor: '#6366f1',
		paddingVertical: 14,
		paddingHorizontal: 28,
		borderRadius: 12,
		marginVertical: 8,
		width: '75%',
		alignItems: 'center',
		elevation: 5,
	},
	textoBotao: {
		color: '#fff',
		fontSize: 17,
		fontWeight: 'bold',
	},
});
