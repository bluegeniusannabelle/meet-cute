import React, { Component } from 'react';
import { View, Text, Image, TextInput } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import firebase from 'firebase';
import { fetchAboutMe, aboutMeChanged, fetchLocation, locationChanged, fetchVerified } from '../../actions';
import Button from '../common/Button';

class Account extends Component {

    componentDidMount() {
        const { currentUser } = firebase.auth();
        this.props.fetchAboutMe(currentUser);
        this.props.fetchLocation(currentUser);
        this.props.fetchVerified(currentUser);
    }

    getAge(DOB) {
        var today = new Date();
        var birthDate = new Date(DOB);
        var age = today.getFullYear() - birthDate.getFullYear();
        var m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age = age - 1;
        }
    
        return age;
    }

    verified() {
        if (this.props.verified === true) {
            return <Image source={require('../../images/verified.png')} style={styles.verifiedImage} />
        }
    }

    onAboutMeChange = (text) => {
        this.props.aboutMeChanged(text);
    }

    onLocationChange = (text) => {
        this.props.locationChanged(text);
    }

    saveToFirebase() {
        const user = firebase.auth().currentUser;
        const { aboutMe, location } = this.props;

        // Add to database
        firebase.database().ref(`/users`).child(`/${user.uid}`).update({
            aboutMe, location
        }).then(() => {
            // Segue
            Actions.pop()
        })
    }

    render() {
        const {
            mainContainer,
            contentContainer,
            imageStyle,
            row,
            titleText,
            textInputContainer,
            textInputStyle,
            setMargins
        } = styles;

        return (
            <View style={mainContainer}>
                <View style={contentContainer}>
                    <Image
                        source={require('../../images/logo.jpg')}
                        style={imageStyle}
                    />
                </View>
                <View style={contentContainer}>
                    <View style={[row, setMargins]}>
                        <Text style={[titleText, { fontSize: 22 }]}>{this.props.username}, {this.getAge(this.props.dob)}</Text>
                        {this.verified()}
                    </View>
                    <View style={[textInputContainer, setMargins]}>
                        <Text style={titleText}>About me</Text>
                        <TextInput
                            value={this.props.aboutMe}
                            onChangeText={this.onAboutMeChange.bind(this)}
                            multiline={true}
                            style={textInputStyle}
                        />
                    </View>
                    <View style={[textInputContainer, setMargins]}>
                        <Text style={titleText}>Location</Text>
                        <TextInput
                            value={this.props.location}
                            onChangeText={this.onLocationChange.bind(this)}
                            multiline={true}
                            style={textInputStyle}
                        />
                    </View>
                    <Button
                        text="Save"
                        width={200}
                        height="auto"
                        fontSize={16}
                        padding={20}
                        backgroundColor="white"
                        color="black"
                        marginTop={20}
                        marginLeft={30}
                        onPress={this.saveToFirebase.bind(this)}
                    />
                </View>
            </View>
        );
    }
}

const styles = {
    mainContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        flex: 1,
        height: '100%',
        backgroundColor: 'white'
    },
    contentContainer: {
        display: 'flex',
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        flexDirection: 'column',
        width: '100%'
    },
    imageStyle: {
        height: '100%',
        width: '100%',
        backgroundColor: '#f4f4f4'
    },
    titleText: {
        fontWeight: 'bold',
        fontSize: 18
    },
    row: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    verifiedImage: {
        height: 23,
        width: 23,
        marginLeft: 20
    },
    textInputContainer: {
        width: '80%'
    },
    textInputStyle: {
        borderBottomWidth: 1.5,
        borderBottomColor: '#5F12CD',
        paddingBottom: 6
    },
    setMargins: {
        marginTop: 20,
        marginLeft: 30
    }
};

const mapStateToProps = state => {
    return {
        username: state.main.username,
        dob: state.main.dob,
        aboutMe: state.main.aboutMe,
        location: state.main.location,
        verified: state.main.verified
    }
}

export default connect(mapStateToProps, {
    fetchAboutMe,
    aboutMeChanged,
    fetchLocation,
    locationChanged,
    fetchVerified
})(Account);