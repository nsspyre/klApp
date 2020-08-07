import React from 'react';
import { StyleSheet, Platform } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomNavigation, BottomNavigationTab, Layout, Text, Icon as Icon } from '@ui-kitten/components';

import { colors, icons } from '@constants';
import FeedStack from './Feed';
import ProductsStack from './Products';

const { Navigator, Screen } = createBottomTabNavigator();

const tabIcon = (name, props) => (<Icon {...props} name={name} />);

// TODO: this is a test, remove this to a separate file
const usertestScreen = () => (
    <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text category='h1'>User account</Text>
        <Text category='h4'>Comming soon</Text>
    </Layout>
);

const BottomTabBar = ({ navigation, state }) => (
    <BottomNavigation
        selectedIndex={state.index}
        indicatorStyle={styles.indicatorStyle}
        appearance='noIndicator'
        onSelect={index => navigation.navigate(state.routeNames[index])}
    >
        <BottomNavigationTab
            style={styles.tabNavigation}
            icon={(props) => tabIcon(icons.HOME_OUTLINE, props)}
        />
        <BottomNavigationTab
            style={styles.tabNavigation}
            icon={(props) => tabIcon(icons.PLUS_SQUARE_OUTLINE, props)}
        />
        <BottomNavigationTab
            style={styles.tabNavigation}
            icon={(props) => tabIcon(icons.PERSON_OUTLINE, props)}
        />
    </BottomNavigation>
);

const TabNavigator = () => (
    <Navigator initialRouteName="Feed" tabBar={props => <BottomTabBar {...props} />}>
        <Screen name='Feed' component={FeedStack} />
        <Screen name='NewOrder' component={ProductsStack} />
        <Screen name='Account' component={usertestScreen} />
    </Navigator>
);

const HomeStack = () => (
    <NavigationContainer>
        <TabNavigator />
    </NavigationContainer>
);

const styles = StyleSheet.create({
    indicatorStyle: {
        backgroundColor: colors.ORANGE,
    },
    tabNavigation: {
        paddingTop: 10,
        paddingBottom: Platform.OS === 'ios' ? 30 : 10,
    },
    tabIcons: {
        width: 25,
        height: 25,
    },
})

export default HomeStack;
