const { User, Book } = require("../db");


exports.createBook = async (data) => await Book.create(data);

exports.getAllBooks = async (filters) => {
    const query = {};
    if (filters.author) query.author = filters.author;
    if (filters.category) query.category = filters.category;
    if (filters.rating) query.rating = { $gte: Number(filters.rating) };
    if (filters.price) query.price = { $lte: Number(filters.price) };
    
    return await Book.find(query);
};

exports.searchBooks = async ({ title }) => {
    return await Book.find({ title: { $regex: title, $options: 'i' } });
};

exports.getBookById = async (id) => await Book.findById(id);

exports.updateBookById = async (id, data) => await Book.findByIdAndUpdate(id, data, { new: true });

exports.deleteBookById = async (id) => await Book.findByIdAndDelete(id);
