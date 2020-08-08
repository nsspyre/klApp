import React from 'react';

import { StyleSheet, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import { colors, routesFeed } from '@constants';
import Feed from '@screens/Orders/Feed';
import FeedHeader from '@screens/Orders/Feed/Header';

const { Navigator, Screen } = createStackNavigator();

const FeedStack = () => (
    <Navigator>
        <Screen name={routesFeed.FEED} key={routesFeed.FEED} component={Feed} options={{
            headerTitle: () => <FeedHeader />,
            headerStyle: styles.headerStyle,
        }} />
    </Navigator>
);

export default FeedStack;

const styles = StyleSheet.create({
    headerStyle: {
        backgroundColor: colors.WHITE,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.26,
        shadowRadius: 4.65,
        elevation: 6,
    },
});
