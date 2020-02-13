/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React from 'react';
import {Provider} from 'mobx-react';
import AppNavigator from './src/navigation';
import Store from './src/store';

const store = new Store();

const stores = {
  AppStore: store.AppStore,
  AuthStore: store.AuthStore,
  TaskStore: store.TaskStore
};

const App: React.FC = () => {
  console.disableYellowBox = true;
  return (
    <Provider {...stores}>
      <AppNavigator />
    </Provider>
  );
};
export default App;
