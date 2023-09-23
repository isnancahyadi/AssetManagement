/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import {PaperProvider, useTheme} from 'react-native-paper';
import {Provider as StoreProvider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

import App from './src/App';
import fonts from './src/values/Fonts';
import {persistor, store} from './src/store';
import axios from 'axios';
import EncryptedStorage from 'react-native-encrypted-storage';

export default function Main() {
  const theme = useTheme();

  axios.interceptors.request.use(async conf => {
    if (await EncryptedStorage.getItem('user_session')) {
      conf.headers['Authorization'] = `Bearer ${await EncryptedStorage.getItem(
        'user_session',
      )}`;
    }
    return conf;
  });

  return (
    <StoreProvider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <PaperProvider theme={{...theme, fonts}}>
          <App />
        </PaperProvider>
      </PersistGate>
    </StoreProvider>
  );
}

AppRegistry.registerComponent(appName, () => Main);
