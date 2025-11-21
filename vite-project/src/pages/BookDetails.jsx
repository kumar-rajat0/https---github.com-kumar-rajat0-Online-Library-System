import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import RatingStars from '../components/RatingStars';

const BookDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // find the selected book from redux store
  const book = useSelector((state) =>
    state.books.books.find((b) => b.id === id)
  );

  // If book is not found
  if (!book) {
    return (
      <div className="details">
        <h2>Book not found</h2>
        <button className="btn" onClick={() => navigate('/browse')}>
          Back to Browse
        </button>
      </div>
    );
  }

  return (
    <div className="details">
      <img src={book.cover} alt={book.title} className="details-img" />

      <div className="details-body">
        <h2>{book.title}</h2>
        <p className="muted">by {book.author}</p>

        <RatingStars rating={book.rating} />

        <p style={{ marginTop: '10px' }}>{book.description}</p>

        <button
          className="btn"
          style={{ marginTop: '20px' }}
          onClick={() => navigate('/browse')}
        >
          Back to Browse
        </button>
      </div>
    </div>
  );
};

export default BookDetails;