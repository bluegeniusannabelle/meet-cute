import React, { Component } from 'react';
import { View } from 'react-native';

class MessagingMode extends Component {
    render() {
        const { mainContainer } = styles;
        return (
            <View style={mainContainer}>

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
    }
}

export default MessagingMode;