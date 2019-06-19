import React, { Component } from 'react';
import { View, Text, TextInput, Alert } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import firebase from 'firebase';
import { fetchUserData, fetchMaxAge, fetchDistanceAway, minAgeChanged, maxAgeChanged, distanceAwayChanged } from '../../actions';
import Button from '../common/Button';

class Settings extends Component {

    componentDidMount() {
        const { currentUser } = firebase.auth();
        this.props.fetchUserData(currentUser);
        this.props.fetchMaxAge(currentUser);
        this.props.fetchDistanceAway(currentUser);
    }

    onMinAgeChange = text => {
        this.props.minAgeChanged(text);
    }

    onMaxAgeChange = text => {
        this.props.maxAgeChanged(text);
    }

    onDistanceAwayChange = text => {
        this.props.distanceAwayChanged(text);
    }

    saveToFirebase() {
        const user = firebase.auth().currentUser;
        const { minAge, maxAge, distanceAway } = this.props;

        // Add to database
        firebase.database().ref(`/users`).child(`/${user.uid}`).update({
            minAge, maxAge, distanceAway
        }).then(() => {
            // Segue
            Actions.pop()
        })
    }

    logOut() {
        firebase.auth().signOut().then(function() {
            // Sign-out successful
            setTimeout(() => {
                Actions.reset('auth');
            }, 1000)
        }).catch(function(error) {
            // An error happened
            console.log(error);
        });
    }

    deleteAccount() {
        const { currentUser } = firebase.auth();
        Alert.alert(
            'Delete your account',
            'Are you sure you want to delete your account?',
            [
                {
                    text: 'Yes',
                    onPress: () => {
                        // Remove from database
                        firebase.database().ref(`/users/${currentUser.uid}`).remove()
                            .then(() => {
                                // Delete from auth
                                currentUser.delete().then(function() {
                                    // User deleted, so segue back
                                    setTimeout(() => {
                                        Actions.reset('auth');
                                    }, 1000)
                                  }).catch(function(error) {
                                    // An error happened.
                                    console.log(error);
                                  });
                            });
                        // Segue back
                    }
                },
                {
                    text: 'No',
                    onPress: () => {}
                }
            ]
        );
    }

    render() {
        const { mainContainer, containerView, textStyle, textInputStyle, row } = styles;
        const { minAge, maxAge, distanceAway } = this.props;

        return (
            <View style={mainContainer}>
                <View style={[containerView, { flex: 1 }]}>
                    <Text style={textStyle}>Age</Text>
                    <View style={row}>
                        <Text>Between </Text>
                        <TextInput
                            value={minAge}
                            keyboardType="number-pad"
                            textAlign="center"
                            style={textInputStyle}
                            onChangeText={this.onMinAgeChange.bind(this)}
                        />
                        <Text> and </Text>
                        <TextInput
                            value={maxAge}
                            keyboardType="number-pad"
                            textAlign="center"
                            style={textInputStyle}
                            onChangeText={this.onMaxAgeChange.bind(this)}
                        />
                    </View>
                </View>
                <View style={[containerView, { flex: 1 }]}>
                    <Text style={textStyle}>Distance</Text>
                    <View style={row}>
                        <Text>Up to </Text>
                        <TextInput
                            value={distanceAway}
                            keyboardType="number-pad"
                            textAlign="center"
                            style={textInputStyle}
                            onChangeText={this.onDistanceAwayChange.bind(this)}
                        />
                        <Text> miles away</Text>
                    </View>
                </View>
                <View style={[containerView, { flex: 3 }]}>
                    <Button
                        text="Save"
                        width={200}
                        height="auto"
                        fontSize={16}
                        padding={20}
                        backgroundColor="white"
                        color="black"
                        onPress={this.saveToFirebase.bind(this)}
                    />
                    <Button
                        text="Log Out"
                        width={200}
                        height="auto"
                        fontSize={16}
                        padding={20}
                        backgroundColor="white"
                        color="black"
                        onPress={this.logOut.bind(this)}
                    />
                    <Button
                        text="Delete Account"
                        width={200}
                        height="auto"
                        fontSize={16}
                        padding={20}
                        backgroundColor="#cc3737"
                        color="white"
                        onPress={this.deleteAccount.bind(this)}
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
    containerView: {
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center'
    },
    row: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        height: 30
    },
    textStyle: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    textInputStyle: {
        width: 40,
        height: 30,
        borderBottomWidth: 1.5,
        borderBottomColor: '#5F12CD'
    }
};

const mapStateToProps = state => {
    return {
        minAge: state.main.minAge,
        maxAge: state.main.maxAge,
        distanceAway: state.main.distanceAway
    }
}

export default connect(mapStateToProps, {
    fetchUserData,
    fetchMaxAge,
    fetchDistanceAway,
    minAgeChanged,
    maxAgeChanged,
    distanceAwayChanged
})(Settings);