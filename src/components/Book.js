import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/booksSlice';
import '../App.css';

const Book = ({ book }) => {
  const dispatch = useDispatch();
  const handleRemove = (id) => {
    dispatch(removeBook(id));
  };
  return (
    <div className="bookCard">
      <div className="bookInfo">
        <div className="mainInfo">
          <p className="category">{book.category}</p>
          <h1 className="title">{book.title}</h1>
          <span className="author">{book.author}</span>
        </div>
        <ul className="buttons">
          <li className="buttonItem">
            <button type="button" className="button1">
              Comment
            </button>
          </li>
          <li className="buttonItem">
            <button
              type="button"
              className="button"
              onClick={() => handleRemove(book.id)}
            >
              Remove
            </button>
          </li>
          <li className="buttonItem">
            <button type="button" className="button">
              Edit
            </button>
          </li>
        </ul>
      </div>

      <div className="completed">
        <div className="progressCercle">
          <p className="progressCompleted">
            <span className="percentage">
              {book.completed}
              %
            </span>
            <span className="completedWord">Completed</span>
          </p>
        </div>

        <div className="currentChapter">
          <p className="currentChapterTitle">Current Chapter</p>
          <p className="chapter">{book.chapter}</p>
          <button type="button" className="progressButton">UPDATE PROGRESS</button>
        </div>
      </div>
    </div>
  );
};

Book.propTypes = {
  book: PropTypes.object.isRequired,
  id: PropTypes.number.isRequired,
};

export default Book;
