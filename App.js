import React from 'react';
import { Provider } from 'react-redux'

import configureStore from '@state/store';
import { NavigationService } from '@services';
import AppContainer from './src/navigation/AppNavigator';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components'
import { EvaIconsPack } from "@ui-kitten/eva-icons";
import { mapping, light } from "@eva-design/eva";

const store = configureStore();

export default class App extends React.Component {
  componentDidMount() {
    NavigationService.setNavigator(this.navigator);
  }

  render() {
    return (
      <>
        <IconRegistry icons={EvaIconsPack} />
        <ApplicationProvider mapping={mapping} theme={light}>
          <Provider store={store}>
            <AppContainer ref={nav => { this.navigator = nav }} />
          </Provider>
        </ApplicationProvider>
      </>
    )
  }
}
