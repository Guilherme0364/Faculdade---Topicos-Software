import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Modal, Alert, StyleSheet } from 'react-native';
import { NavigationProp } from '@react-navigation/native';

interface Props {
    navigation: NavigationProp<any>;
}

const CadastroAlunoScreen: React.FC<Props> = ({ navigation }) => {
    const [formData, setFormData] = useState({ nome: '', idade: '', email: '', telefone: '' });
    const [modalVisivel, setModalVisivel] = useState(false);
    const [erros, setErros] = useState<{ [key: string]: boolean }>({});

    const atualizarCampo = (campo: string, valor: string) => {
        setFormData(prev => ({ ...prev, [campo]: valor }));
    };

    const validarFormulario = () => {
        const novosErros = {
            nome: formData.nome.trim() === '',
            idade: isNaN(Number(formData.idade)) || Number(formData.idade) <= 0,
            email: formData.email.trim() === '',
            telefone: formData.telefone.trim() === ''
        };

        setErros(novosErros);
        return !Object.values(novosErros).some(Boolean);
    };

    const cadastrarAluno = () => {
        if (!validarFormulario()) {
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
            <Text style={styles.titulo}>Cadastro de Aluno</Text>
            {Object.keys(formData).map((campo) => (
                <View key={campo}>
                    <Text style={styles.label}>{campo.charAt(0).toUpperCase() + campo.slice(1)}</Text>
                    <TextInput
                        style={[styles.input, erros[campo] && styles.inputErro]}
                        value={formData[campo]}
                        onChangeText={(valor) => atualizarCampo(campo, valor)}
                        placeholder={`Digite seu ${campo}`}
                        keyboardType={campo === 'idade' ? 'numeric' : campo === 'telefone' ? 'phone-pad' : 'default'}
                    />
                    {erros[campo] && <Text style={styles.textoErro}>Campo obrigatório</Text>}
                </View>
            ))}

            <TouchableOpacity style={styles.botao} onPress={cadastrarAluno}>
                <Text style={styles.textoBotao}>Cadastrar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.botaoVoltar} onPress={() => navigation.goBack()}>
                <Text style={styles.textoBotao}>Voltar</Text>
            </TouchableOpacity>

            <Modal visible={modalVisivel} animationType="slide" transparent>
                <View style={styles.modalContainer}>
                    <View style={styles.modalConteudo}>
                        <Text style={styles.modalTitulo}>🎉 Cadastro Realizado!</Text>
                        {Object.entries(formData).map(([chave, valor]) => (
                            <Text key={chave} style={styles.modalTexto}>{`${chave}: ${valor}`}</Text>
                        ))}
                        <TouchableOpacity style={styles.botaoModal} onPress={fecharModal}>
                            <Text style={styles.textoBotao}>Fechar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0f4f8',
        padding: 20,
        alignItems: 'center',
    },
    titulo: {
        fontSize: 26,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 30,
    },
    label: {
        alignSelf: 'flex-start',
        fontSize: 16,
        color: '#333',
        marginBottom: 8,
        marginTop: 12,
    },
    input: {
        width: '100%',
        paddingVertical: 12,
        paddingHorizontal: 15,
        backgroundColor: '#fff',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#ddd',
        marginBottom: 5,
        fontSize: 16,
        color: '#333',
        shadowColor: '#000',
        shadowOpacity: 0.05,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 4,
    },
    inputErro: {
        borderColor: '#e53935',
        backgroundColor: '#fff0f0',
    },
    textoErro: {
        color: '#e53935',
        fontSize: 12,
        alignSelf: 'flex-start',
        marginBottom: 5,
    },
    botao: {
        backgroundColor: '#4f46e5',
        width: '100%',
        paddingVertical: 15,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 20,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 4 },
        shadowRadius: 8,
    },
    botaoVoltar: {
        backgroundColor: '#e54646',
        width: '100%',
        paddingVertical: 15,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 20,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 4 },
        shadowRadius: 8,
    },
    textoBotao: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    modalContainer: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.4)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalConteudo: {
        backgroundColor: '#fff',
        width: '85%',
        borderRadius: 12,
        padding: 25,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOpacity: 0.15,
        shadowOffset: { width: 0, height: 6 },
        shadowRadius: 10,
        elevation: 10,
    },
    modalTitulo: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#4f46e5',
        marginBottom: 20,
    },
    modalTexto: {
        fontSize: 16,
        color: '#333',
        marginBottom: 10,
    },
    botaoModal: {
        backgroundColor: '#4f46e5',
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderRadius: 8,
        marginTop: 20,
    },
});


export default CadastroAlunoScreen;
