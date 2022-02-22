import { 
  call, 
  put, 
  takeLatest 
} from 'redux-saga/effects';

import { PayloadAction } from '@reduxjs/toolkit';
import { login } from '../routines';
import { FirebaseClient } from '../../../../firestore/client/firebase-client';
import { UserCredential } from 'firebase/auth';
import { ICredentials } from '../types/login-form-types';

function* loginWorker(action: PayloadAction<ICredentials>) {
  const { 
    success, 
    failure, 
    fulfill,
  } = login;

  try {
    const { 
      email, 
      password,
    } = action.payload;

    const response: UserCredential = yield call(FirebaseClient.signIn, email, password);

    yield localStorage.setItem('token', JSON.stringify(response.user.refreshToken));
    yield put(success());
  } catch (error) {
    yield put(failure());
  } finally {
    yield put(fulfill());
  }
}

export function* loginWatcher() {
  yield takeLatest(login.TRIGGER, loginWorker);
}
