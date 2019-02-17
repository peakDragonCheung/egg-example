'use strict';
const Service = require('egg').Service;
// const Article = require('../class/article.js');
class articleService extends Service {
  async getArticleById(id) {
    if (id) {
      const sql = 'select * from t_article where id = ?';
      const result = await this.app.mysql.query(sql, [ id ]);
      return result;
    }
  }
  async getArticles(pageNum = 0, pageSize = 10) {
    if (pageSize) {
      const sql = 'select * from t_article limit ?,?';
      const result = await this.app.mysql.query(sql, [ (pageNum - 1) * pageSize, pageSize ]);
      return result;
    }
  }
}
module.exports = articleService;
