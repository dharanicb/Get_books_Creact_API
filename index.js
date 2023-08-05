const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

// In-memory database (replace this with an actual database in production)
let books = [
  { id: 1, title: "Book 1", author: "Author 1" },
  { id: 2, title: "Book 2", author: "Author 2" },
];

// Get all books
app.get("/api/books", (req, res) => {
  res.json(books);
});

// Get a single book by ID
app.get("/api/books/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const book = books.find((b) => b.id === id);
  if (book) {
    res.json(book);
  } else {
    res.status(404).json({ error: "Book not found" });
  }
});

// Add a new book
app.post("/api/books", (req, res) => {
  const newBook = req.body;
  if (!newBook.title || !newBook.author) {
    res.status(400).json({ error: "Title and author are required fields" });
  } else {
    newBook.id = books.length + 1;
    books.push(newBook);
    res.status(201).json(newBook);
  }
});

// Update an existing book
app.put("/api/books/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const updatedBook = req.body;
  const index = books.findIndex((b) => b.id === id);
  if (index !== -1) {
    books[index] = { ...books[index], ...updatedBook };
    res.json(books[index]);
  } else {
    res.status(404).json({ error: "Book not found" });
  }
});

// Delete a book
app.delete("/api/books/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const index = books.findIndex((b) => b.id === id);
  if (index !== -1) {
    const deletedBook = books.splice(index, 1);
    res.json(deletedBook[0]);
  } else {
    res.status(404).json({ error: "Book not found" });
  }
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
