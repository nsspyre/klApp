import React from 'react';
import { Provider } from 'react-redux'

import configureStore from '@state/store';
import { NavigationService } from '@services';
import AppContainer from './src/navigation/AppNavigator';

const store = configureStore();

export default class App extends React.Component {
  componentDidMount() {
    NavigationService.setNavigator(this.navigator);
  }

  render() {
    return (
      <Provider store={store}>
        <AppContainer ref={nav => { this.navigator = nav}}/>
      </Provider>
    )
  }
}
