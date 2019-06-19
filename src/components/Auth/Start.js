import React from 'react';
import { View, Image } from 'react-native';
import { Actions } from 'react-native-router-flux';
import LoginButton from './LoginButton';

const goToSignUp = () => {
    Actions.signUpName();
};

const goToLogIn = () => {
    Actions.emailLogin();
};

const Start = () => {
    const { mainContainer, innerContainer1, innerContainer2, imageStyle, } = styles;

    return (
        <View style={mainContainer}>
            <View style={innerContainer1}>
                <Image style={imageStyle} source={require('../../images/logo.jpg')}/>
            </View>
            <View style={innerContainer2}>
                <LoginButton text="Sign Up" width="50%" height="auto" fontSize={18} padding={20} onPress={goToSignUp.bind(this)} />
                <LoginButton text="Log In" width="50%" height="auto" fontSize={18} padding={20} onPress={goToLogIn.bind(this)} />
                <LoginButton
                    text="Terms of Service"
                    width="50%"
                    height={45}
                    fontSize={13}
                    marginTop={30}
                />
            </View>
        </View>
    );
};

const styles = {
    mainContainer: {
        display: 'flex',
        flexDirection: 'column',
        flex: 1
    },
    innerContainer1: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        height: '50%',
        backgroundColor: 'white'
    },
    imageStyle: {
        width: 200,
        height: 200/(446/148)
    },
    innerContainer2: {
        height: '50%',
        alignItems: 'center',
        backgroundColor: 'white'
    }
}

export default Start;