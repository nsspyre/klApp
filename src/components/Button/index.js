import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export default ({ style, text, onPress }) => {
    let buttonStyle =
        (
            style ?
            StyleSheet.flatten([styles.button, style]) :
            styles.button
        )

    return (
        <TouchableOpacity
            style={buttonStyle}
            onPress={onPress}
            >
            <Text style={styles.text}>{text}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#F6A11b',
        borderWidth: 3,
        borderColor: '#F6A11b',
        paddingHorizontal: 20,
        borderRadius: 30,
        paddingVertical: 13,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
    },
    text: {
        fontSize: 20,
        color: 'white',
        textAlign: 'center'
    }
});
