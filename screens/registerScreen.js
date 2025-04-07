import { StatusBar } from 'expo-status-bar';
import { useRef, useState } from 'react';
import { StyleSheet, Text, View, Pressable, TextInput } from 'react-native';
import { Modalize } from 'react-native-modalize';

const RegisterScreen = ({ navigation }) => {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [users, setUsers] = useState([])

    const modalRef = useRef(null); // Controle do modal

    const handleOpenModal = () => {
        modalRef.current?.open();
    }

    const handleCloseModal = () => {
        modalRef.current?.close();
    }

    const handleRegister = () => {
        const newUser = { name, email, password }

        setUsers([...users, newUser])

        setName('')
        setEmail('')
        setPassword('')

        handleCloseModal();

        navigation.navigate('Contatos', { users: [...users, newUser] })
    }

    return (
        <View style={styles.screen}>

            <Text>Insira as informações de cadastro necessárias</Text>

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
                secureTextEntry
            />

            <Pressable style={styles.button} onPress={handleOpenModal}>
                <Text style={{ color: '#fff' }}>Cadastrar</Text>
            </Pressable>

            <Modalize ref={modalRef} adjustToContentHeight>
                <View style={{ padding: 20 }}>
                    <Text style={{ fontSize: 18, marginBottom: 20 }}>Tem certeza que quer cadastrar o usuário?</Text>

                    <Pressable style={styles.button} onPress={handleRegister}>
                        <Text style={{ color: '#fff' }}>Sim</Text>
                    </Pressable>

                    <Pressable
                        style={[styles.button, { backgroundColor: 'red', marginTop: 10 }]}
                        onPress={handleCloseModal}
                    >
                        <Text style={{ color: '#fff' }}>Não</Text>
                    </Pressable>
                </View>
            </Modalize>

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
        fontFamily: 'Arial',
        color: '#fff',
        marginTop: 20,
    }
})

export default RegisterScreen;
