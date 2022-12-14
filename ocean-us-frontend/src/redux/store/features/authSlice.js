import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../api"

export const login = createAsyncThunk("auth/login", async({formValue, navigate, toast}, {rejectWithValue}) => {
  try {
    const response = await api.signIn(formValue);
    toast.success("Login Successfull");
    navigate("/")
    ///response.data create 3 promise lifecicle (pending, fulfilled, and rejected)
    return response.data
  } catch (error) {
    return rejectWithValue(error.response.data)
  }
})

export const signup = createAsyncThunk("auth/signup", async({formValue, navigate, toast}, {rejectWithValue}) => {
  try {
    const response = await api.signUp(formValue);
    toast.success("Sign up Successfull");
    navigate("/")
    ///response.data create 3 promise lifecicle (pending, fulfilled, and rejected)
    return response.data
  } catch (error) {
    return rejectWithValue(error.response.data)
  }
})

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    error: "",
    loading: false,
  },
  extraReducers: {
    [login.pending]: (state, action) => {
      state.loading = true
    },
    [login.fulfilled]: (state, action) => {
      state.loading = false
      localStorage.setItem("profile", JSON.stringify({...action.payload}))
      state.user = action.payload
    },
    [login.rejected]: (state, action) => {
      state.loading = false 
      state.error = action.payload.message
    },
    [signup.pending]: (state, action) => {
      state.loading = true
    },
    [signup.fulfilled]: (state, action) => {
      state.loading = false
      localStorage.setItem("profile", JSON.stringify({...action.payload}))
      state.user = action.payload
    },
    [signup.rejected]: (state, action) => {
      state.loading = false 
      state.error = action.payload.message
    },
  }
});

export default authSlice.reducer;
