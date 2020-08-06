import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { routesProxy, routesAuth, routesHome } from '@constants';

import Proxy from '@screens/Auth/Proxy';
import AuthStack from './Auth';
import Home from './Home';

export default createAppContainer(
    createSwitchNavigator({
        [routesProxy.PROXY]: Proxy,
        [routesAuth.AUTH]: AuthStack,
        [routesHome.HOME]: Home,
    }, {
        initialRouteName: routesProxy.PROXY
    })
)

