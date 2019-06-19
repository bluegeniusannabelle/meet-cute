import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';

import Start from './components/Auth/Start';

import SignUpName from './components/Auth/SignUpName';
import SignUpEmail from './components/Auth/SignUpEmail';
import SignUpPassword from './components/Auth/SignUpPassword';
import SignUpDOB from './components/Auth/SignUpDOB';
import SignUpVerify from './components/Auth/SignUpVerify';
import SignUpFirstPhoto from './components/Auth/SignUpFirstPhoto';
import SignUpCamera from './components/Auth/SignUpCamera';
import SignUpViewFirstPhoto from './components/Auth/SignUpViewFirstPhoto';
import SignUpSecondPhoto from './components/Auth/SignUpSecondPhoto';
import SignUpAbout from './components/Auth/SignUpAbout';

import EmailLogin from './components/Auth/EmailLogin';

import Welcome from './components/Main/Welcome';
import Account from './components/Main/Account';
import MessagingMode from './components/Main/MessagingMode';
import SpeedDatingMode from './components/Main/SpeedDatingMode';
import Settings from './components/Main/Settings';
import About from './components/Main/About';

const RouterComponent = () => {
    return (
        <Router>
            <Scene key="root" hideNavBar>

                {/* Auth flow */}
                <Scene key="auth">
                    <Scene
                        initial
                        navTransparent
                        key="start"
                        component={Start}
                    />
                    <Scene
                        key="signUpName"
                        component={SignUpName}
                        navBarButtonColor="#5F12CD"
                        navigationBarTitleImage={require('./images/logo.jpg')}
                        navigationBarTitleImageStyle={{ height: '75%', resizeMode: 'contain', alignSelf: 'center', flex: 1 }}
                        navigationBarStyle={{ borderBottomColor: 'transparent' }} 
                    />
                    <Scene
                        key="signUpEmail"
                        component={SignUpEmail}
                        navBarButtonColor="#5F12CD"
                        navigationBarTitleImage={require('./images/logo.jpg')}
                        navigationBarTitleImageStyle={{ height: '75%', resizeMode: 'contain', alignSelf: 'center', flex: 1 }}
                        navigationBarStyle={{ borderBottomColor: 'transparent' }} 
                    />
                    <Scene
                        key="signUpPassword"
                        component={SignUpPassword}
                        navBarButtonColor="#5F12CD"
                        navigationBarTitleImage={require('./images/logo.jpg')}
                        navigationBarTitleImageStyle={{ height: '75%', resizeMode: 'contain', alignSelf: 'center', flex: 1 }}
                        navigationBarStyle={{ borderBottomColor: 'transparent' }} 
                    />
                    <Scene
                        key="signUpDOB"
                        component={SignUpDOB}
                        navBarButtonColor="#5F12CD"
                        navigationBarTitleImage={require('./images/logo.jpg')}
                        navigationBarTitleImageStyle={{ height: '75%', resizeMode: 'contain', alignSelf: 'center', flex: 1 }}
                        navigationBarStyle={{ borderBottomColor: 'transparent' }} 
                    />
                    <Scene
                        key="signUpVerify"
                        component={SignUpVerify}
                        navBarButtonColor="#5F12CD"
                        navigationBarTitleImage={require('./images/logo.jpg')}
                        navigationBarTitleImageStyle={{ height: '75%', resizeMode: 'contain', alignSelf: 'center', flex: 1 }}
                        navigationBarStyle={{ borderBottomColor: 'transparent' }}
                        rightTitle="Skip"
                        onRight={() => Actions.signUpFirstPhoto()}
                    />
                    <Scene
                        key="signUpFirstPhoto"
                        component={SignUpFirstPhoto}
                        navBarButtonColor="#5F12CD"
                        navigationBarTitleImage={require('./images/logo.jpg')}
                        navigationBarTitleImageStyle={{ height: '75%', resizeMode: 'contain', alignSelf: 'center', flex: 1 }}
                        navigationBarStyle={{ borderBottomColor: 'transparent' }}
                    />
                    <Scene
                        key="signUpCamera"
                        component={SignUpCamera}
                        navBarButtonColor="#5F12CD"
                        navigationBarTitleImage={require('./images/logo.jpg')}
                        navigationBarTitleImageStyle={{ height: '75%', resizeMode: 'contain', alignSelf: 'center', flex: 1 }}
                        navigationBarStyle={{ borderBottomColor: 'transparent' }}
                    />
                    <Scene
                        key="signUpViewFirstPhoto"
                        component={SignUpViewFirstPhoto}
                        navBarButtonColor="#5F12CD"
                        navigationBarTitleImage={require('./images/logo.jpg')}
                        navigationBarTitleImageStyle={{ height: '75%', resizeMode: 'contain', alignSelf: 'center', flex: 1 }}
                        navigationBarStyle={{ borderBottomColor: 'transparent' }}
                    />
                    <Scene
                        key="signUpSecondPhoto"
                        component={SignUpSecondPhoto}
                        navBarButtonColor="#5F12CD"
                        navigationBarTitleImage={require('./images/logo.jpg')}
                        navigationBarTitleImageStyle={{ height: '75%', resizeMode: 'contain', alignSelf: 'center', flex: 1 }}
                        navigationBarStyle={{ borderBottomColor: 'transparent' }}
                    />
                    <Scene
                        key="signUpAbout"
                        component={SignUpAbout}
                        navBarButtonColor="#5F12CD"
                        navigationBarTitleImage={require('./images/logo.jpg')}
                        navigationBarTitleImageStyle={{ height: '75%', resizeMode: 'contain', alignSelf: 'center', flex: 1 }}
                        navigationBarStyle={{ borderBottomColor: 'transparent' }}
                    />
                    <Scene
                        navTransparent
                        key="emailLogin"
                        component={EmailLogin}
                        navBarButtonColor="#5F12CD"
                        navigationBarTitleImage={require('./images/logo.jpg')}
                        navigationBarTitleImageStyle={{ height: '75%', resizeMode: 'contain', alignSelf: 'center', flex: 1 }}
                    />
                </Scene>
                {/* Main flow */}
                <Scene key="main">
                    <Scene
                        initial
                        key="welcome"
                        component={Welcome}
                        navBarButtonColor="#5F12CD"
                        navigationBarTitleImage={require('./images/logo.jpg')}
                        navigationBarTitleImageStyle={{ height: '75%', resizeMode: 'contain', alignSelf: 'center', flex: 1 }}
                        navigationBarStyle={{ borderBottomColor: 'transparent' }}
                    />
                    <Scene
                        key="account"
                        component={Account}
                        navBarButtonColor="#5F12CD"
                        navigationBarTitleImage={require('./images/logo.jpg')}
                        navigationBarTitleImageStyle={{ height: '75%', resizeMode: 'contain', alignSelf: 'center', flex: 1 }}
                        navigationBarStyle={{ borderBottomColor: 'transparent' }}
                    />
                    <Scene
                        key="messagingMode"
                        component={MessagingMode}
                        navBarButtonColor="#5F12CD"
                        navigationBarTitleImage={require('./images/logo.jpg')}
                        navigationBarTitleImageStyle={{ height: '75%', resizeMode: 'contain', alignSelf: 'center', flex: 1 }}
                        navigationBarStyle={{ borderBottomColor: 'transparent' }}
                    />
                    <Scene
                        key="speedDatingMode"
                        component={SpeedDatingMode}
                        navBarButtonColor="#5F12CD"
                        navigationBarTitleImage={require('./images/logo.jpg')}
                        navigationBarTitleImageStyle={{ height: '75%', resizeMode: 'contain', alignSelf: 'center', flex: 1 }}
                        navigationBarStyle={{ borderBottomColor: 'transparent' }}
                    />
                    <Scene
                        key="settings"
                        component={Settings}
                        navBarButtonColor="#5F12CD"
                        navigationBarTitleImage={require('./images/logo.jpg')}
                        navigationBarTitleImageStyle={{ height: '75%', resizeMode: 'contain', alignSelf: 'center', flex: 1 }}
                        navigationBarStyle={{ borderBottomColor: 'transparent' }}
                    />
                    <Scene
                        key="about"
                        component={About}
                        navBarButtonColor="#5F12CD"
                        navigationBarTitleImage={require('./images/logo.jpg')}
                        navigationBarTitleImageStyle={{ height: '75%', resizeMode: 'contain', alignSelf: 'center', flex: 1 }}
                        navigationBarStyle={{ borderBottomColor: 'transparent' }}
                    />
                </Scene>

            </Scene>
        </Router>
    );
};

export default RouterComponent;