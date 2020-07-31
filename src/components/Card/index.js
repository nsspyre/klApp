import React from 'react';
import { Card as CardComponent } from '@ui-kitten/components';
import { Text } from 'react-native';

import styles from './styles';

const Card = (props) => {
    const { children, customStyle = {} } = props;

    return (
        <CardComponent style={[styles.container, customStyle]}>
            {children}
        </CardComponent>
    )
}

export default Card;
