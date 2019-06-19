import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, Alert } from 'react-native';
// import { LoginButton } from 'react-native-fbsdk';
import InstagramLogin from 'react-native-instagram-login';
import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import ProgressionBar from '../common/ProgressionBar';

class SignUpVerify extends Component {

    verify() {
        const { currentUser } = firebase.auth();
        console.log(currentUser.uid);
        firebase.database().ref(`/users`).child(`/${currentUser.uid}`).update({
            verified: true
        }).then(() => {
            Actions.signUpFirstPhoto();
        });
    }

    render() {
        const {
            mainContainer,
            contentContainer,
            textStyle,
            smallerTextStyle,
            connectSocialContainer, 
            imageStyle,
            connectSocialInner,
            upperTextStyle,
            lowerTextStyle
        } = styles;

        return (
            <View style={mainContainer}>
                <ProgressionBar width="63%" />
                <View style={[contentContainer, { flex: 1 }]}>
                    <Text style={textStyle}>Verify your account</Text>
                </View>
                <View style={[contentContainer, { flex: 1 }]}>
                    <Text style={smallerTextStyle}>
                        You can verify your account by linking your Facebook or Instagram account.
                    </Text>
                    <Text style={smallerTextStyle}>
                        Your social media account will not be visible to other users.
                    </Text>
                </View>
                <View style={[contentContainer, { flex: 3 }]}>
                    <View style={connectSocialContainer}>
                        <View style={[connectSocialInner, { display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', flex: 1 }]}>
                            <Image source={require('../../images/facebook.png')} style={imageStyle} />
                            {/* <LoginButton
                                readPermissions={["email"]}
                                onLoginFinished={
                                    (error, result) => {
                                        if (error) {
                                            alert("Login failed with error: " + error.message);
                                        } else if (result.isCancelled) {
                                            alert("Login was cancelled");
                                        } else {
                                            this.verify();
                                        }
                                    }
                                }
                                onLogoutFinished={() => console.log("User logged out")}
                            /> */}
                        </View>
                    </View>
                    <View style={connectSocialContainer}>
                        <Image source={require('../../images/instagram.png')} style={imageStyle} />
                        <View style={connectSocialInner}>
                            <Text style={upperTextStyle}>Instagram</Text>
                            <TouchableOpacity onPress={()=> this.instagramLogin.show()}>
                                <Text style={lowerTextStyle}>Connect</Text>
                            </TouchableOpacity>
                            <InstagramLogin
                                ref= {ref => this.instagramLogin= ref}
                                clientId='9322d8efb6c347ae9594308473b00b02'
                                redirectUrl='http://bluegenius.co'
                                scopes={['public_content', 'follower_list']}
                                onLoginSuccess={(token) => this.verify()}
                                onLoginFailure={(data) => Alert.alert('Oops! There has been an error, please try again.')}
                            />
                        </View>
                    </View>
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
    textStyle: {
        fontSize: 18
    },
    smallerTextStyle: {
        fontSize: 14,
        color: 'grey',
        paddingLeft: 40,
        paddingRight: 40,
        textAlign: 'center',
        marginTop: 6,
        marginBottom: 6
    },
    connectSocialContainer: {
        height: 60,
        display: 'flex',
        flexDirection: 'row',
        marginBottom: 30
    },
    imageStyle: {
        width: 45,
        height: 45,
        marginRight: 15
    },
    connectSocialInner: {
        height: 60
    },
    upperTextStyle: {
        height: 30,
        fontSize: 16
    },
    lowerTextStyle: {
        height: 30,
        fontSize: 14,
        color: 'grey'
    }
}

export default SignUpVerify;