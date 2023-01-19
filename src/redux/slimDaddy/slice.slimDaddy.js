import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './initialState.slimDaddy';

export const darkTheme = createSlice({
  name: 'darkThemeSlice',
  initialState,
  reducers: {
    changeTheme: (state, actions) => {
      state.darkTheme = !state.darkTheme;
    },
  },
});

export const darkThemeReduser = darkTheme.reducer;
export const { changeTheme } = darkTheme.actions;
