import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteBook, fetchBooks } from '../redux/books/booksSlice';
import '../App.css';

const Book = ({ booksListObj }) => {
  const dispatch = useDispatch();

  const handleDelete = async (id) => {
    try {
      await dispatch(deleteBook(id));
      dispatch(fetchBooks());
    } catch (error) {
      // console.log(error);
    }
  };

  return (
    <div className="bookCard">
      <div className="bookInfo">
        <div className="mainInfo">
          <p className="category">{booksListObj.category}</p>
          <h1 className="title">{booksListObj.title}</h1>
          <span className="author">{booksListObj.author}</span>
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
              onClick={() => {
                handleDelete(booksListObj.item_id);
              }}
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
        <div className="progressCercle" />
        <p className="progressCompleted">
          <span className="percentage">
            {/* {booksListObj.completed} */}
            97%
          </span>
          <span className="completedWord">Completed</span>
        </p>
      </div>

      <div className="currentChapter">
        <p className="currentChapterTitle">Current Chapter</p>
        <p className="chapter">chapter 69</p>
        <button type="button" className="progressButton">
          UPDATE PROGRESS
        </button>
      </div>
    </div>
  );
};

Book.propTypes = {
  booksListObj: PropTypes.object.isRequired,
};

export default Book;
