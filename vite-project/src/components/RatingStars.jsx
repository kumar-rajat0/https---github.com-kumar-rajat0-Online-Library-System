import React from 'react'


export default function RatingStars({ rating }) {
const full = Math.floor(rating)
const half = rating - full >= 0.5
const items = []
for (let i = 0; i < full; i++) items.push('★')
if (half) items.push('☆')
while (items.length < 5) items.push('☆')


return <div className="rating">{items.join(' ')} <span className="muted">{rating}</span></div>
}