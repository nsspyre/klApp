import React from 'react';
import { Button } from '@ui-kitten/components';

export default (props) => {
    const { text, onPress, status = 'warning', appearance = 'filled' } = props;

    return (
        <Button
            appearance={appearance}
            status={status}
            onPress={onPress}
            {...props}
        >
            {text}
        </Button>
    )
}
