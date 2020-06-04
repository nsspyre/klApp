import React, { Component } from 'react';
import { ActivityIndicator, View, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import { NavigationService } from '@services';
import { routesFeed, routesAuth } from '@constants';

class Proxy extends Component {
    componentDidMount() {
        this.init();
    };

    init = async () => {
        const token = await AsyncStorage.getItem('token');

        if (token) {
            NavigationService.navigate(routesFeed.FEED);
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