import { all } from 'redux-saga/effects';

import { loginWatcher } from '../features/login-form/sagas';
import { registrationWatcher } from '../features/registration-form/sagas';
import { logoutWatcher } from '../features/user-page/sagas';

export function* rootSaga() {
  yield all([
    loginWatcher(), 
    logoutWatcher(), 
    registrationWatcher()
  ]);
}
