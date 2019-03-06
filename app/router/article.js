'use strict';
module.exports = app => {
  const { router, controller } = app;
  router.post('/getArticleById', controller.article.getArticleById);
  router.post('/getArticles', controller.article.getArticles);
  router.post('/insertArticle', controller.article.insertArticle);
};
