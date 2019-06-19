import React from 'react';
import { TouchableOpacity, Image, Text } from 'react-native';

const SidebarItem = ({ heading, image, onPress, backgroundColor, height }) => {
    const { buttonStyle, imageStyle, textStyle } = styles;

    return (
        <TouchableOpacity style={[buttonStyle , { backgroundColor, height }]} onPress={onPress}>
            <Image source={image} style={imageStyle} />
            <Text style={textStyle}>{heading}</Text>
        </TouchableOpacity>
    );
};

const styles = {
    buttonStyle: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        flex: 1,
        marginBottom: 20,
        height: 40
    },
    imageStyle: {
        width: 40,
        height: 40
    },
    textStyle: {
        height: 40,
        marginTop: 8,
        marginLeft: 30,
        fontSize: 16
    }
};

export default SidebarItem;