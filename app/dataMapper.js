const client = require('./dbClient');

// TODO examples (not working)
const dataMapper = {
  getAllBooks: async () => {
    const query = 'SELECT book.id, book.title, book.author_f_name, book.author_l_name,book.cover, edition.edition_name FROM book JOIN edition ON book.edit_id=edition.id;';
    return (await client.query(query)).rows;
  },
  getOneBook: async (id) => {
    const query = `SELECT * FROM book WHERE book.id=${id};`;
    return (await client.query(query)).rows[0];
  }
};

module.exports = dataMapper;