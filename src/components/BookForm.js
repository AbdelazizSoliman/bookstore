import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/booksSlice';

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
    categories: '',
  });

  const handleChange = (e) => {
    setBook((book) => ({
      ...book,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const info = [book.title, book.author, book.category];
    if (info[0] !== '' || info[1] !== '') {
      dispatch(addBook(info));
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
          required
        />
        <input
          type="text"
          name="author"
          value={book.author}
          placeholder="Book author"
          onChange={handleChange}
          className="input"
          required
        />
        <select
          name="category"
          value={book.category}
          onChange={handleChange}
          className="select"
          required
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
