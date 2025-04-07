import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

// Telas
import LoginScreen from './screens/loginScreen';
import HomeScreen from './screens/homeScreen';
import ContactScreen from './screens/contactScreen';
import RegisterScreen from './screens/registerScreen';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

// Drawer que aparece só depois do login
function DrawerRoutes() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Cadastro" component={RegisterScreen} />
      <Drawer.Screen name="Contatos" component={ContactScreen} />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" >
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Main" component={DrawerRoutes} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
