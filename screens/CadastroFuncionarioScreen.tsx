import { View, Text, TouchableOpacity, TextInput, Modal, StyleSheet, Alert } from 'react-native';
import React, { useState } from 'react';
import { NavigationProp } from '@react-navigation/native';

export default function CadastroFuncionarioScreen({ navigation }: { navigation: NavigationProp<any> }) {
    const [nomeFuncionario, setNomeFuncionario] = useState('');
    const [emailFuncionario, setEmailFuncionario] = useState('');
    const [cargo, setCargo] = useState('');
    const [salarioFuncionario, setSalarioFuncionario] = useState('');
    const [modalVisivel, setModalVisivel] = useState(false);

    const [erros, setErros] = useState({
        nomeFuncionario: false,
        emailFuncionario: false,
        cargo: false,
        salarioFuncionario: false
    });

    const validarCadastro = () => {
        const novosErros = {
            nomeFuncionario: nomeFuncionario.trim() === '',
            emailFuncionario: emailFuncionario.trim() === '',
            cargo: cargo.trim() === '',
            salarioFuncionario: salarioFuncionario.trim() === '' || Number(salarioFuncionario) <= 0
        };

        setErros(novosErros);

        if (Object.values(novosErros).some((erro) => erro)) {
            Alert.alert('Erro', 'Preencha todos os campos corretamente!');
            return;
        }

        setModalVisivel(true);
    };

    const fecharModal = () => {
        setModalVisivel(false);
        navigation.goBack();
    };

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Registro de Funcionário</Text>

            <Text style={styles.rotulo}>Nome</Text>
            <TextInput
                style={[styles.input, erros.nomeFuncionario && styles.erroInput]}
                value={nomeFuncionario}
                onChangeText={setNomeFuncionario}
                placeholder="Informe o nome"
                placeholderTextColor="#777"
            />

            <Text style={styles.rotulo}>E-mail</Text>
            <TextInput
                style={[styles.input, erros.emailFuncionario && styles.erroInput]}
                value={emailFuncionario}
                onChangeText={setEmailFuncionario}
                placeholder="Informe o e-mail"
                placeholderTextColor="#777"
                keyboardType="email-address"
            />

            <Text style={styles.rotulo}>Cargo</Text>
            <TextInput
                style={[styles.input, erros.cargo && styles.erroInput]}
                value={cargo}
                onChangeText={setCargo}
                placeholder="Informe o cargo"
                placeholderTextColor="#777"
            />

            <Text style={styles.rotulo}>Salário</Text>
            <TextInput
                style={[styles.input, erros.salarioFuncionario && styles.erroInput]}
                value={salarioFuncionario}
                onChangeText={setSalarioFuncionario}
                placeholder="Informe o salário"
                placeholderTextColor="#777"
                keyboardType="numeric"
            />

            <TouchableOpacity style={styles.botao} onPress={validarCadastro}>
                <Text style={styles.textoBotao}>Registrar</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.botaoVoltar} onPress={navigation.goBack}>
                <Text style={styles.textoBotao}>Retornar</Text>
            </TouchableOpacity>

            <Modal visible={modalVisivel} animationType="fade" transparent>
                <View style={styles.modalFundo}>
                    <View style={styles.modalConteudo}>
                        <Text style={styles.modalTitulo}>Registro Concluído!</Text>
                        <Text style={styles.modalTexto}>Nome: {nomeFuncionario}</Text>
                        <Text style={styles.modalTexto}>E-mail: {emailFuncionario}</Text>
                        <Text style={styles.modalTexto}>Cargo: {cargo}</Text>
                        <Text style={styles.modalTexto}>Salário: R$ {salarioFuncionario}</Text>
                        <TouchableOpacity style={styles.modalBotao} onPress={fecharModal}>
                            <Text style={styles.modalBotaoTexto}>Fechar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e6eaf3',
        padding: 25,
        alignItems: 'center',
    },
    titulo: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#222',
        marginBottom: 25,
    },
    rotulo: {
        alignSelf: 'flex-start',
        fontSize: 15,
        color: '#444',
        marginBottom: 6,
        marginTop: 10,
    },
    input: {
        width: '100%',
        paddingVertical: 10,
        paddingHorizontal: 12,
        backgroundColor: '#fff',
        borderRadius: 6,
        borderWidth: 1,
        borderColor: '#ccc',
        marginBottom: 8,
        fontSize: 15,
        color: '#222',
    },
    erroInput: {
        borderColor: '#d9534f',
    },
    botao: {
        backgroundColor: '#4f46e5',
        width: '100%',
        paddingVertical: 13,
        borderRadius: 8,
        alignItems: 'center',
        marginTop: 15,
    },
    botaoVoltar: {
        backgroundColor: '#d9534f',
        width: '100%',
        paddingVertical: 13,
        borderRadius: 8,
        alignItems: 'center',
        marginTop: 10,
    },
    textoBotao: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    modalFundo: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalConteudo: {
        backgroundColor: '#fff',
        width: '85%',
        borderRadius: 10,
        padding: 20,
        alignItems: 'center',
    },
    modalTitulo: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#4f46e5',
        marginBottom: 15,
    },
    modalTexto: {
        fontSize: 15,
        color: '#333',
        marginBottom: 8,
    },
    modalBotao: {
        backgroundColor: '#4f46e5',
        paddingVertical: 10,
        paddingHorizontal: 25,
        borderRadius: 6,
        marginTop: 15,
    },
    modalBotaoTexto: {
        color: '#fff',
        fontSize: 15,
        fontWeight: 'bold',
    },
});