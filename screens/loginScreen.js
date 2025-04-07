import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Pressable, Image, TextInput } from 'react-native';

const LoginScreen = ({ navigation }) => {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleLogin = () => {
        // Estaremos passando o nome para a tela home e impedindo o usuário de retroceder com o replace
        navigation.replace('Home', { name, email })
    }

    return (
        <View style={styles.screen}>
            <Text style={styles.title}>Seja bem-vindo ao ProvaApp!</Text>

            <Text style={styles.label}>Nome:</Text>
            <TextInput
                style={styles.input}
                value={name}
                onChangeText={setName}
                placeholder='Digite seu nome: '
            />

            <Text style={styles.label}>Email:</Text>
            <TextInput
                style={styles.input}
                value={email}
                onChangeText={setEmail}
                placeholder='Digite seu e-mail: '
            />

            <Text style={styles.label}>Senha:</Text>
            <TextInput
                style={styles.input}
                value={password}
                onChangeText={setPassword}
                placeholder='Digite sua senha: '
            />

            <Pressable style={styles.button} onPress={handleLogin}>
                <Text style={{ color: '#fff' }}>Entrar</Text>
            </Pressable>

        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10
    },
    title: {
        fontSize: 24,
        marginBottom: 100
    },
    input: {
        marginBottom: 20,
        padding: 10,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 5,
        width: '90%'
    },
    label: {
        marginBottom: 5,
        fontSize: 16,
        alignSelf: 'flex-start',
        marginLeft: '5%', 
      },
    button: {
        paddingHorizontal: 25,
        paddingVertical: 15,
        backgroundColor: 'green',
        borderRadius: 8,
        fontFamily: 'Arial'
    }
})

export default LoginScreen