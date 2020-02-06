import React, { Component } from 'react';
import { Input as TextInput } from '@ui-kitten/components';

class Input extends Component {
    render() {
        const { placeholder, value, onChangeText, onBlur, type } = this.props;

        return (
            <TextInput
                placeholder={placeholder}
                value={value}
                onChangeText={onChangeText}
                onBlur={onBlur}
                type={type}
                status="warning"
            />
        )
    }
}

export default Input;
