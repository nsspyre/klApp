import React from 'react';
import { Card as CardComponent } from '@ui-kitten/components';
import { Text } from 'react-native';

import styles from './styles';

const Card = (props) => {
    const { children } = props;

    return (
        <CardComponent style={styles.container}>
            {children}
        </CardComponent>
    )
}

export default Card;
