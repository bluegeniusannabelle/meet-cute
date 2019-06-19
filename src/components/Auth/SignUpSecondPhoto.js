import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import firebase from 'firebase';
import LoginButton from './LoginButton';
import ProgressionBar from '../common/ProgressionBar';

class SignUpSecondPhoto extends Component {

    componentDidMount() {
        this.fetchLivePhoto()
    }

    fetchLivePhoto() {
        console.log(firebase.apps)
        console.log(firebase.app().name)
        const { currentUser } = firebase.auth();
        console.log(currentUser);
        // firebase.database().ref(`users/${currentUser.uid}`).on('value', function(snapshot) {
        //     console.log(snapshot.val())
        //     //return snapshot.val().live-photo
        // })
        // .catch(error => {
        //     console.log(error);
        // });
    }

    render() {
        const { mainContainer, inner, innerRow, imageContainer, imageStyle } = styles;
        //const livePhoto = this.fetchLivePhoto();
        return (
            <View style={mainContainer}>
                <ProgressionBar width="88%" />
                <View style={[inner, { flex: 2 }]}>
                    <View style={[innerRow, { marginBottom: 50 }]}>
                        <TouchableOpacity>
                            <View style={imageContainer}>
                                <Image
                                    //source={{ uri: livePhoto }}
                                    style={imageStyle}
                                />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={imageContainer}>
                                <Text>1</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={imageContainer}>
                                <Text>1</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={innerRow}>
                        <TouchableOpacity>
                            <View style={imageContainer}>
                                <Text>1</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={imageContainer}>
                                <Text>1</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={imageContainer}>
                                <Text>1</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={[inner, { flex: 1 }]}>
                    <LoginButton
                        text="Continue"
                        width={150}
                        height="auto"
                        fontSize={16}
                        padding={20}
                        onPress={() => Actions.signUpAbout()}
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
    inner: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        width: '100%'
    },
    innerRow: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        height: 80
    },
    imageContainer: {
        width: 80,
        height: '100%',
        marginLeft: 10,
        marginRight: 10,
        backgroundColor: '#f4f4f4',
        borderRadius: 40
    },
    imageStyle: {
        width: '100%',
        height: '100%'
    }
}

export default SignUpSecondPhoto;