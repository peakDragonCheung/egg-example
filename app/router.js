'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  // 这里限制了我们自定义的class中的属性必须以 '_'开头，否则就没有办法设置为私有属性，并且在自定义的class写好set,get方法
  const handler = {
    get(target, key) {
      if (key[0] === '_') {
        throw new Error('Attempt to access private property');
      } else if (key === 'toJSON') {
        const obj = {};
        for (const key in target) {
          if (key[0] !== '_') {
            obj[key] = target[key];
          }
        }
        return () => obj;
      }
      return target[key];
    },
    set(target, key, value) {
      if (key[0] === '_') {
        throw new Error('Attempt to access private property');
      }
      target[key] = value;
    },
    getOwnPropertyDescriptor(target, key) {
      const desc = Object.getOwnPropertyDescriptor(target, key);
      if (key[0] === '_') {
        desc.enumerable = false;
      }
      return desc;
    },
  };
  app.handler = handler;
  router.get('/', controller.home.index);
  router.post('/login', controller.home.login);
  router.post('/register', controller.home.register);
};
