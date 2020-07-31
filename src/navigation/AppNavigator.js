import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { routesProxy, routesAuth, routesFeed } from '@constants';

import Proxy from '@screens/Auth/Proxy';
import AuthStack from './Auth';
import FeedStack from './Feed';

export default createAppContainer(
    createSwitchNavigator({
        [routesProxy.PROXY]: Proxy,
        [routesAuth.AUTH]: AuthStack,
        [routesFeed.FEED]: FeedStack,
    }, {
        initialRouteName: routesProxy.PROXY
    })
)

