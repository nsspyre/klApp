import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';

import styles from './styles';

const Card = (props) => {
    const { children, customStyle = {}, image, onPress, overlay = false } = props;

    return (
        <TouchableOpacity style={[styles.container, customStyle]} onPress={onPress}>
            <Image source={image} style={styles.image} />
            {children && (
                <View style={styles.content}>
                    {overlay && <View style={styles.overlay}/>}
                    {children}
                </View>
            )}
        </TouchableOpacity>
    )
}

export default Card;
