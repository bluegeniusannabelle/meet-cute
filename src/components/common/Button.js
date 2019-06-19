import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({ onPress, text, width, height, fontSize, marginTop, padding, backgroundColor, color, marginLeft }) => {
    const { buttonContainerStyle, buttonStyle } = styles;

    return (
        <TouchableOpacity onPress={onPress} style={[buttonContainerStyle, { height, marginTop, padding, width, backgroundColor, marginLeft }]}>
            <Text style={[buttonStyle, { fontSize: fontSize, color }]}>{text}</Text>
        </TouchableOpacity>
    );
};

const styles = {
    buttonContainerStyle: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 30,
        backgroundColor: 'white',
        borderRadius: 6,
        shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: 0
        },
        shadowOpacity: 0.2,
        shadowRadius: 12,
        elevation: 2
    },
    buttonStyle: {
        textAlign: 'center'
    }
};

export default Button;