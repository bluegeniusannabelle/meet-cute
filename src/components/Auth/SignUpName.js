import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native';
import { connect } from 'react-redux';
import { signUpNameChanged } from '../../actions';
import ProgressionBar from '../common/ProgressionBar';
import LoginButton from './LoginButton';
import { Actions } from 'react-native-router-flux';

class SignUpName extends Component {

    onChange = (text) => {
        this.props.signUpNameChanged(text);
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
                    width="13%"
                />
                <View style={[contentContainer, { paddingLeft: 15, paddingRight: 15 }]}>
                    <Text style={textStyle}>Let's start with your name</Text>
                </View>
                <View style={contentContainer}>
                    <TextInput
                        autoCorrect={false}
                        placeholder="Username"
                        style={inputStyle}
                        onChangeText={this.onChange.bind(this)}
                        value={this.props.username}
                    />
                    <Text style={smallerTextStyle}>This will be your username on MeetCute</Text>
                </View>
                <View style={contentContainer}>
                    <LoginButton
                        text="Continue"
                        width={150}
                        height="auto"
                        fontSize={16}
                        padding={20}
                        onPress={() => Actions.signUpEmail()}
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
        marginTop: 5
    }
};

const mapStateToProps = state => {
    return {
        username: state.auth.username
    };
};

export default connect(mapStateToProps, { signUpNameChanged })(SignUpName);