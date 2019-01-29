'use strict';
const Service = require('egg').Service;
const Article = require('../class/article.js');
class articleService extends Service {
  async publishArticle() {
    const art1 = new Article('222');
    console.log(art1.content);
    console.log(art1.getContent());
  }
}
module.exports = articleService;
