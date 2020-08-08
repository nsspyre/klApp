import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import { routesProducts as routes } from '@constants';
import Products from '@screens/Orders/Products';
import Order from '@screens/Orders/Order';

const { Navigator, Screen } = createStackNavigator();

const ProductRoutes = {
    [routes.PRODUCTS]: Products,
    [routes.ORDER]: Order,
}

const ProductsStack = () => (
    <Navigator initialRouteName={routes.PRODUCTS} headerMode="none">
        {Object.entries({
            ...ProductRoutes,
        }).map(([name, component]) =>
            <Screen name={name} key={name} component={component} />
        )}
    </Navigator>
);

export default ProductsStack;
