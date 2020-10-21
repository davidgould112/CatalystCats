import { StatusBar } from 'expo-status-bar';
import React from 'react';
import AppContainerConnected from './containers/AppContainer'
import { Provider } from 'react-redux';
import { persistor, store } from './state/store';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { Text } from 'react-native';

const App = () => {

    return (
      <Provider store={store}>
        <PersistGate loading={<Text>Loading...</Text>} persistor={persistor}>
          <AppContainerConnected/>
        </PersistGate>
        <StatusBar />
      </Provider>
    );
}

export default App;