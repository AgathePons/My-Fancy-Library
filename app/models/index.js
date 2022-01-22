const Author = require('./author');
const Book = require('./book');
const Category = require('./category');
const Comment = require('./comment');
const Edition = require('./edition');
const User = require('./user');

// book <=> author
Book.belongsTo(Author, {
  as: 'author',
  foreignKey: 'author_id'
});

Author.hasMany(Book, {
  as: 'books',
  foreignKey: 'author_id'
});

// book <=> edition
Book.belongsTo(Edition, {
  as: 'edition',
  foreignKey: 'edition_id'
});

Edition.hasMany(Book, {
  as: 'books',
  foreignKey: 'edition_id'
});

// user <=> comment
User.hasMany(Comment, {
  as: 'comments',
  foreignKey: 'user_id'
});

Comment.belongsTo(User, {
  as: 'user',
  foreignKey: 'user_id'
});

// book <=> comment
Book.hasMany(Comment, {
  as: 'comments',
  foreignKey: 'book_id'
});

Comment.belongsTo(Book, {
  as: 'book',
  foreignKey: 'book_id'
});

// user <=> book
User.belongsToMany(Book, {
  as: 'books',
  through: 'user_likes_book',
  foreignKey: 'user_id',
  otherKey: 'book_id'
});

Book.belongsToMany(User, {
  as: 'users',
  through: 'user_likes_book',
  foreignKey: 'user_id',
  otherKey: 'book_id'
});

// book <=> category
Book.belongsToMany(Category, {
  as: 'categories',
  through: 'book_has_category',
  foreignKey: 'book_id',
  otherKey: 'category_id'
});

Category.belongsToMany(Book, {
  as: 'books',
  through: 'book_has_category',
  foreignKey: 'book_id',
  otherKey: 'category_id'
});