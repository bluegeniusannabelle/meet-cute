import React, { Component } from 'react';
import { Platform, View, Image, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import RNFetchBlob from 'rn-fetch-blob'
import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import ProgressionBar from '../common/ProgressionBar';

const Blob = RNFetchBlob.polyfill.Blob;
const fs = RNFetchBlob.fs;
window.XMLHttpRequest = RNFetchBlob.polyfill.XMLHttpRequest;
window.Blob = Blob;

class SignUpViewFirstPhoto extends Component {

    continue() {
        let imgUri = this.props.firstPhoto;
        let uploadBlob = null;
        const uploadUri = Platform.OS === 'ios' ? imgUri.replace('file://', '') : imgUri;
        const { currentUser } = firebase.auth();
        const imageRef = firebase.storage().ref(`users/${currentUser.uid}/live-photo.jpg`);

        fs.readFile(uploadUri, 'base64')
            .then(data => {
                return Blob.build(data, { type: `image/jpeg;BASE64` });
            })
            .then(blob => {
                uploadBlob = blob;
                return imageRef.put(blob, { contentType: 'image/jpeg', name: 'live-photo.jpg' });
            })
            .then(() => {
                uploadBlob.close()
                return imageRef.getDownloadURL();
            })
            .then(url => {
                firebase.database().ref(`/users`).child(`/${currentUser.uid}`).update({
                    'live-photo': url
                }).then(() => {
                    Actions.signUpSecondPhoto()
                });
            })
            .catch(error => {
               console.log(error.message);
            });
    }

    render() {
        const { mainContainer, imageStyle, confirmView, innerConfirmView, buttonText } = styles;
        return (
            <View style={mainContainer}>
                <ProgressionBar width="75%" />
                <Image
                    source={{isStatic:true, uri: this.props.firstPhoto}}
                    style={imageStyle}
                />
                <View style={confirmView}>
                    <View style={innerConfirmView}>
                        <Text>Would you like to use this photo?</Text>
                    </View>
                    <View style={[innerConfirmView, { flex: 1 }]}>
                        <TouchableOpacity onPress={this.continue()}>
                            <Text style={buttonText}>Yes</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => Actions.pop()}>
                            <Text style={buttonText}>No</Text>
                        </TouchableOpacity>
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
    imageStyle: {
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        flexDirection: 'column',
        flex: 4,
        width: '100%'
    },
    confirmView: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column'
    },
    innerConfirmView: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        flex: 1
    },
    buttonText: {
        width: 100,
        fontWeight: 'bold',
        textAlign: 'center'
    }
};

const mapStateToProps = state => {
    return {
        firstPhoto: state.auth.firstPhoto
    }
}

export default connect(mapStateToProps)(SignUpViewFirstPhoto);