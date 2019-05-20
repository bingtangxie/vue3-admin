var express = require('express');
var router = express.Router();
var Mock = require('mockjs');
var User = require('../models/User')
var bcrypt = require('bcrypt')
var jwt = require('jsonwebtoken')
var secret = require('../config/conf').secret

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json(Mock.mock({
      roles: ['admin'],
      token: 'admin',
      introduction: '我是超级管理员',
      avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
      name: 'Super Admin'
    }));
});
router.post('/register', async function(req, res, next){
  const name = req.body.name
  const email = req.body.email
  const password = req.body.password
  const password2 = req.body.password2
  const identity = req.body.identity
  const search_email = await User.find({'email': email}).then(user => {
    if(user.length !== 0){
      return user
    }
  })
  const search_name = await User.find({'name': name}).then(user => {
    if(user.length !== 0){
      return user
    }
  })
  if (search_name || search_email){
    if(search_name){
      res.json({
        status: 'error',
        reason: '用户名已被注册'
      })
    }else{
      res.json({
        status: 'error',
        reason: '邮箱已被注册'
      })
    } 
  }else{
    let newUser = User({
      name: name,
      email: email,
      password: password,
      identity: identity
    })
   bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(newUser.password, salt, (err, encryptString) => {
        console.log(encryptString)
        newUser.password = encryptString
        console.log(newUser)
        newUser.save().then( result => {
          if(result){
            res.json({
              status: 'ok'
            })
          }
        }).catch( error => {
          console.log(error)
        })
      })
    })
  }
})

router.post('/login', function(req, res, next){
  const name = req.body.name
  const password = req.body.password
  console.log(name, ": ", password)
  User.findOne({'name': name}).then(user=>{
    if(user.length === 0){
      res.json({
        status: 'error',
        reason: '用户名不存在',
      })
    }else{
      userPassword = user.password
      bcrypt.compare(password, userPassword).then(isMatch => {
        if(isMatch){
          const rule = {name: name, password: password}
          jwt.sign(rule, secret, {expiresIn: 3600, }, (err, token) => {
            if(err) throw err;
            res.json({
              status: 'ok',
              token: token
            })
          })   
        }else{
          res.json({
            status: 'error',
            reason: '密码错误'
          })
        }
      })
    }
  })
})
module.exports = router;
