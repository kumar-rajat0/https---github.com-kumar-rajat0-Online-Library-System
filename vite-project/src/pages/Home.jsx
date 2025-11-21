import React from 'react'
import { useSelector } from 'react-redux'
import BookCard from '../components/BookCard'


const Home = () => {
const books = useSelector((state) => state.books.books)
const popular = books.slice(0, 4)
const categories = Array.from(new Set(books.map((b) => b.category)))


return (
<section>
<div className="hero">
<h2>Welcome to the Book Library</h2>
<p>Explore categories and find your next read.</p>
</div>


<div className="categories">
<h3>Categories</h3>
<ul>
{categories.map((c) => (
<li key={c}>{c}</li>
))}
</ul>
</div>


<div className="popular">
<h3>Popular Books</h3>
<div className="grid">
{popular.map((book) => (
<BookCard key={book.id} book={book} />
))}
</div>
</div>
</section>
)
}


export default Home