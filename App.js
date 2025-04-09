import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CadastroScreen from './screens/CadastroScreen';
import PerfilScreen from './screens/PerfilScreen';
import IMCScreen from './screens/IMCScreen';
import RecomendacoesScreen from './screens/RecomendacoesScreen';
import ExtraFunctionsScreen from './screens/ExtraFunctionsScreen';
import SobreScreen from './screens/SobreScreen';

const Stack = createStackNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName="Cadastro">
				<Stack.Screen
					name="Cadastro"
					component={CadastroScreen}
					options={{ title: 'Cadastro' }}
				/>
				<Stack.Screen
					name="Perfil"
					component={PerfilScreen}
					options={{ title: 'Perfil' }}
				/>
				<Stack.Screen
					name="Sobre"
					component={SobreScreen}
					options={{ title: 'Sobre' }}
				/>
				<Stack.Screen
					name="IMC"
					component={IMCScreen}
					options={{ title: 'Cálculo do IMC' }}
				/>
				<Stack.Screen
					name="Recomendacoes"
					component={RecomendacoesScreen}
					options={{ title: 'Recomendações' }}
				/>
				<Stack.Screen
					name="ExtraFunctions"
					component={ExtraFunctionsScreen}
					options={{ title: 'Funções Extras' }}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
}
