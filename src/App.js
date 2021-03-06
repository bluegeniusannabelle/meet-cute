import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import Router from './Router';

class App extends Component {

    componentDidMount() {
        // Configure and initialise Firebase
        const firebaseConfig = {
            apiKey: "<api-key>",
            authDomain: "<app-name>.firebaseapp.com",
            databaseURL: "https://<app-name>.firebaseio.com",
            projectId: "<app-name>",
            storageBucket: "<app-name>.appspot.com",
            messagingSenderId: "xxxxxx",
            appId: "1:xxxxxx:web:xxxxxx"
        };
        console.log(firebaseConfig);
        firebase.initializeApp(firebaseConfig);
    }

    render() {
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

        firebase.auth().onAuthStateChanged(function(user, err) {
            console.log(user);
            if (user) {
                console.log(user);
                Actions.signUpVerify();
            } else {
                console.log(err);
            }
        });

        console.log(firebase.app())

        return (
            <Provider store={store}>
                <Router />
            </Provider>
        )
    }
}

export default App;