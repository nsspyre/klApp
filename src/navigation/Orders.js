import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomNavigation, BottomNavigationTab, Layout, Text } from '@ui-kitten/components';

import Login from '@screens/Auth/Login';
// import { routesFeed as routes, colors } from '@constants';
import Feed from '@screens/Orders/Feed';

const { Navigator, Screen } = createBottomTabNavigator();

const testScreen = () => (
    <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text category='h1'>test</Text>
    </Layout>
);

const BottomTabBar = ({ navigation, state }) => (
    <BottomNavigation
        selectedIndex={state.index}
        indicatorStyle={{ backgroundColor: 'red' }}
        onSelect={index => navigation.navigate(state.routeNames[index])}>
        <BottomNavigationTab title='Feed' />
        <BottomNavigationTab title='Test' />
    </BottomNavigation>
);

const TabNavigator = () => (
    <Navigator tabBar={props => {
        console.log('props', props)
        return <BottomTabBar {...props} />
    }}>
        <Screen name='Feed' component={Feed} />
        <Screen name='Test' component={testScreen} />
    </Navigator>
);

const OrderStack = () => (
    <NavigationContainer>
        <TabNavigator />
    </NavigationContainer>
);

const lolStack = createStackNavigator({
    ['AUTH_1']: OrderStack,
}, {
    initialRouteName: 'AUTH_1',
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: 'white',
            shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 3,
            },
            shadowOpacity: 0.26,
            shadowRadius: 4.65,
            elevation: 6,
        },
    }
})

export default lolStack;
