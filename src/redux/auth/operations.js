import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://contactappserv.onrender.com/";

const setAuthHead = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHead = () => {
  axios.defaults.headers.common.Authorization = "";
};

export const register = createAsyncThunk(
  "auth/register",
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.post("auth/register", credentials, {
        withCredentials: true,
      });
      setAuthHead(res.data.data.accessToken);
      return res.data.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const logIn = createAsyncThunk(
  "auth/login",
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.post("/auth/login", credentials, {
        withCredentials: true,
      });
      setAuthHead(res.data.data.accessToken);
      return res.data.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const googleLogIn = createAsyncThunk(
  "auth/googleLogIn",
  async (code, thunkAPI) => {
    try {
      const res = await axios.post(
        "auth/confirm-oauth",
        { code },
        { withCredentials: true }
      );

      return res.data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logOut = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
  try {
    await axios.post(
      "auth/logout",
      {},
      {
        withCredentials: true,
      }
    );
    clearAuthHead();
  } catch (err) {
    return thunkAPI.rejectWithValue(err.message);
  }
});

export const refreshUser = createAsyncThunk(
  "auth/refresh",
  async (_, thunkAPI) => {
    try {
      const res = await axios.post(
        "/auth/refresh",
        {},
        {
          withCredentials: true,
        }
      );

      setAuthHead(res.data.data.accessToken);

      return res.data.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);
