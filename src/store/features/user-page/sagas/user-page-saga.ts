import { AxiosResponse } from 'axios';
import { 
  call, 
  put, 
  takeLatest,
} from 'redux-saga/effects';

import { logout } from '../../user-page/routines';
import { getUser } from '../routines/user-page-routines';
import AxiosClient from '../../../../axios-client/instance/instance';
import { FirebaseClient } from '../../../../firestore/client/firebase-client';

function* logoutWorker(): Generator {
  const { 
    success, 
    failure, 
    fulfill,
  } = logout;

  try {
    yield call(FirebaseClient.signOut);
    yield localStorage.removeItem('token');
    yield put(success());
  } catch (error) {
    console.error(error);
    yield put(failure());
  } finally {
    yield put(fulfill());
  }
}

function* getUserWorker() {
  const { 
    success, 
    failure, 
    fulfill,
  } = getUser;

  try {
    const response: AxiosResponse = yield call(AxiosClient.getUser('/users/1', 'GET'));
    
    if (response.status === 200) {
      yield put(success(response.data));
    } else {
      throw new Error(
        `Response failed with status code: ${response.status}. Reason: ${response.statusText}`
      );
    }
  } catch (error) {
    console.error(error);
    yield put(failure());
  } finally {
    yield put(fulfill());
  }
}

export function* logoutWatcher() {
  yield takeLatest(logout.TRIGGER, logoutWorker);
  yield takeLatest(getUser.TRIGGER, getUserWorker);
}