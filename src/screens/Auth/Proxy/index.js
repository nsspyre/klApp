import React, { Component } from 'react';
import { ActivityIndicator, View, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import { NavigationService } from '@services';
import { routesAuth, routesHome } from '@constants';

class Proxy extends Component {
    componentDidMount() {
        this.init();
    };

    init = async () => {
        // AsyncStorage.removeItem('token');
        const token = await AsyncStorage.getItem('token');

        if (token) {
            NavigationService.navigate(routesHome.HOME);
        } else {
            NavigationService.navigate(routesAuth.AUTH);
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <ActivityIndicator
                    size="large"
                    color="#F4A018"
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default Proxy;