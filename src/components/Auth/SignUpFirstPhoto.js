import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';
import ProgressionBar from '../common/ProgressionBar';
import LoginButton from './LoginButton';

class SignUpFirstPhoto extends Component {

    takePhoto() {
        Actions.signUpCamera();
    }
 
    render() {
        const { mainContainer, contentContainer, titleText, infoTextStyle } = styles;

        return (
            <View style={mainContainer}>
                <ProgressionBar width="75%" />
                <View style={[contentContainer, { flex: 1 }]}>
                    <Text style={titleText}>Live photo verification</Text>
                </View>
                <View style={[contentContainer, { flex: 1 }]}>
                    <Text style={infoTextStyle}>
                        We ask our users for a live photo verification in order to prevent catfishing and scamming on our platform.
                    </Text>
                    <Text style={infoTextStyle}>
                        Our users' safety is incredibly important.
                    </Text>
                    <Text style={infoTextStyle}>
                        Your live photo will be visible to other users, however it does not need to be your profile picture.
                        It can be any of your 6 pictures permitted.
                    </Text>
                </View>
                <View style={[contentContainer, { flex: 2 }]}>
                    <LoginButton
                        text="Take a live photo"
                        width={250}
                        height="auto"
                        fontSize={16}
                        padding={20}
                        onPress={() => this.takePhoto()}
                    />
                </View>
            </View>
        );
    }
}

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
        width: '100%'
    },
    titleText: {
        fontSize: 18,
        textAlign: 'center'
    },
    infoTextStyle: {
        textAlign: 'center',
        marginLeft: 30,
        marginRight: 30,
        marginBottom: 20
    }
};

export default SignUpFirstPhoto;