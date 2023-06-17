import React from 'react';
import PropTypes from 'prop-types';
import '../App.css';

const Book = ({ booksListObj }) => (
  <div>
    <div>
      <div>
        <h1>{booksListObj.title}</h1>
        <span>{booksListObj.author}</span>
      </div>
      <ul>
        <li>
          <button type="button">
            Comment
          </button>
        </li>
        <li>
          <button type="button">
            Remove
          </button>
        </li>
        <li>
          <button type="button">
            Edit
          </button>
        </li>
      </ul>
    </div>

    <div>
      <div />
      <p>
        <span>
          {booksListObj.completed}
          %
        </span>
        <span>Completed</span>
      </p>
    </div>

    <div>
      <p>Current Chapter</p>
      <p>{booksListObj.chapter}</p>
      <button type="button">UPDATE PROGRESS</button>
    </div>
  </div>
);

Book.propTypes = {
  booksListObj: PropTypes.object.isRequired,
};

export default Book;
