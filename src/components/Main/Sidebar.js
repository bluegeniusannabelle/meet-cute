import React, { Component } from 'react';
import { View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import SidebarItem from '../common/SidebarItem';

class Sidebar extends Component {
    render() {
        const { mainContainer } = styles;
        return (
            <View style={[mainContainer, { marginTop: 100 }]}>
                <SidebarItem
                    heading="Account"
                    image={require('../../images/account.png')}
                    onPress={() => Actions.account()}
                />
                <SidebarItem
                    heading="Messages"
                    image={require('../../images/messages.png')}
                    onPress={() => Actions.messagingMode()}
                />
                <SidebarItem
                    heading="Speed Dating"
                    image={require('../../images/speed-dating.png')}
                    onPress={() => Actions.speedDatingMode()}
                />
                <SidebarItem
                    heading="Settings"
                    image={require('../../images/settings.png')}
                    onPress={() => Actions.settings()}
                />
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
        height: 300,
        backgroundColor: '#E9E9EF'
    }
};

export default Sidebar;