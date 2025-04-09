const bookService=require("../services/bookService");
const { bookSchema } = require("../utils/validators");

exports.createBook = async (req, res) => {
    const parsed = bookSchema.safeParse(req.body);
    if (!parsed.success) {
        return res.status(400).json({ message: "Invalid book data", error: parsed.error });
    }
    try {
        const book = await bookService.createBook(req.body);
        return res.json({ message: "Book created successfully", book });
    } catch (err) {
        return res.status(500).json({ error: err.message });
    }
};

exports.getAllBooks = async (req, res) => {
    try {
        const books = await bookService.getAllBooks(req.query);
        return res.json({ books });
    } catch (err) {
        return res.status(500).json({ error: err.message });
    }
};

exports.searchBooks = async (req, res) => {
    try {
        const books = await bookService.searchBooks(req.query);
        return res.json({ books });
    } catch (err) {
        return res.status(500).json({ error: err.message });
    }
};

exports.getBookById = async (req, res) => {
    try {
        const book = await bookService.getBookById(req.params.id);
        if (!book) return res.status(404).json({ message: "Book not found" });
        return res.json(book);
    } catch (err) {
        return res.status(500).json({ error: err.message });
    }
};

exports.updateBookById = async (req, res) => {
    try {
        const book = await bookService.updateBookById(req.params.id, req.body);
        if (!book) return res.status(404).json({ message: "Book not found" });
        return res.json({ message: "Book updated successfully", book });
    } catch (err) {
        return res.status(500).json({ error: err.message });
    }
};

exports.deleteBookById = async (req, res) => {
    try {
        const result = await bookService.deleteBookById(req.params.id);
        if (!result) return res.status(404).json({ message: "Book not found" });
        return res.json({ message: "Book deleted successfully" });
    } catch (err) {
        return res.status(500).json({ error: err.message });
    }
};
