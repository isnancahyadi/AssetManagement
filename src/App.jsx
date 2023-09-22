import React from 'react';
import {Provider} from 'react-native-paper';

import Router from './routes';
import {AuthProvider} from './context/AuthContext';

const App = () => {
  return (
    <Provider>
      <AuthProvider>
        <Router />
      </AuthProvider>
    </Provider>
  );
};

export default App;
