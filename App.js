import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Provider } from 'react-redux'

import AuthLoading from '@screens/login/AuthLoading';
import Products from '@screens/products/products'
import Login from '@screens/login/loginScreen';
import configureStore from '@state/store';
import { NavigationService } from '@services';

const store = configureStore();

const onBoardingNavigator = createStackNavigator({
  Login: Login,
  // Register: ''
}, {
  initialRouteName: 'Login',
  headerMode: 'none'
});

const AppNavigator = createStackNavigator({
  Products: Products
}, {
  initialRouteName: 'Products'
});

const BaseStack = createSwitchNavigator({
  AuthLoading,
  OnBoarding: onBoardingNavigator,
  Root: AppNavigator,
}, {
  initialRouteName: 'AuthLoading'
});

const Navigation = createAppContainer(BaseStack);

export default class App extends React.Component {
  componentDidMount() {
    NavigationService.setNavigator(this.navigator);
  }

  render() {
    return (
      <Provider store={store}>
        <Navigation ref={nav => { this.navigator = nav}}/>
      </Provider>
    )
  }
}
