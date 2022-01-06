const client = require('./dbClient');

// TODO examples (not working)
const dataMapper = {
  getAllBooks: async () => {
    const query = 'SELECT * FROM book;';
    return (await client.query(query)).rows;
  },
  getOneBook: async (id) => {
    const query = `SELECT * FROM book WHERE id=${id};`;
    return (await client.query(query)).rows[0];
  }
};

module.exports = dataMapper;