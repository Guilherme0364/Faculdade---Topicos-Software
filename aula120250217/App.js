import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  const [celsius, setCelsius] = useState('');
  const [far, setFar] = useState('');

  function CalcularTemperatura() {
    const fahrenheit = (9 * parseFloat(celsius) + 160) / 5;
    setFar(fahrenheit.toFixed(2)); 
    alert("Temperatura em Fahrenheit: " + fahrenheit.toFixed(2));
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Aplicativo de Temperatura</Text>
      <TextInput
        style={styles.campo}
        placeholder="Digite uma temperatura em Celsius"
        keyboardType="numeric"
        value={celsius}
        onChangeText={setCelsius} 
      />
      <Button
        style={styles.botao}
        title="Calcular"
        onPress={CalcularTemperatura} 
      />
      <Text style={styles.resultado}>Resultado em Fahrenheit: {far}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6fa3ef',  
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  titulo: {
    textAlign: "center",
    marginTop: 40,
    marginBottom: 20,
    fontSize: 30,
    color: "#fff",
    fontWeight: 'bold',
  },
  campo: {
    backgroundColor: "#fff",
    borderRadius: 30,
    margin: 15,
    padding: 10,
    fontSize: 15,
    width: 250,
    textAlign: 'center',
    shadowColor: "#000", // Sombra para destacar o input
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5, // Sombra no Android
  },
  botao: {
    justifyContent: "center",
    alignItems: "center",
    margin: 15,
    backgroundColor: "#ffd700",
    padding: 10,
    borderRadius: 10,
  },
  resultado: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
});
