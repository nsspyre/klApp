import React from 'react';
import { Provider } from 'react-redux'

import { ApplicationProvider, IconRegistry } from '@ui-kitten/components'
import { EvaIconsPack } from "@ui-kitten/eva-icons";
import { mapping, light } from "@eva-design/eva";
import { PersistGate } from 'redux-persist/lib/integration/react';

import configureStore from '@state/store';
import { NavigationService } from '@services';
import AppContainer from './src/navigation/AppNavigator';

const { store, persistor } = configureStore();

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ApplicationProvider mapping={mapping} theme={light}>
            <AppContainer ref={nav => NavigationService.setTopLevelNavigator(nav)} />
            <IconRegistry icons={EvaIconsPack} />
          </ApplicationProvider>
        </PersistGate>
      </Provider>
    )
  }
}
