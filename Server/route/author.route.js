const authorController = require('../controller/author.controller');

module.exports = app => {
app.get('/api/author', authorController.getAuthor);
  app.post('/api/author', authorController.createAuthor);
  app.get('/api/author/:id',authorController.getOne)
  app.patch('/api/author/:id',authorController.findAndUpdateAuthor)
  app.delete('/api/author/:id',authorController.deleteAuthor)
};
