import React, { useState, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { useParams, useNavigate, Link } from 'react-router-dom';
import BookCard from '../components/BookCard';

const BrowseBooks = () => {
  const { category } = useParams();
  const navigate = useNavigate();

  const books = useSelector((state) => state.books.books);

  const [query, setQuery] = useState("");

  // extract all unique categories
  const categories = useMemo(() => {
    return Array.from(new Set(books.map((b) => b.category)));
  }, [books]);

  // filter by category from URL
  const categoryFilteredBooks = category
    ? books.filter(
        (b) => b.category.toLowerCase() === category.toLowerCase()
      )
    : books;

  // apply search filter (title + author)
  const filteredBooks = categoryFilteredBooks.filter((b) => {
    if (!query) return true;
    const q = query.toLowerCase();
    return (
      b.title.toLowerCase().includes(q) ||
      b.author.toLowerCase().includes(q)
    );
  });

  const handleCategoryChange = (e) => {
    const selected = e.target.value;

    if (!selected) {
      navigate("/browse"); // show all books
    } else {
      navigate(`/books/${encodeURIComponent(selected)}`);
    }
  };

  return (
    <section>
      <div className="browse-header">
        <h2>Browse Books</h2>

        <div className="browse-controls">

          {/* CATEGORY DROPDOWN */}
          <select value={category || ""} onChange={handleCategoryChange}>
            <option value="">All Categories</option>
            {categories.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>

          {/* SEARCH BAR */}
          <input
            type="text"
            placeholder="Search by title or author..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />

          <Link to="/add" className="btn small">
            + Add Book
          </Link>
        </div>
      </div>

      {/* BOOK CARDS */}
      <div className="grid">
        {filteredBooks.length === 0 ? (
          <p>No books found.</p>
        ) : (
          filteredBooks.map((book) => (
            <BookCard key={book.id} book={book} />
          ))
        )}
      </div>
    </section>
  );
};

export default BrowseBooks;