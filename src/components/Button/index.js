import React from 'react';
import { Button } from '@ui-kitten/components';

export default ({ text, onPress, status }) => (
    <Button
        status={status || 'warning'}
        onPress={onPress}
    >
        {text}
    </Button>
)
