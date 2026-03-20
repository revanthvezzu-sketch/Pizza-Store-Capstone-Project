import React, { useState } from 'react';
import BookCard from './BookCard';
import './BookList.css';

// Sample featured books data
const FEATURED_BOOKS = [
  { id: 1, title: 'The Alchemist', author: 'Paulo Coelho', price: 299, cover: '✨', genre: 'Fiction' },
  { id: 2, title: 'Atomic Habits', author: 'James Clear', price: 499, cover: '⚛️', genre: 'Self-Help' },
  { id: 3, title: 'Sapiens', author: 'Yuval Noah Harari', price: 599, cover: '🦴', genre: 'History' },
  { id: 4, title: 'The Psychology of Money', author: 'Morgan Housel', price: 449, cover: '🧠', genre: 'Finance' },
  { id: 5, title: 'Ikigai', author: 'Héctor García', price: 349, cover: '🌻', genre: 'Self-Help' },
];

// BookList parent component — renders BookCard components, manages view mode & search
function BookList() {
  // State: toggle between 'grid' and 'list' view modes
  const [viewMode, setViewMode] = useState('grid');

  // State: controlled search input
  const [searchQuery, setSearchQuery] = useState('');

  // Filter books based on search query (title or author)
  const filteredBooks = FEATURED_BOOKS.filter((book) => {
    const query = searchQuery.toLowerCase();
    return (
      book.title.toLowerCase().includes(query) ||
      book.author.toLowerCase().includes(query) ||
      book.genre.toLowerCase().includes(query)
    );
  });

  // Event handler: switch layout
  const handleViewToggle = (mode) => {
    setViewMode(mode);
  };

  // Controlled component handler: update search state on every keystroke
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="book-list-container">
      {/* Controls: search + view toggle */}
      <div className="book-list__controls">
        {/* Controlled search input */}
        <div className="book-list__search-wrapper">
          <span className="search-icon">🔍</span>
          <input
            type="text"
            className="book-list__search"
            placeholder="Search by title, author, or genre..."
            value={searchQuery}
            onChange={handleSearchChange}
          />
          {searchQuery && (
            <button
              className="search-clear"
              onClick={() => setSearchQuery('')}
              aria-label="Clear search"
            >
              ✕
            </button>
          )}
        </div>

        {/* View mode toggle buttons */}
        <div className="book-list__view-toggle">
          <button
            className={`toggle-btn ${viewMode === 'grid' ? 'toggle-btn--active' : ''}`}
            onClick={() => handleViewToggle('grid')}
            aria-pressed={viewMode === 'grid'}
          >
            ⊞ Grid
          </button>
          <button
            className={`toggle-btn ${viewMode === 'list' ? 'toggle-btn--active' : ''}`}
            onClick={() => handleViewToggle('list')}
            aria-pressed={viewMode === 'list'}
          >
            ☰ List
          </button>
        </div>
      </div>

      {/* Results count */}
      <p className="book-list__count">
        Showing <strong>{filteredBooks.length}</strong> of {FEATURED_BOOKS.length} books
        {searchQuery && ` for "${searchQuery}"`}
      </p>

      {/* Book cards rendered using props */}
      {filteredBooks.length > 0 ? (
        <div className={`book-list ${viewMode === 'grid' ? 'book-list--grid' : 'book-list--list'}`}>
          {filteredBooks.map((book) => (
            <BookCard
              key={book.id}
              title={book.title}
              author={book.author}
              price={book.price}
              cover={book.cover}
              genre={book.genre}
              viewMode={viewMode}
            />
          ))}
        </div>
      ) : (
        <div className="book-list__empty">
          <p>📭 No books match your search. Try a different keyword!</p>
        </div>
      )}
    </div>
  );
}

export default BookList;
