import React from 'react'
import { Link } from 'react-router-dom'
import RatingStars from './RatingStars'


export default function BookCard({ book }) {
return (
<div className="card">
<img src={book.cover} alt={book.title} className="card-img" />
<div className="card-body">
<h3>{book.title}</h3>
<p className="muted">{book.author}</p>
<RatingStars rating={book.rating} />
<p className="excerpt">{book.description.slice(0, 120)}{book.description.length > 120 ? '...' : ''}</p>
<Link to={`/book/${book.id}`} className="btn small">
View Details
</Link>
</div>
</div>
)
}