import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Pressable, Image, TextInput } from 'react-native';
import QRCode from 'react-native-qrcode-svg';

const ContactScreen = ({ route, navigation }) => {

    const {users} = route.params;

    // Para params da tela Home
    const lastUser = users[users.lengh - 1]

    return (
        <View style={styles.screen}>            
            
            <View>
                <Text style={styles.label}>Usuário cadastrado:</Text>
                {users.map((user, index) => (
                    <View key={index}>
                        <Text>Nome: {user.name}</Text>
                        <Text>Email: {user.email}</Text>
                        <Text>Senha: {user.password}</Text>
                        <View style={styles.qrCode}>
                            <QRCode value={user.name}/>                        
                        </View>
                    </View>
                ))}
            </View>            

            <Pressable 
                style={styles.button} 
                onPress={() => navigation.replace('Home', {email: lastUser.email, name: lastUser.name})}
            >
                <Text style={{ color: '#fff' }}>Voltar para a Home</Text>
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
        fontSize: 16
    },
    qrCode:{
        marginTop: 30,
        alignSelf: 'center'
    },
    button: {
        paddingHorizontal: 25,
        paddingVertical: 15,
        backgroundColor: 'green',
        borderRadius: 8,
        fontFamily: 'Arial',
        color: '#fff',
        marginTop: 100,
    }
})

export default ContactScreen