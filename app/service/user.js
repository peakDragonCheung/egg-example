'use strict';
const Service = require('egg').Service;

class userService extends Service {
  async findByNameAndPw(name, password) {
    // 这里表示拿用户名去查询用户的信息，并且看看存不存在
    const user = await this.app.mysql.get('user', { username: name, password });
    return !!user;
  }
  async insertUser(name, password) {
    const sql = 'INSERT INTO user (username,password) VALUES (?,?)';
    const result = await this.app.mysql.query(sql, [ name, password ]);
    return result;
  }
}
module.exports = userService;
