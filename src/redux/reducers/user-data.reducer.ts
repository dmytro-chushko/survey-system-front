import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "redux/store";
import { IUserData } from "types/login.types";

const initialState: IUserData = {
  token: null,
  role: null,
};

export const userData = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserData(state, action: PayloadAction<IUserData>) {
      state.token = action.payload.token;
      state.role = action.payload.role;
    },
    unsetUserData: (state) => {
      state.token = null;
      state.role = null;
    },
  },
});

export const { setUserData, unsetUserData } = userData.actions;
export const getToken = (state: RootState) => state.user.token;
export const getRole = (state: RootState) => state.user.role;
