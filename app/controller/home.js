'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    this.ctx.body = 'hi my egg';
  }
  async login() {
    const { ctx } = this;
    const params = ctx.request.body;
    const flag = await ctx.service.user.findByNameAndPw(params.userName, params.passWord);
    if (flag) {
      ctx.body = {
        success: true,
        data: '登陆成功',
      };
    } else {
      ctx.body = {
        success: false,
        data: '密码或者用户名不正确！',
      };
    }
  }
  async register() {
    const { ctx } = this;
    const params = ctx.request.body;
    if (params.userName && params.passWord) {
      const result = await ctx.service.user.insertUser(params.userName, params.passWord);
      ctx.body = {
        success: true,
        data: result,
      };
    } else {
      ctx.body = {
        success: false,
        data: '用户名或者密码不能为空！',
      };
    }
  }
}

module.exports = HomeController;
