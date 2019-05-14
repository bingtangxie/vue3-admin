var express = require('express');
var router = express.Router();
var Mock = require('mockjs')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json(Mock.mock({
    xiebingtang: {
      roles: ['admin'],
      token: 'admin',
      introduction: '我是超级管理员',
      avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
      name: 'Super Admin'
    },
  }));
});

module.exports = router;
