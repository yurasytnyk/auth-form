import { combineReducers } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist'

const persistConfig = {
  key: 'root',
  storage
};

const rootReducer = combineReducers({});

export const persistedReducer = persistReducer(persistConfig, rootReducer);
