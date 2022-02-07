import { combineReducers } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist'

import { loginReducer } from '../features/login-form/slices';
import { userReducer } from '../features/user-page/slices';

const persistConfig = {
  key: 'root',
  storage
};

const rootReducer = combineReducers({
  auth: loginReducer,
  user: userReducer,
});

export const persistedReducer = persistReducer(persistConfig, rootReducer);
