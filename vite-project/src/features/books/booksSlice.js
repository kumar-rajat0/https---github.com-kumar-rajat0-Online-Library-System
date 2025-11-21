import { createSlice } from "@reduxjs/toolkit";
import data from "../../data/booksData"; // only if using dummy data

const booksSlice = createSlice({
  name: "books",
  initialState: {
    books: data,
  },
  reducers: {
    addBook: (state, action) => {
      state.books.unshift(action.payload);
    }
  }
});

export const { addBook } = booksSlice.actions;
export default booksSlice.reducer;
