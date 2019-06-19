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
    LOGIN_USER_FAIL
} from '../actions/types';

const INITIAL_STATE = {
    email: '',
    password: '',
    user: null,
    error: '',
    username: '',
    emailOptIn: false,
    signUpMethod: 'email',
    dob: new Date,
    firstPhoto: '../images/white.png'
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SIGN_UP_METHOD:
            return { ...state, signUpMethod: action.payload }
        case SIGN_UP_USERNAME_CHANGED:
            return { ...state, username: action.payload };
        case SIGN_UP_EMAIL_CHANGED:
            return { ...state, email: action.payload };
        case SIGN_UP_EMAIL_OPT_IN:
            return { ...state, emailOptIn: action.payload };
        case SIGN_UP_PASSWORD_CHANGED:
            return { ...state, password: action.payload };
        case SIGN_UP_DOB_CHANGED:
            return {  ...state, dob: action.payload };
        case SIGN_UP_USER_SUCCESS:
            return { ...state, user: action.payload, error: '' };
        case SIGN_UP_USER_FAIL:
            return { ...state, error: action.payload };
        case FIRST_PHOTO_CHANGED:
            return { ...state, firstPhoto: action.payload };
        case EMAIL_CHANGED:
            return { ...state, email: action.payload };
        case PASSWORD_CHANGED:
            return { ...state, password: action.payload };
        case LOGIN_USER_SUCCESS:
            return { ...state, user: action.payload, error: '' };
        case LOGIN_USER_FAIL:
            return { ...state, error: 'Log in authentication has failed. Make sure you are using the correct email and password.' };
        default:
            return state;
    }
};