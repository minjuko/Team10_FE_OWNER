import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getUserInfo, login } from "../../apis/user";

export const loginThunk = createAsyncThunk(
  "auth/login",
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await login(credentials);
      localStorage.setItem("Token", response.headers.authorization);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const getUserInfoThunk = createAsyncThunk(
  "auth/getUserInfo",
  async (_, { rejectWithValue }) => {
    try {
      const response = await getUserInfo();
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isLoggedIn: !!localStorage.getItem("Token"),
    isLoading: false,
    userName: "",
    error: null,
  },
  reducers: {
    logout: (state) => {
      localStorage.removeItem("Token");
      state.isLoggedIn = false;
      state.userName = "";
    },
  },
  extraReducers: {
    [loginThunk.pending]: (state) => {
      state.isLoading = true;
    },
    [loginThunk.fulfilled]: (state) => {
      state.isLoggedIn = true;
      state.isLoading = false;
    },
    [loginThunk.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload.error;
    },
    [getUserInfoThunk.pending]: (state) => {
      state.isLoading = true;
    },
    [getUserInfoThunk.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isLoggedIn = true;
      state.userName = action.payload.response.name;
    },
    [getUserInfoThunk.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload.error;
    },
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
