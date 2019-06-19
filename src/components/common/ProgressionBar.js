import React from 'react';
import { View } from 'react-native';

const ProgressionBar = ({ width, marginTop }) => {

    const { progressionBarStyle, inner } = styles;

    return (
        <View style={[progressionBarStyle, { marginTop }]}>
            <View style={[inner, { width }]} />
        </View>
    );
};

const styles = {
    progressionBarStyle: {
        width: '100%',
        backgroundColor: '#f4f4f4'
    },
    inner: {
        height: 15,
        backgroundColor: '#5F12CD'
    }
};

export default ProgressionBar;