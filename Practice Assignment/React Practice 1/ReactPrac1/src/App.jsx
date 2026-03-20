import React from 'react';
import BookList from './BookList';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="app-header">
        <h1>📚 BookVerse</h1>
        <p className="tagline">Discover your next great read</p>
      </header>
      <main>
        <BookList />
      </main>
    </div>
  );
}

export default App;
