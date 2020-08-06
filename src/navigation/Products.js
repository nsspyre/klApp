import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import Products from '@screens/Orders/Products';

const { Navigator, Screen } = createStackNavigator();

const ProductsStack = () => (
    <Navigator headerMode="none">
        <Screen name="Products" component={Products} />
    </Navigator>
);

export default ProductsStack;
