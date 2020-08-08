import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import { routesAuth as routes } from '@constants';
import Login from '@screens/Auth/Login';
import Register from '@screens/Auth/Register';

const { Navigator, Screen } = createStackNavigator();

const AuthRoutes = {
    [routes.AUTH_LOGIN]: Login,
    [routes.AUTH_REGISTER]: Register,
}

const AuthStack = () => (
    <Navigator initialRouteName={routes.AUTH_LOGIN} headerMode="none">
        {Object.entries({
            ...AuthRoutes,
        }).map(([name, component]) =>
            <Screen name={name} key={name} component={component} />
        )}
    </Navigator>
);

export default AuthStack
