import { call, put, takeLatest } from 'redux-saga/effects';
import { PayloadAction } from '@reduxjs/toolkit';
import { AxiosResponse } from 'axios';

import AxiosClient from '../../../../axios-client/instance/instance';
import { IRequestBody } from '../../../../axios-client/types/axios-client-types';
import { login } from '../routines';
import { IToken } from '../types/login-form-types';
import { TOKEN } from '../../../../config/config';

function* loginWorker(action: PayloadAction<IRequestBody>) {
  const { success, failure, fulfill } = login;

  try {
    const response: AxiosResponse<IToken> = yield call(AxiosClient.login('/login', 'POST', action.payload));

    if (response.status === 200) {
      yield localStorage.setItem('token', TOKEN);
      yield put(success(TOKEN));
    } else {
      throw new Error(
        `Response ended with status code: ${response.status}. Reason: ${response.statusText}`
      );
    }
  } catch (error) {
    yield put(failure());
  } finally {
    yield put(fulfill());
  }
}

export function* loginWatcher() {
  yield takeLatest(login.TRIGGER, loginWorker);
}
