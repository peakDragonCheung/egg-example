'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    this.ctx.body = 'hi';
  }
  async login() {
    debugger
    if (this.ctx.query.userName === 'zhang' && this.ctx.query.passWord === '123') {
      this.ctx.body = {
        success: true,
        data: '登陆成功',
      };
    } else {
      this.ctx.body = {
        success: false,
        data: '密码或者用户名不正确！',
      };
    }
  }
}

module.exports = HomeController;
