import { call, put, takeLatest } from 'redux-saga/effects';

import { logout } from '../../user-page/routines';
import AxiosClient from '../../../../axios-client/instance/instance';

function* logoutWorker(): Generator {
  const { success, failure, fulfill } = logout;

  try {
    yield call(AxiosClient.logout());
    yield put(success());
  } catch (error) {
    console.error(error);
    yield put(failure());
  } finally {
    yield put(fulfill());
  }
}

export function* logoutWatcher() {
  yield takeLatest(logout.TRIGGER, logoutWorker);
}