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
      // 子查询，查出前五篇文章以及其评论，在进行处理
      const sql = 'SELECT * FROM (SELECT * FROM t_article LIMIT ?,?) AS t_size LEFT JOIN t_comment ON t_size.id = t_comment.ac_id;';
      const result = await this.app.mysql.query(sql, [ (pageNum - 1) * pageSize, pageSize ]);
      let totle = await this.app.mysql.query('select * from t_article');
      totle = totle.length;
      const object = {};
      result.forEach(element => {
        if (object.hasOwnProperty(element.id));
        else {
          object[element.id] = element;
          element.comments = [];
        }
        object[element.id].comments.push({
          commentContent: element.commentContent,
          comm_createTime: element.commentContent,
        });
      });
      return {
        totle,
        list: Object.values(object),
      };
    }
  }
  async insertArticle(title = '标题', content = '', shortContent = '') {
    const sql = 'insert into t_article (title, content, shortContent) values (?,?,?)';
    const result = await this.app.mysql.query(sql, [title, content, shortContent]);
    if(result) {
      return result;
    } else {
      return false;
    }
  }
}
module.exports = articleService;
