import React, { Component } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, Alert } from 'react-native';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, loginUser } from '../../actions';
import LoginButton from './LoginButton';

import firebase from 'firebase';

class EmailLogin extends Component {

    componentDidMount() {
        console.log(firebase.app());
    }

    onEmailChange = (text) => {
        this.props.emailChanged(text);
    };
    
    onPasswordChange = (text) => {
        this.props.passwordChanged(text);
    };
    
    login = () => {
        const { email, password } = this.props;
        this.props.loginUser({ email, password });
    }

    renderError() {
        if (this.props.error) {
            Alert.alert(
                'Oops!', this.props.error,
                [
                  {text: 'OK', onPress: () => {}},
                ],
                { cancelable: false },
            );
        }
    }

    render() {
        const {
            mainContainer,
            topContainer,
            textStyle,
            bottomContainer,
            inputContainer,
            imageContainer,
            imageStyle,
            textInputStyle,
            forgotPasswordContainer,
            forgotPasswordText
        } = styles;

        return (
            <View style={mainContainer}>
                <View style={topContainer}>
                    <Text style={textStyle}>Log in with email</Text>
                </View>
                <View style={bottomContainer}>
                    
                    <View style={inputContainer}>
                        <View style={imageContainer}>
                            <Image
                                source={require('../../images/email.png')}
                                style={imageStyle}
                            />
                        </View>
                        <TextInput
                            autoCorrect={false}
                            placeholder="user@example.com"
                            onChangeText={this.onEmailChange.bind(this)}
                            value={this.props.email}
                            style={textInputStyle}
                        />
                    </View>

                    <View style={inputContainer}>
                        <View style={imageContainer}>
                            <Image
                                source={require('../../images/password.png')}
                                style={imageStyle}
                            />
                        </View>
                        <TextInput
                            autoCorrect={false}
                            secureTextEntry={true}
                            placeholder="password"
                            onChangeText={this.onPasswordChange.bind(this)}
                            value={this.props.password}
                            style={textInputStyle}
                        />
                    </View>

                    <LoginButton
                        text="Log in"
                        width={150}
                        height="auto"
                        fontSize={16}
                        padding={20}
                        marginTop={50}
                        onPress={this.login.bind(this)}
                    />
                </View>
                <View style={forgotPasswordContainer}>
                    <TouchableOpacity>
                        <Text style={forgotPasswordText}>Forgot password</Text>
                    </TouchableOpacity>
                </View>
                {this.renderError()}
            </View>
        );
    };
};

const styles = {
    mainContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        flex: 1,
        height: '100%',
        backgroundColor: 'white'
    },
    topContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        flex: 3,
        paddingLeft: 15,
        paddingRight: 15
    },
    textStyle: {
        fontSize: 20
    },
    bottomContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        flex: 4,
        width: '100%'
    },
    inputContainer: {
        display: 'flex',
        flexDirection: 'row',
        width: '60%',
        height: 45,
        marginBottom: 30
    },
    imageContainer: {
        width: 45,
        height: 45,
        marginRight: 15,
        borderRadius: 22.5,
        borderColor: '#5E12CF',
        borderWidth: 1.5
    },
    imageStyle: {
        width: '100%',
        height: '100%',
        padding: 6
    },
    textInputStyle: {
        flex: 1,
        borderBottomColor: '#5E12CF',
        borderBottomWidth: 1.5,
    },
    forgotPasswordContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        flex: 1,
        width: '100%'
    },
    forgotPasswordText: {
        fontSize: 16
    }
};

const mapStateToProps = state => {
    return {
        email: state.auth.email,
        password: state.auth.password,
        error: state.auth.error
    };
};

export default connect(mapStateToProps, { emailChanged, passwordChanged, loginUser })(EmailLogin);