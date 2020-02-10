import React, { Component } from 'react';
import { Input as TextInput } from '@ui-kitten/components';

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
        )
    }
}

export default Input;
