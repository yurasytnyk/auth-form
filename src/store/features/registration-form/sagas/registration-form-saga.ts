import { AxiosResponse } from 'axios';
import { call, put, takeLatest } from 'redux-saga/effects';

import { registration } from '../routines';
import AxiosClient from '../../../../axios-client/instance/instance';
import { TOKEN } from '../../../../config/config';
import { IRegistrationRes } from '../types/registration-form-types';

function* registrationWorker() {
  const { success, failure, fulfill } = registration;

  try {
    const response: AxiosResponse<IRegistrationRes> = yield call(AxiosClient.registration('/register', 'POST', {
      email: 'eve.holt@reqres.in',
      password: 'pistol',
    }));

    if (response.status === 200) {
      yield localStorage.setItem('token', JSON.stringify(TOKEN));
      yield put(success());
    } else {
      throw new Error(
        `Response ended with status code: ${response.status}. Reason: ${response.statusText}`
      );
    }
  } catch (error) {
    console.error(error);
    yield put(failure());
  } finally {
    yield put(fulfill());
  }
}

export function* registrationWatcher() {
  yield takeLatest(registration.TRIGGER, registrationWorker);
}
