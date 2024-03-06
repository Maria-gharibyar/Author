const authorController = require('../controller/author.controller');

module.exports = app => {
app.get('/api/author', authorController.getAuthor);
  app.post('/api/author', authorController.createAuthor);
};
