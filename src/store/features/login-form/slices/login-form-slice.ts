import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { logout } from "../../user-page/routines";

import { login } from "../routines";
import { State } from '../types/login-form-types';

const initialState: State = {
  token: '',
  isAuth: false,
};

const loginSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(login.SUCCESS, (state, action: PayloadAction<string>) => {
        state.token = action.payload;
        state.isAuth = true;
      })
      .addCase(logout.SUCCESS, (state) => {
        state.token = '';
        state.isAuth = false;
      })
  }
});

export default loginSlice.reducer;
