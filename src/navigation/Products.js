import { createStackNavigator } from 'react-navigation-stack';

import { routesProducts as routes } from '@constants';

const productsStack = createStackNavigator({
    // [routes.PRODUCTS_HOME]: Products
}, {
    initialRouteName: routes.PRODUCTS_HOME,
    defaultNavigationOptions: {
        header: null,
    }
})

export default productsStack;
