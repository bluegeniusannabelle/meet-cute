import React, { Component } from 'react';
import { View, Text, Alert, TextInput } from 'react-native';
import { connect } from 'react-redux';
import { signUpEmailChanged, signUpEmailOptIn } from '../../actions';
import LoginButton from './LoginButton';
import ProgressionBar from '../common/ProgressionBar'
import { Actions } from 'react-native-router-flux';

class SignUpEmail extends Component {

    onChange = text => {
        this.props.signUpEmailChanged(text);
    }

    onContinue() {
        Alert.alert(
            'Email preferences',
            'Would you like to receive occasional emails with special offers, promotions, and more?',
            [
                {
                    text: 'Sure!',
                    onPress: () => {
                        this.props.signUpEmailOptIn(true);
                        this.segue();
                    }
                },
                {
                    text: 'No thanks',
                    onPress: () => {
                        this.props.signUpEmailOptIn(false);
                        this.segue(this);
                    }
                }
            ]
        );
    }

    segue() {
        console.log(this.props);
        if (this.props.signUpMethod === 'phone') {
            // Sign up with phone
            Actions.signUpPhoneNumber();
        } else {
            // Sign up with email, therefore go to password
            Actions.signUpPassword();
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
                    width="25%"
                />
                <View style={[contentContainer, { paddingLeft: 15, paddingRight: 15 }]}>
                    <Text style={textStyle}>Add your email</Text>
                </View>
                <View style={contentContainer}>
                    <TextInput
                        autoCorrect={false}
                        placeholder="Email"
                        style={inputStyle}
                        onChangeText={this.onChange.bind(this)}
                        value={this.props.email}
                    />
                    <Text style={smallerTextStyle}>
                        Your email will not be visible to other users.
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
        email: state.auth.email,
        emailOptIn: state.auth.emailOptIn,
        signUpMethod: state.auth.signUpMethod
    };
};

export default connect(mapStateToProps, {
    signUpEmailChanged,
    signUpEmailOptIn
})(SignUpEmail);