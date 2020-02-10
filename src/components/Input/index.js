import React, { Component } from 'react';
import { Input as TextInput } from '@ui-kitten/components';
import { View } from 'react-native';

import styles from './styles';

class Input extends Component {
    render() {
        const {
            placeholder,
            value,
            onChangeText,
            onBlur,
            type,
            label,
            status = 'warning',
            error = false,
            caption } = this.props;

        return (
            <View style={styles.container}>
                <TextInput
                    label={label}
                    placeholder={placeholder}
                    value={value}
                    onChangeText={onChangeText}
                    onBlur={onBlur}
                    type={type}
                    status={!error ? status : 'danger'}
                    caption={caption}
                    {...this.props}
                />
            </View>
        )
    }
}

export default Input;
