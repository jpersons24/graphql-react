const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// MongoDB will automatically add id

const bookSchema = new Schema({
  name: String,
  genre: String,
  authorId: String,
});

// make a model (refers to collection in database)
// call it 'Book'
// 'Book' will look like bookSchema
module.exports = mongoose.model('Book', bookSchema);