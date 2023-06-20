import { createSlice } from '@reduxjs/toolkit';

const initialState = { booksList: [] };
const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      const newBook = {
        id: Date.now(),
        title: action.payload[0],
        category: 'Maths',
        author: action.payload[1],
        completed: 78,
        chapter: 'chapter 67',
      };
      state.booksList = [...state.booksList, newBook];
    },
    removeBook: (state, action) => {
      const bookId = action.payload;
      state.booksList = state.booksList.filter((book) => book.id !== bookId);
    },
  },
});

export default booksSlice.reducer;
export const { addBook, removeBook } = booksSlice.actions;
