'use strict';
class article {
  constructor(content, title, pictureUrl) {
    this.content = content;
    this.title = title;
    this.pictureUrl = pictureUrl;
    this.createTime = new Date().getTime();
    this.praiseNum = 0;
    this.comment = [];
    this.cliNum = 0;
  }
  set content(value) {
    throw ('这个是私有变量无法进行赋值！');
  }
  get content() {
    return undefined;
  }
  getContent() {
    return this.content;
  }
}
module.exports = article;
