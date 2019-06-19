import React, { Component } from 'react';
import { View, Text } from 'react-native';
import ProgressionBar from '../common/ProgressionBar';
import LoginButton from './LoginButton';

class SignUpAbout extends Component {
    render() {
        const { mainContainer, innerContainer, titleText, questionsContainer, subtitleStyle } = styles;
        return (
            <View style={mainContainer}>
                <ProgressionBar width="100%" />
                <View style={[innerContainer, { flex: 1 }]}>
                    <Text style={titleText}>About You</Text>
                </View>
                <View style={[innerContainer, { flex: 2 }]}>
                    <View style={questionsContainer}>
                        <Text style={subtitleStyle}>I am a...</Text>
                        <LoginButton
                            text="Man"
                            width={200}
                            height={40}
                            fontSize={16}
                        />
                        <LoginButton
                            text="Woman"
                            width={200}
                            height={40}
                            fontSize={16}
                        />
                    </View>
                </View>
                <View style={[innerContainer, { flex: 2 }]}>
                    <View style={questionsContainer}>
                        <Text style={subtitleStyle}>Looking for...</Text>
                        <LoginButton
                            text="Women"
                            width={200}
                            height={40}
                            fontSize={16}
                        />
                        <LoginButton
                            text="Men"
                            width={200}
                            height={40}
                            fontSize={16}
                        />
                        <LoginButton
                            text="Everyone"
                            width={200}
                            height={40}
                            fontSize={16}
                        />
                    </View>
                </View>
                <View style={[innerContainer, { flex: 2 }]}>
                    <LoginButton
                        text="Done"
                        width={150}
                        height="auto"
                        fontSize={16}
                        padding={20}
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
    innerContainer: {
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
    questionsContainer: {
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
        flexDirection: 'column',
        width: 200
    },
    subtitleStyle: {
        fontSize: 16,
        marginBottom: 20
    }
}

export default SignUpAbout;