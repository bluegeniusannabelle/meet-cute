import {
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
} from '../actions/types';

const INITIAL_STATE = {
    username: '',
    dob: '',
    minAge: '',
    maxAge: '',
    distanceAway: '',
    aboutMe: '',
    location: '',
    verified: false
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FETCH_USERNAME:
            return { ...state, username: action.payload };
        case FETCH_DOB:
            return { ...state, dob: action.payload };
        case FETCH_USER_DATA:
            return { ...state, minAge: action.payload };
        case FETCH_MAX_AGE:
            return { ...state, maxAge: action.payload };
        case FETCH_DISTANCE_AWAY:
            return { ...state, distanceAway: action.payload };
        case MIN_AGE_CHANGED:
                return { ...state, minAge: action.payload };
        case MAX_AGE_CHANGED:
            return { ...state, maxAge: action.payload };
        case DISTANCE_AWAY_CHANGED:
            return { ...state, distanceAway: action.payload };
        case FETCH_ABOUT_ME:
            return { ...state, aboutMe: action.payload };
        case ABOUT_ME_CHANGED:
            return { ...state, aboutMe: action.payload };
        case FETCH_LOCATION:
            return { ...state, location: action.payload };
        case LOCATION_CHANGED:
                return { ...state, location: action.payload };
        case FETCH_VERIFIED:
            return { ...state, verified: action.payload };
        default:
            return state;
    }
};