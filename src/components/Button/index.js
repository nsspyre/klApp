import React from 'react';
import { Button, Text } from '@ui-kitten/components';

export default ({
    text,
    onPress,
    status = 'primary',
    appearance = 'filled',
    customStyle = {},
    textStyle = {},
    children,
}) => {

    return (
        <Button
            appearance={appearance}
            status={status}
            onPress={onPress}
            style={customStyle}
        >
            {evaProps => (
                <>
                    {children ? children : (
                        <Text {...evaProps} style={[evaProps.style, textStyle]}>{text}</Text>
                    )}
                </>
            )}
        </Button>
    )
}
