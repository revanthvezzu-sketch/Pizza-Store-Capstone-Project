import React from 'react';
import './BookCard.css';

// BookCard functional component — displays title, author, and price via props
function BookCard({ title, author, price, cover, genre, viewMode }) {
  return (
    <div className={`book-card ${viewMode === 'list' ? 'book-card--list' : 'book-card--grid'}`}>
      <div className="book-card__cover">
        <span className="book-card__emoji">{cover}</span>
      </div>
      <div className="book-card__info">
        <span className="book-card__genre">{genre}</span>
        <h3 className="book-card__title">{title}</h3>
        <p className="book-card__author">by {author}</p>
        <div className="book-card__footer">
          <span className="book-card__price">₹{price}</span>
          <button className="book-card__btn">Add to Cart</button>
        </div>
      </div>
    </div>
  );
}

export default BookCard;
