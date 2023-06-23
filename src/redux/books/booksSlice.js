import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/5ZyEwy0gmIFRV6yGp8E6/books';

const initialState = {
  booksList: [],
  loading: true,
  error: null,
};

export const fetchBooks = createAsyncThunk('books/fectBooks', async () => {
  const resp = await axios.get(url);
  return resp.data;
});

export const addNewBook = createAsyncThunk('books/addNewBook', async (bookInfo) => {
  const newBook = {
    item_id: Date.now(),
    author: bookInfo[1],
    title: bookInfo[0],
    category: bookInfo[2],
  };
  const { data } = await axios.post(url, newBook);

  return data;
});

export const deleteBook = createAsyncThunk('books/deleteBook', async (id) => {
  await axios.delete(`${url}/${id}`);
  return id;
});

const booksSlice = createSlice({
  name: 'books',
  initialState,

  extraReducers: (builder) => {
    builder
      .addCase(fetchBooks.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchBooks.fulfilled, (state, action) => {
        state.loading = false;
        state.booksList = action.payload;
      })
      .addCase(fetchBooks.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      .addCase(addNewBook.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addNewBook.fulfilled, (state) => {
        state.loading = false;
        // state.booksList = [...state.booksList, newBook];
      })
      .addCase(addNewBook.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      .addCase(deleteBook.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteBook.fulfilled, (state) => {
        state.loading = false;
        // state.booksList = [...state.booksList, newBook];
      })
      .addCase(deleteBook.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default booksSlice.reducer;
export const { addBook, removeBook } = booksSlice.actions;
