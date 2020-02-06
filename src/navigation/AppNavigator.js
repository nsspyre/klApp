import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { routesProxy, routesAuth, routesProducts } from '@constants';

import Proxy from '@screens/login/Proxy';
import AuthStack from './Auth';
import ProductsStack from './Products';

export default createAppContainer(
    createSwitchNavigator({
        [routesProxy.PROXY]: Proxy,
        [routesAuth.AUTH]: AuthStack,
        [routesProducts.PRODUCTS]: ProductsStack,
    }, {
        initialRouteName: routesProxy.PROXY
    })
)

