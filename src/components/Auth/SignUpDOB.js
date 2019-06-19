import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { signUpDOBChanged, signUpUser } from '../../actions';
import DatePicker from 'react-native-date-picker';
import firebase from 'firebase';
import ProgressionBar from '../common/ProgressionBar';
import LoginButton from './LoginButton';
import { Actions } from 'react-native-router-flux';

class SignUpDOB extends Component {

    state = { date: new Date() }

    onContinue() {
        // Call sign up with email action
        const { email, password, username, dob, emailOptIn } = this.props;
        this.props.signUpUser({
            email, password, username, dob, emailOptIn
        });
        Actions.signUpVerify();
    }

    render() {
        const { mainContainer, contentContainer, textStyle } = styles;
        return (
            <View style={mainContainer}>
                <ProgressionBar
                    width="50%"
                />
                <View style={contentContainer}>
                    <Text style={textStyle}>When's your birthday?</Text>
                </View>
                <View style={contentContainer}>
                    <DatePicker
                        date={this.props.dob}
                        mode="date"
                        onDateChange={date => this.props.signUpDOBChanged(date)}
                    />
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
    };
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
    }
};

const mapStateToProps = state => {
    return {
        dob: state.auth.dob,
        signUpMethod: state.auth.signUpMethod,
        email: state.auth.email,
        password: state.auth.password,
        username: state.auth.username,
        emailOptIn: state.auth.emailOptIn
    };
};

export default connect(mapStateToProps, { signUpDOBChanged, signUpUser })(SignUpDOB);