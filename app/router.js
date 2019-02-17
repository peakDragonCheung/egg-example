'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.post('/login', controller.home.login);
  router.post('/register', controller.home.register);
  router.post('/getArticleById', controller.article.getArticleById);
  router.post('/getArticles', controller.article.getArticles);
};
