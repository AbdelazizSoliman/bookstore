import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addNewBook, fetchBooks } from '../redux/books/booksSlice';
import styles from '../styles/BookForm.module.css';

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
    <div className={styles.formContainer}>
      <p className={styles.formTitle}>ADD NEW BOOK</p>
      <form className={styles.form}>
        <input
          type="text"
          name="title"
          value={book.title}
          placeholder="Book title"
          onChange={handleChange}
          className={styles.input}
        />
        <input
          type="text"
          name="author"
          value={book.author}
          placeholder="Book author"
          onChange={handleChange}
          className={styles.input}
        />
        <select
          name="category"
          value={book.category}
          onChange={handleChange}
          className={styles.select}
        >
          <option value="" disabled>
            Category
          </option>
          {categoryOptions}
        </select>
        <button
          type="submit"
          className={styles.submitButton}
          onClick={handleSubmit}
        >
          ADD BOOK
        </button>
      </form>
    </div>
  );
};

export default BookForm;
