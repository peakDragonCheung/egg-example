'use strict';
class article {
  constructor(content, title, pictureUrl) {
    this._Content = content;
    this._Title = title;
    this._PictureUrl = pictureUrl;
    this._CreateTime = new Date().getTime();
    this._PraiseNum = 0;
    this._Comments = [];
    this._CliNum = 0;
    const keyArray = Object.keys(this);
    // 循环定义set，get方法，减少代码量。其他类型的可以在下面覆盖。
    keyArray.forEach(key => {
      this[`set${key.slice(1)}`] = function(value) {
        this[key] = value;
      };
      this[`get${key.slice(1)}`] = function() {
        return this[key];
      };
    });
  }
  setComments(value) {
    if (Array.isArray(value)) {
      this._Comments = this._Comments.concat(value);
    } else {
      this._Comments.push(value);
    }
  }
  getComments() {
    return this._Comments;
  }
  deleteComments() {
  }
}
module.exports = article;
