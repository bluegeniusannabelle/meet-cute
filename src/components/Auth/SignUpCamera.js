import React, { Component } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { RNCamera } from 'react-native-camera';
import { firstPhotoChanged } from '../../actions';
import ProgressionBar from '../common/ProgressionBar';

class SignUpCamera extends Component {
    
    takePicture = async() => {
        const options = { quality: 0.5, base64: true };
        const data = await this.camera.takePictureAsync(options);
        this.props.firstPhotoChanged(data.uri);
        Actions.signUpViewFirstPhoto();
    };

    render() {
        const { mainContainer, preview, capture } = styles;
        return (
            <View style={mainContainer}>
                <ProgressionBar width="75%" />
                <RNCamera
                    ref={ref => {
                        this.camera = ref
                    }}
                    style={preview}
                    type={RNCamera.Constants.Type.front}
                    flashMode={RNCamera.Constants.FlashMode.on}
                    androidCameraPermissionOptions={{
                        title: 'Camera Permission.',
                        message: 'We need your permission to use your camera.',
                        buttonPositive: 'Ok',
                        buttonNegative: 'Cancel',
                    }}
                    androidRecordAudioPermissionOptions={{
                        title: 'Audio',
                        message: 'We need your permission to use your audio',
                        buttonPositive: 'Ok',
                        buttonNegative: 'Cancel',
                    }}
                    >
                    {({ camera, status, recordAudioPermissionStatus }) => {
                        if (status !== 'READY') return <View />;
                        return (
                            <View style={{ flex: 0, flexDirection: 'row', justifyContent: 'center' }}>
                                <TouchableOpacity onPress={() => this.takePicture(camera)} style={capture}>
                                    <Text style={{ fontSize: 14 }}> TAKE PHOTO </Text>
                                </TouchableOpacity>
                            </View>
                        );
                    }}
                </RNCamera>
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
    preview: {
      flex: 1,
      justifyContent: 'flex-end',
      alignItems: 'center',
      width: '100%'
    },
    capture: {
      flex: 0,
      backgroundColor: '#fff',
      borderRadius: 5,
      padding: 15,
      paddingHorizontal: 20,
      alignSelf: 'center',
      margin: 20,
    }
}

const mapStateToProps = state => {
    return {
        firstPhoto: state.auth.firstPhoto
    }
}

export default connect(mapStateToProps, { firstPhotoChanged })(SignUpCamera);