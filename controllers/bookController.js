const Book = require('../models/Book');

const addBook = async(req,res)=>{
try{
const book = await Book.create(req.body);
res.status(201).json(book);
}catch(error){
res.status(500).json({message:error.message});
}
};

const getBooks = async(req,res)=>{
const books = await Book.find();
res.json(books);
};

const getBookById = async(req,res)=>{
const book = await Book.findById(req.params.id);
res.json(book);
};

const updateBook = async(req,res)=>{
const book = await Book.findByIdAndUpdate(req.params.id,req.body,{new:true});
res.json(book);
};

const deleteBook = async(req,res)=>{
await Book.findByIdAndDelete(req.params.id);
res.json({message:"Book deleted"});
};

const searchBooks = async(req,res)=>{
const books = await Book.find({
title:{$regex:req.query.title,$options:"i"}
});
res.json(books);
};

module.exports = {
addBook,
getBooks,
getBookById,
updateBook,
deleteBook,
searchBooks
};