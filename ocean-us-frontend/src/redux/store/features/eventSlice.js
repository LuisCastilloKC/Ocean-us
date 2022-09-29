import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  title: [],
  address: [],
  zipcode: [],
  image: [],
  like: [],
  date: [],
  eventDescription: [],
};

const eventSlice = createSlice({
  name: "event",
  initialState,
});

console.log(eventSlice);

export default eventSlice.reducer