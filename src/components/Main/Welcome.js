import React, { Component } from 'react';
import { View, Text, Alert } from 'react-native';
import SideMenu from 'react-native-side-menu';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import firebase from 'firebase';
import Geocoder from 'react-native-geocoder';
import { fetchUsername, fetchDOB } from '../../actions';
import Button from '../common/Button';
import Sidebar from './Sidebar';

class Welcome extends Component {

    componentDidMount() {
        const { currentUser } = firebase.auth();
        this.props.fetchUsername(currentUser);
        this.props.fetchDOB(currentUser);

        // Fetch location from database
        firebase.database().ref(`users/${currentUser.uid}`).on('value', function(snapshot) {
            if (snapshot.val().location === '') {
                // No written location in database, so get current location and save it to database
                navigator.geolocation.getCurrentPosition(
                    (position) => {
                        // Get coordinates
                        let lat = position.coords.latitude;
                        let lng = position.coords.longitude;
                        let coords = { lat, lng };
                        // Convert coordinates to location
                        Geocoder.geocodePosition(coords).then(res => {
                            let locality = res[0].locality;
                            let adminArea = res[0].adminArea;
                            let country = res[0].country;
                            let location = `${locality}, ${adminArea}, ${country}`
                            // Write to firebase
                            firebase.database().ref(`/users`).child(`/${currentUser.uid}`).update({
                                location
                            })
                        }).catch(err => console.log(err))
                    },
                    (error) => {
                        Alert.alert(error.message);
                    }
                );
            }
        });
    }

    render() {
        const { mainContainer, innerContainer, titleText } = styles;
        return (
            <SideMenu menu={<Sidebar />}>
                <View style={mainContainer}>
                    <View style={[innerContainer, { flex: 2 }]}>
                        <Text style={titleText}>Welcome to MeetCute</Text>
                    </View>
                    <View style={[innerContainer, { flex: 3 }]}>
                        <Text>Choose your mode</Text>
                        <Button
                            text="Speed Dating"
                            width={200}
                            height="auto"
                            fontSize={16}
                            padding={20}
                            marginTop={30}
                            backgroundColor="white"
                            color="black"
                            onPress={() => Actions.speedDatingMode()}
                        />
                        <Button
                            text="Messaging"
                            width={200}
                            height="auto"
                            fontSize={16}
                            padding={20}
                            backgroundColor="white"
                            color="black"
                            onPress={() => Actions.messagingMode()}
                        />
                    </View>
                </View>
            </SideMenu>
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
    innerContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        width: '100%'
    },
    titleText: {
        fontSize: 18
    }
};

const mapStateToProps = state => {
    return {
        username: state.main.username,
        dob: state.main.dob
    }
}

export default connect(mapStateToProps, {
    fetchUsername,
    fetchDOB
})(Welcome);