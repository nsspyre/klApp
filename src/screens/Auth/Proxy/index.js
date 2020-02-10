import React, { useEffect } from 'react';
import { ActivityIndicator, AsyncStorage, View, StyleSheet } from 'react-native';

import { NavigationService } from '@services';
import { routesProducts, routesAuth } from '@constants';

export default () => {
    useEffect(() => {
        AsyncStorage.getItem('token')
            .then(token => NavigationService.navigate(token ? routesProducts.PRODUCTS : routesAuth.AUTH));
    }, [])

    return (
        <View style={styles.container}>
            <ActivityIndicator
                size="large"
                color="#F4A018"
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})