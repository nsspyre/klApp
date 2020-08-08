import React, { PureComponent} from 'react';

import { View } from 'react-native';
import { Text } from '@ui-kitten/components';

import styles from './styles';

class Order extends PureComponent {
    render () {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text category='h1'>This is orders</Text>
            </View>
        )
    }
}

export default Order;
