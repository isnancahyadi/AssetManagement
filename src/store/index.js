import createSensitiveStorage from 'redux-persist-sensitive-storage';
import config from '../../config';
import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {userSlice} from './reducers';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
  persistReducer,
  persistStore,
} from 'redux-persist';

const storage = createSensitiveStorage({
  keychainService: config.REACT_APP_KEYCHAIN_SERVICE,
  sharedPreference: 'AssetManagement',
});

const persistConfig = {
  key: 'root',
  storage,
};

const rootReducer = combineReducers({
  user: userSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
