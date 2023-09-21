import React from 'react';
import {Provider} from 'react-native-paper';

import Router from './routes';

const App = () => {
  return (
    <Provider>
      <Router />
    </Provider>
  );
};

export default App;
