import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchBooks } from '../redux/books/booksSlice';
import BookForm from './BookForm';
import Book from './Book';
import '../App.css';

const Books = () => {
  const { booksList, loading, error } = useSelector((store) => store.books);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return (
      <div>
        Error:
        {error}
      </div>
    );
  }

  const booksArr = Object.entries(booksList).map(([key, value]) => ({
    item_id: key,
    ...value[0],
  }));

  const list = booksArr.map((book, key) => (
    <Book booksListObj={book} key={key} />
  ));
  return (
    <div className="">
      {list}
      <hr />
      <BookForm />
    </div>
  );
};

export default Books;
