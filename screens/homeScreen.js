import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Pressable, Image, TextInput } from 'react-native';

const HomeScreen = ({ route, navigation }) => {

    const { name, email } = route.params

    return(        
        <View style={styles.screen}>
            <Text style={styles.welcome}>Olá, {name}!</Text>
            <Text style={styles.userEmail}>{email}</Text>

            <Pressable style={styles.button} onPress={() => navigation.navigate('Cadastro')}>
                <Text style={{ color: '#fff' }}>Cadastrar novo contato</Text>
            </Pressable>            
        </View>
    )
}

const styles = StyleSheet.create({
    screen:{
        flex: 1,        
        alignItems: 'center',
        padding: 10        
    },
    welcome:{
        justifyContent: 'flex-start',
        alignSelf: 'flex-start',
        fontSize: 24,
        fontWeight: '600',     
        marginBottom: 10   
    },
    userEmail:{
        justifyContent: 'flex-start',
        alignSelf: 'flex-start',
        fontSize: 14
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

export default HomeScreen