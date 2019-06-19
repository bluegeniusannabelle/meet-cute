import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
    SIGN_UP_METHOD,
    SIGN_UP_USERNAME_CHANGED,
    SIGN_UP_EMAIL_CHANGED,
    SIGN_UP_EMAIL_OPT_IN,
    SIGN_UP_PASSWORD_CHANGED,
    SIGN_UP_DOB_CHANGED,
    SIGN_UP_USER_SUCCESS,
    SIGN_UP_USER_FAIL,
    FIRST_PHOTO_CHANGED,
    EMAIL_CHANGED,
    PASSWORD_CHANGED,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAIL,
    FETCH_USERNAME,
    FETCH_DOB,
    FETCH_USER_DATA,
    FETCH_MAX_AGE,
    FETCH_DISTANCE_AWAY,
    MIN_AGE_CHANGED,
    MAX_AGE_CHANGED,
    DISTANCE_AWAY_CHANGED,
    FETCH_ABOUT_ME,
    ABOUT_ME_CHANGED,
    FETCH_LOCATION,
    LOCATION_CHANGED,
    FETCH_VERIFIED
} from './types';

// SIGN UP
export const signUpMethod = text => {
    return {
        type: SIGN_UP_METHOD,
        payload: text
    };
};

export const signUpNameChanged = text => {
    return {
        type: SIGN_UP_USERNAME_CHANGED,
        payload: text
    };
};

export const signUpEmailChanged = text => {
    return {
        type: SIGN_UP_EMAIL_CHANGED,
        payload: text
    };
};

export const signUpEmailOptIn = bool => {
    return {
        type: SIGN_UP_EMAIL_OPT_IN,
        payload: bool
    };
};

export const signUpPasswordChanged = text => {
    return {
        type: SIGN_UP_PASSWORD_CHANGED,
        payload: text
    };
};

export const signUpDOBChanged = date => {
    return {
        type: SIGN_UP_DOB_CHANGED,
        payload: date
    };
};

export const signUpUser = ({ email, password, username, dob, emailOptIn }) => {
    return (dispatch) => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(snapshot => {
                // Add to database
                console.log(snapshot)
                firebase.database().ref(`/users`).child(`/${snapshot.user.uid}`).set({
                    email,
                    username,
                    dob: `${dob}`,
                    emailOptIn,
                    minAge: `18`,
                    maxAge: `50`,
                    distanceAway: `10`,
                    aboutMe: '',
                    verified: false
                })
                .then(user => {
                    console.log(user);
                    // Then dispatch
                    dispatch({
                        type: SIGN_UP_USER_SUCCESS,
                        payload: user
                    });
                    // Segue
                    //Actions.verifyWithSocialMedia()
                })
                .catch((databaseError) => {
                    console.log(databaseError.message);
                    // Dispatch
                    dispatch({
                        type: SIGN_UP_USER_FAIL,
                        payload: databaseError.message
                    });
                });
            })
            .catch(function(error) {
                // Handle Errors here
                var errorMessage = error.message;
                console.log(errorMessage);

                // Dispatch
                dispatch({
                    type: SIGN_UP_USER_FAIL,
                    payload: errorMessage
                });
            });
    }
};

export const firstPhotoChanged = (text) => {
    return {
        type: FIRST_PHOTO_CHANGED,
        payload: text
    }
}

// LOG IN
export const emailChanged = text => {
    return {
        type: EMAIL_CHANGED,
        payload: text
    };
};

export const passwordChanged = text => {
    return {
        type: PASSWORD_CHANGED,
        payload: text
    };
};

export const loginUser = ({ email, password }) => {
    return (dispatch) => {
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(user => {
                // Dispatch
                dispatch({
                    type: LOGIN_USER_SUCCESS,
                    payload: user
                });
                // Segue
                Actions.main();
            }).catch(() => {
                dispatch({
                    type: LOGIN_USER_FAIL
                });
            });
    };
};

// MAIN FLOW

export const fetchUsername = (user) => {
    return (dispatch) => {
        // Logic - read from firebase
        firebase.database().ref(`users/${user.uid}`).on('value', function(snapshot) {
            // Dispatch
            dispatch({
                type: FETCH_USERNAME,
                payload: snapshot.val().username
            });
        });
    };
}

export const fetchDOB = (user) => {
    return (dispatch) => {
        // Logic - read from firebase
        firebase.database().ref(`users/${user.uid}`).on('value', function(snapshot) {
            // Dispatch
            dispatch({
                type: FETCH_DOB,
                payload: snapshot.val().dob
            });
        });
    };
}

export const fetchUserData = (user) => {
    return (dispatch) => {
        // Logic - read from firebase (min age)
        firebase.database().ref(`users/${user.uid}`).on('value', function(snapshot) {
            // Dispatch
            dispatch({
                type: FETCH_USER_DATA,
                payload: snapshot.val().minAge
            });
        });
    };
};

export const fetchMaxAge = (user) => {
    return (dispatch) => {
        // Logic - read from firebase (max age)
        firebase.database().ref(`users/${user.uid}`).on('value', function(snapshot) {
            // Dispatch
            dispatch({
                type: FETCH_MAX_AGE,
                payload: snapshot.val().maxAge
            });
        });
    };
};

export const fetchDistanceAway = (user) => {
    return (dispatch) => {
        // Logic - read from firebase (max age)
        firebase.database().ref(`users/${user.uid}`).on('value', function(snapshot) {
            // Dispatch
            dispatch({
                type: FETCH_DISTANCE_AWAY,
                payload: snapshot.val().distanceAway
            });
        });
    };
};

export const minAgeChanged = (text) => {
    return {
        type: MIN_AGE_CHANGED,
        payload: text
    }
}

export const maxAgeChanged = (text) => {
    return {
        type: MAX_AGE_CHANGED,
        payload: text
    }
}

export const distanceAwayChanged = (text) => {
    return {
        type: DISTANCE_AWAY_CHANGED,
        payload: text
    }
}

export const fetchAboutMe = (user) => {
    return (dispatch) => {
        // Logic - read from firebase (about me)
        firebase.database().ref(`users/${user.uid}`).on('value', function(snapshot) {
            // Dispatch
            dispatch({
                type: FETCH_ABOUT_ME,
                payload: snapshot.val().aboutMe
            });
        });
    };
};

export const aboutMeChanged = (text) => {
    return {
        type: ABOUT_ME_CHANGED,
        payload: text
    }
}

export const fetchLocation = (user) => {
    return (dispatch) => {
        // Logic - read from firebase (location)
        firebase.database().ref(`users/${user.uid}`).on('value', function(snapshot) {
            // Dispatch
            dispatch({
                type: FETCH_LOCATION,
                payload: snapshot.val().location
            });
        });
    };
};

export const locationChanged = (text) => {
    return {
        type: LOCATION_CHANGED,
        payload: text
    }
}

export const fetchVerified = (user) => {
    return (dispatch) => {
        // Logic - read from firebase (verified)
        firebase.database().ref(`users/${user.uid}`).on('value', function(snapshot) {
            // Dispatch
            dispatch({
                type: FETCH_VERIFIED,
                payload: snapshot.val().verified
            });
        });
    };
};