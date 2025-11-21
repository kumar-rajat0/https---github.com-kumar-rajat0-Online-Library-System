import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addBook } from "../features/books/booksSlice";
import { useNavigate } from "react-router-dom";

const AddBook = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    title: "",
    author: "",
    category: "",
    description: "",
    rating: "",
    cover: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // validation
    if (
      !form.title ||
      !form.author ||
      !form.category ||
      !form.description ||
      !form.rating ||
      !form.cover
    ) {
      setError("All fields are required!");
      return;
    }

    const newBook = {
      id: Date.now().toString(),
      ...form,
      rating: Number(form.rating),
    };

    dispatch(addBook(newBook));
    navigate("/browse"); // redirect to Browse page
  };

  return (
    <div className="form-container">
      <h2>Add a New Book</h2>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <form onSubmit={handleSubmit}>
        <input
          name="title"
          placeholder="Book Title"
          value={form.title}
          onChange={handleChange}
        />

        <input
          name="author"
          placeholder="Author"
          value={form.author}
          onChange={handleChange}
        />

        <input
          name="category"
          placeholder="Category (Fiction, Sci-Fi...)"
          value={form.category}
          onChange={handleChange}
        />

        <textarea
          name="description"
          placeholder="Description"
          value={form.description}
          onChange={handleChange}
        />

        <input
          name="rating"
          placeholder="Rating (1 to 5)"
          type="number"
          min="1"
          max="5"
          value={form.rating}
          onChange={handleChange}
        />

        <input
          name="cover"
          placeholder="Cover Image URL"
          value={form.cover}
          onChange={handleChange}
        />

        <button className="btn" type="submit">
          Add Book
        </button>
      </form>
    </div>
  );
};

export default AddBook;
