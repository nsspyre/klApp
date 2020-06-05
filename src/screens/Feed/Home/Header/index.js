import React, { PureComponent } from 'react';
import { View, Text } from 'react-native';

import { Icon } from '@components';
import { icons } from '@constants';
import styles from './styles';

class FeedHeader extends PureComponent {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.addressDirection}>Dirección:</Text>
                <View style={styles.address}>
                    <Text style={styles.addressTitle}>Casa</Text>
                    <Icon name={icons.ARROW_CIRCLE_DOWN} />
                </View>
            </View>
        );
    }
}

export default FeedHeader;
