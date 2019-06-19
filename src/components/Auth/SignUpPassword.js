import React, { Component } from 'react';
import { View, Text, TextInput, Alert } from 'react-native';
import { connect } from 'react-redux';
import { signUpPasswordChanged } from '../../actions';
import LoginButton from './LoginButton';
import ProgressionBar from '../common/ProgressionBar'
import { Actions } from 'react-native-router-flux';

class SignUpPassword extends Component {

    onChange = text => {
        this.props.signUpPasswordChanged(text);
    }

    onContinue() {
        if (this.props.password.length < 6) {
            Alert.alert(
                'Oops!',
                'Please make sure that your password is a minimum of 6 characters',
                [
                    {
                        text: 'Ok',
                        onPress: () => {}
                    }
                ]
            );
        } else {
            Actions.signUpDOB();
        }
    }

    render() {
        const {
            mainContainer,
            contentContainer,
            textStyle,
            inputStyle,
            smallerTextStyle
        } = styles;

        return (
            <View style={mainContainer}>
                <ProgressionBar
                    width="38%"
                />
                <View style={[contentContainer, { paddingLeft: 15, paddingRight: 15 }]}>
                    <Text style={textStyle}>Choose your password</Text>
                </View>
                <View style={contentContainer}>
                    <TextInput
                        secureTextEntry={true}
                        autoCorrect={false}
                        placeholder="Password (min. 6 characters)"
                        style={inputStyle}
                        onChangeText={this.onChange.bind(this)}
                        value={this.props.password}
                    />
                    <Text style={smallerTextStyle}>
                        Choose a password to protect your account
                    </Text>
                </View>
                <View style={contentContainer}>
                    <LoginButton
                        text="Continue"
                        width={150}
                        height="auto"
                        fontSize={16}
                        padding={20}
                        onPress={() => this.onContinue()}
                    />
                </View>
            </View>
        );
    }
};

const styles = {
    mainContainer: {
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        flexDirection: 'column',
        flex: 1,
        height: '100%',
        backgroundColor: 'white'
    },
    contentContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        flex: 1,
        width: '100%'
    },
    textStyle: {
        fontSize: 18
    },
    inputStyle: {
        display: 'flex',
        alignItems: 'flex-end',
        width: '70%',
        height: 30,
        paddingBottom: 6,
        fontSize: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#5F12CD'
    },
    smallerTextStyle: {
        fontSize: 12,
        color: 'grey',
        marginTop: 5,
        paddingLeft: 40,
        paddingRight: 40,
        textAlign: 'center'
    }
};

const mapStateToProps = state => {
    return {
        password: state.auth.password
    };
};

export default connect(mapStateToProps, { signUpPasswordChanged })(SignUpPassword);