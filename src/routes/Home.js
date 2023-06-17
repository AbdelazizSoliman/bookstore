import React from 'react';
import Books from '../components/Books';
import BookForm from '../components/BookForm';

const Home = () => {
  const booksList = [
    {
      id: 1,
      title: 'Let us C',
      author: 'Yashavant Kanetkar',
      completed: 70,
      chapter: 'chapter 2',
    },
    {
      id: 2,
      title: 'C by Example',
      author: 'Greg Perry',
      completed: 10,
      chapter: 'chapter 1',
    },
  ];
  return (
    <div>
      <Books booksList={booksList} />
      <hr />
      <BookForm />
    </div>
  );
};

export default Home;
