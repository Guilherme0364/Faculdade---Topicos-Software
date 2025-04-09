import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const SobreScreen = ({ navigation }) => {

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Sobre o aplicativo</Text>
            <Text style={styles.label}>
                O aplicativo é um simpels projeto desenvolvido pra ser entregue como P1 na disciplina de Tópicos em Engenharia de Software I
            </Text>
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

export default SobreScreen