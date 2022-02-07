import { createRoutine } from 'redux-saga-routines';

export const logout = createRoutine('auth/logout');
export const getUser = createRoutine('auth/get-user');
