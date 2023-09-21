/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import {PaperProvider, useTheme} from 'react-native-paper';

import App from './src/App';
import fonts from './src/values/Fonts';

export default function Main() {
  const theme = useTheme();

  return (
    <PaperProvider theme={{...theme, fonts}}>
      <App />
    </PaperProvider>
  );
}

AppRegistry.registerComponent(appName, () => Main);
