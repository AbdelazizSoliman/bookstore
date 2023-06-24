import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addNewBook, fetchBooks } from '../redux/books/booksSlice';

const BookForm = () => {
  const categories = ['Action', 'ScienceFiction', 'Maths', 'Economy'];
  const dispatch = useDispatch();

  const categoryOptions = categories.map((category, key) => (
    <option value={category} key={key}>
      {category}
    </option>
  ));

  const [book, setBook] = useState({
    title: '',
    author: '',
    category: '',
  });

  const handleChange = (e) => {
    setBook((book) => ({
      ...book,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const Info = [book.title, book.author, book.category];
    if (Info[0] !== '' || Info[1] !== '' || Info[2] !== '') {
      await dispatch(addNewBook(Info));
      dispatch(fetchBooks());
      setBook({
        ...book,
        categories: book.category,
      });
    }
  };

  return (
    <div className="formContainer">
      <p className="formTitle">ADD NEW BOOK</p>
      <form className="form">
        <input
          type="text"
          name="title"
          value={book.title}
          placeholder="Book title"
          onChange={handleChange}
          className="input"
        />
        <input
          type="text"
          name="author"
          value={book.author}
          placeholder="Book author"
          onChange={handleChange}
          className="input"
        />
        <select
          name="category"
          value={book.category}
          onChange={handleChange}
          className="select"
        >
          <option value="" disabled>
            Category
          </option>
          {categoryOptions}
        </select>
        <button
          type="submit"
          className="submitButton"
          onClick={handleSubmit}
        >
          ADD BOOK
        </button>
      </form>
    </div>
  );
};

export default BookForm;
