import React, { useState } from 'react';

const BookForm = () => {
  const [book, setBook] = useState({
    title: '',
    auther: '',
  });

  const handleChange = (e) => {
    setBook((book) => ({
      ...book,
      [e.target.name]: e.target.value,
    }));
  };
  return (
    <div>
      <p>ADD NEW BOOK</p>
      <form>
        <input
          type="text"
          name="title"
          value={book.title}
          placeholder="Book title"
          onChange={handleChange}
        />
        <input
          type="text"
          name="auther"
          value={book.auther}
          placeholder="book auther"
          onChange={handleChange}
        />
        <button type="submit">ADD BOOK</button>
      </form>
    </div>
  );
};

export default BookForm;
