import React from 'react';

import * as authSelectors from '@state/selectors/auth.selectors';

import { createStackNavigator } from '@react-navigation/stack';
import { connect } from 'react-redux';

import { routesAuth, routesHome } from '@constants';
import AuthStack from './Auth';
import Home from './Home';

const { Navigator, Screen } = createStackNavigator();

const AuthRoutes = {
    [routesAuth.AUTH]: AuthStack,
}

const AppRoutes = {
    [routesHome.HOME]: Home,
}

const App = (props) => {
    const { isloggedIn } = props;

    return (
        <Navigator headerMode="none">
            {Object.entries({
                ...(isloggedIn ? AppRoutes : AuthRoutes),
            }).map(([name, component]) =>
                <Screen name={name} key={name} component={component} />
            )}
        </Navigator>
    )
}

const mapStateToProps = (state) => ({
    isPending: authSelectors.isPending(state),
    isloggedIn: authSelectors.isLoggedIn(state),
});

export default connect(mapStateToProps, null)(App);
