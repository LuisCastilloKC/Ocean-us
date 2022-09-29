import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const login = createAsyncThunk("auth/login", async() => {
  try {
    
  } catch (error) {
    console.log(error)
  }
})

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    error: "",
    loading: false,
  },
});

export default authSlice.reducer;
