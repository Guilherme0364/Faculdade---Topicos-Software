import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';

const Drawer = createDrawerNavigator();

import HomeScreen from './screens/HomeScreen';
import CadastroAlunoScreen from './screens/CadastroAlunoScreen';
import CadastroFuncionarioScreen from './screens/CadastroFuncionarioScreen';

export default function App() {
	return (
		<NavigationContainer>
			<Drawer.Navigator initialRouteName='Home'>
				<Drawer.Screen name="Home" component={HomeScreen} />
				<Drawer.Screen name="CadastroAluno" component={CadastroAlunoScreen} />
				<Drawer.Screen name="CadastroFuncionario" component={CadastroFuncionarioScreen} />
			</Drawer.Navigator>
		</NavigationContainer>
	);
}
