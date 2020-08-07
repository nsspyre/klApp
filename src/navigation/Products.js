import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import Products from '@screens/Orders/Products';
import Order from '@screens/Orders/Order';

const { Navigator, Screen } = createStackNavigator();

const ProductsStack = () => (
    <Navigator headerMode="none">
        <Screen name="Products" component={Products} />
        <Screen name="Order" component={Order} />
    </Navigator>
);

export default ProductsStack;
