import { createSlice } from '@reduxjs/toolkit';
import { logout } from '../../user-page/routines';

import { login } from '../routines';
import { State } from '../types/login-form-types';

const initialState: State = {
  isAuth: false,
};

const loginSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(login.SUCCESS, (state) => {
        state.isAuth = true;
      })
      .addCase(logout.SUCCESS, (state) => {
        state.isAuth = false;
      });
  },
});

export default loginSlice.reducer;
