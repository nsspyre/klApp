import React from 'react';
import { Provider } from 'react-redux'

import { StatusBar } from 'react-native';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components'
import { EvaIconsPack } from "@ui-kitten/eva-icons";
import { mapping, light } from "@eva-design/eva";
import { PersistGate } from 'redux-persist/lib/integration/react';
import moment from 'moment';
import 'moment/locale/es';

import configureStore from '@state/store';
import { NavigationService } from '@services';
import AppContainer from './src/navigation/AppNavigator';
import { default as theme } from './kyl-theme.json';

const { store, persistor } = configureStore();
moment.locale('es');

export default class App extends React.Component {
  render() {
    return (
      <ApplicationProvider mapping={mapping} theme={{ ...light, ...theme }}>
        <StatusBar barStyle='dark-content' />
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <AppContainer ref={nav => NavigationService.setTopLevelNavigator(nav)} />
            <IconRegistry icons={EvaIconsPack} />
          </PersistGate>
        </Provider>
      </ApplicationProvider>
    )
  }
}
