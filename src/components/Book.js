import React from 'react';
import PropTypes from 'prop-types';
// import { CircularProgressbar } from 'react-circular-progressbar';
import { useDispatch } from 'react-redux';
import { deleteBook, fetchBooks } from '../redux/books/booksSlice';
import '../App.css';
import styles from '../styles/Book.module.css';

const Book = ({ booksListObj }) => {
  const dispatch = useDispatch();

  const handleDelete = async (id) => {
    await dispatch(deleteBook(id));
    dispatch(fetchBooks());
  };

  return (
    <div className={styles.bookCard}>
      <div className={styles.bookInfo}>
        <div className={styles.mainInfo}>
          <p className={styles.category}>{booksListObj.category}</p>
          <h1 className={styles.title}>{booksListObj.title}</h1>
          <span className={styles.author}>{booksListObj.author}</span>
        </div>
        <ul className={styles.buttons}>
          <li className="buttonItem">
            <button type="button" className={styles.button1}>
              Comment
            </button>
          </li>
          <li className="buttonItem">
            <button
              type="button"
              className={styles.button}
              onClick={() => {
                handleDelete(booksListObj.item_id);
              }}
            >
              Remove
            </button>
          </li>
          <li className="buttonItem">
            <button type="button" className={styles.button}>
              Edit
            </button>
          </li>
        </ul>
      </div>

      <div className={styles.completed}>
        <div className={styles.progressCircle} />
        <p className={styles.progressCompleted}>
          <span className={styles.percentage}>
            97%
          </span>
          <span className={styles.completedWord}>Completed</span>
        </p>
      </div>

      {/* <article className="middle">
        <div className="circle">
          <CircularProgressbar value={60} />
        </div>
        <div className="progress-text">
          <p className="percentage">60%</p>
          <p className="completed">Completed</p>
        </div>
      </article> */}

      <div className={styles.currentChapter}>
        <p className={styles.currentChapterTitle}>Current Chapter</p>
        <p className={styles.chapter}>chapter 69</p>
        <button type="button" className={styles.progressButton}>
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
