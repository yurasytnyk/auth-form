import { combineReducers } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist'

import { loginReducer } from '../features/login-form/slices';

const persistConfig = {
  key: 'root',
  storage
};

const rootReducer = combineReducers({
  auth: loginReducer,
});

export const persistedReducer = persistReducer(persistConfig, rootReducer);
