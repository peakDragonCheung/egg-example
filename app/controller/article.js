'use strict';

const Controller = require('egg').Controller;
class ArticleController extends Controller {
  async getArticleById() {
    const { ctx } = this;
    const params = ctx.request.body;
    // 通过Id查询文章
    const result = await ctx.service.article.getArticleById(params.articleId);
    if (result) {
      ctx.body = {
        statue: true,
        data: result,
      };
    }
  }
  async getArticles() {
    const { ctx } = this;
    const params = ctx.request.body;
    // 分页查询文章
    const result = await ctx.service.article.getArticles(params.pageNum, params.pageSize);
    if (result) {
      ctx.body = {
        statue: true,
        data: result,
      };
    }
  }
  async insertArticle() {
    const { ctx } = this;
    const params = ctx.request.body;
    const result = await ctx.service.article.insertArticle(params.title, params.content, params.shortContent);
    if(result) {
      ctx.body = {
        statue: true,
        data: result
      }
    } else {
      return {
        statue: false,
        data: result
      }
    }
  }
}
module.exports = ArticleController;
