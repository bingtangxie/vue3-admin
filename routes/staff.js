var express = require('express');
var router = express.Router();
var Mock = require('mockjs')
var Staff = require('../models/Staff')

/* GET users listing. */
router.post('/add', function(req, res, next) {
  var staffInfo = {} 
  const staff = req.body
  if(staff.name) staffInfo.name = staff.name
  if(staff.gender) staffInfo.gender = staff.gender
  if(staff.status) staffInfo.status = staff.status
  if(staff.hobbies) staffInfo.hobbies = staff.hobbies
  if(staff.birthday) staffInfo.birthday = staff.birthday
  if(staff.wedded) staffInfo.wedded = staff.wedded
  if(staff.address) staffInfo.address = staff.address
  if(staff.date) staffInfo.date = staff.date
  new Staff(staffInfo).save().then( data => { 
    // console.log(data)
  res.json({
      status: "ok"
    })
  })
});
router.get('/get', function(req, res, next) {
  Staff.find().then(data => {
    if (data){
      // console.log('get: ', data)
      res.json(data)
    }
  })
});
router.get('/delete', function(req, res, next){
  staffId = req.query.id
  Staff.findByIdAndRemove({_id: staffId}).then(staff => {
    res.json({
      status: 'ok'
    }
    )
  })
});
router.get('/getOne', function(req, res, next){
  staffId = req.query.id
  Staff.findById({_id: staffId}).then(staff => {
    res.json(
      staff
    )
  })
})
router.post('/edit', function(req, res, next){
  staffInfo = {}
  staff = req.body
  if(staff.name) staffInfo.name = staff.name
  if(staff.gender) staffInfo.gender = staff.gender
  if(staff.status) staffInfo.status = staff.status
  if(staff.hobbies) staffInfo.hobbies = staff.hobbies
  if(staff.birthday) staffInfo.birthday = staff.birthday
  if(staff.wedded) staffInfo.wedded = staff.wedded
  if(staff.address) staffInfo.address = staff.address
  if(staff.date) staffInfo.date = staff.date
  Staff.findByIdAndUpdate({_id: staff._id}, {$set: staffInfo}, {new: true}).then(
    staff => {
      console.log(staff)
      if (staff){
        res.json({
          status: 'ok'
        })
      }
    }
  )
 
})

module.exports = router;