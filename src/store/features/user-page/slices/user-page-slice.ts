import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { getUser } from '../routines/user-page-routines';
import { State } from '../types/user-page-types';

const initialState: State = {
  data: {}
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUser.SUCCESS, (state, action: PayloadAction<State>) => {
      state.data = action.payload.data;
    });
  },
});

export default userSlice.reducer;
