import React, { Component } from 'react';
import {
    View,
    Image,
    Text,
    KeyboardAvoidingView,
    Alert
} from 'react-native';
import {
    RkButton,
    RkTextInput,
    RkStyleSheet,
} from 'react-native-ui-kitten';

import GradientButton from 'react-native-gradient-buttons';
import { human } from 'react-native-typography';
import { iOSUIKit } from 'react-native-typography';
import {verticalScale } from 'react-native-size-matters';

//QUANDO EM TUNEL IP: http://192.168.43.86:3333

export default class LoginScreen extends Component{
    static navigationOptions = {
        header: null,
    };

    constructor(){
        super();
        this.state = {
            cpf: '',
            senha: '',
        }
        global.Endereco = 'http://192.168.43.86:3333';
    }

    onLoginButtonPressed = () => {
        //Vai pra tela principal que eh outro tipo de navigator
        let that = this;
        let cpf = this.state.cpf;
        let senha = this.state.senha;
        fetch(global.Endereco + '/users/user/check', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                cpf: cpf,
                password: senha
            })
        }).then(function(response){
            if (response.ok){
                return response.text().then(function (text) {
                        let aux = JSON.parse(text);
                        that.props.navigation.navigate('SplashScreen', { jsonUser: aux });
                    }
                )
            }else{
                Alert.alert(
                        //title
                        'Erro no Login!',
                        //body
                        'Verifique seu Login/Senha e tente novamente',
                        [
                            { text: 'Ok!'},
                        ],
                        //clicking out side of alert will not cancel
                    )
            }}).catch((err) => console.log(err))
        
    }

    onSignUpButtonPressed = () => {
        this.props.navigation.navigate('CadastroScreen');
    };

    renderImage = () => (
        <Image style={styles.image} source={require('../src/images/logofuleira.png')} />
    );
    
    render = () => (
        <KeyboardAvoidingView
            style={styles.screen}
            behavior="padding"
        >
            <View style={styles.header}>
                {this.renderImage()}
                <Text style={iOSUIKit.bodyEmphasized}>Reduzindo filas, valorizando seu tempo</Text>
            </View>
            <View style={styles.content}>
                <View style={styles.body}>
                    <RkTextInput rkType='rounded' placeholder='CPF' 
                        onChangeText={cpf => this.setState({ cpf })}
                        value={this.state.cpf}
                    />
                    <RkTextInput rkType='rounded' placeholder='Senha' secureTextEntry 
                        onChangeText={senha => this.setState({ senha })}
                        value={this.state.senha}
                    />
                    <GradientButton
                        style={styles.save}
                        gradientBegin="#6e1221"
                        gradientEnd="#b81e38"
                        gradientDirection="diagonal"
                        height={60}
                        width={300}
                        radius={15}
                        text='LOGIN'
                        impact
                        impactStyle='Light'
                        onPressAction={this.onLoginButtonPressed}
                    />
                </View>
                <View style={styles.footer}>
                    <View style={styles.textRow}>
                        <Text style={human.footnote}>Não tem uma conta? </Text>
                        <RkButton rkType='clear' onPress={this.onSignUpButtonPressed}>
                            <Text style={iOSUIKit.footnoteEmphasized}>Cadastre-se</Text>
                        </RkButton>
                    </View>
                </View>
            </View>
        </KeyboardAvoidingView>
    )
}

const styles = RkStyleSheet.create(theme => ({
    screen: {
        padding: 16,
        flex: 1,
        justifyContent: 'space-around',
        backgroundColor: '#FFF',
    },
    image: {
        marginBottom: 10,
        height: verticalScale(77),
        resizeMode: 'contain',
    },
    header: {
        paddingBottom: 10,
        alignItems: 'center',
        justifyContent: 'center',
        // flex: 1,
    },
    body: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    content: {
        marginTop: 2,
        justifyContent: 'space-between',
    },
    save: {
        marginVertical: 20,
    },
    textRow: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    footer: {
        justifyContent: 'flex-end',
    },
    spinnerTextStyle: {
        color: '#FFF'
    },
}));
