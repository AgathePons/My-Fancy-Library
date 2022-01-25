const dotenv = require('dotenv');
dotenv.config();

const {
  Author,
  Book,
  Category,
  Comment,
  Edition,
  User
} = require('./app/models');

const allBooksWithAuthor = async () => {
  const allBooks = await Book.findAll({
    include: 'author'
  });
  const books = [];
  for(const book of allBooks) {
    books.push(book.title + ' de '+ book.author.firstname + ' ' + book.author.lastname);
  }
  console.log('all books:');
  console.table(books);
};

const bookWithCategories = async (id) => {
  const book = await Book.findByPk(id, {
    include: 'categories'
  });
  console.log('------------------------');
  console.log(`${book.title} has ${book.categories.length} categories:`);
  for(const category of book.categories) {
    console.log(category.name);
  }
};

const userHasWritten = async (id) => {
  const user = await User.findByPk(id, {
    include: [
      { association: 'comments', include: 'book'}
    ]
  });
  console.log('------------------------')
  console.log(user.fullname + ' has written '+ user.comments.length + ' comments:');
  for(const comment of user.comments) {
    console.log(`"${comment.text}" on the book ${comment.book.title}`);
  }
};

const test = async () => {
  await allBooksWithAuthor();
  await bookWithCategories(1);
  await userHasWritten(1);
};

test();