import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserState, User } from "./types";

const initialState: UserState = {
  name: "",
  isLogged: false,
  token: "",
  id: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginUser: (initialState, action: PayloadAction<User>) => ({
      ...action.payload,
      isLogged: true,
    }),
  },
});

export const userReducer = userSlice.reducer;

export const { loginUser: loginUserActionCreator } = userSlice.actions;
