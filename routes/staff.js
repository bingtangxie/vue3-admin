var express = require('express');
var router = express.Router();
var Mock = require('mockjs')
var Staff = require('../models/Staff')
var moment = require('moment')

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
router.get('/get', async function(req, res, next) {
  const currentPage = req.query.currentPage || 1
  const pageSize = 10
  const start = req.query.start
  const end = req.query.end
  const total = await Staff.countDocuments()
  let result = {}
  Staff.find().sort({"date": -1}).skip((currentPage -1)*pageSize).limit(pageSize).then(data => {
    if (data){
      if (start  && end ){
          const newData = data.filter((item) => {
          const createDate = moment(item.date).format('YYYY-MM-DD HH:mm:ss')
          // 字符串直接比较大小
          if (createDate>=start&&createDate<=end){
            return true
          }
        })
        result = {
          staffList: newData,
          pagination: {
            currentPage: currentPage,
            pageSize: pageSize,
            total: total
          }
        }
      }else{
        result = {
          staffList: data,
          pagination: {
            currentPage: currentPage,
            pageSize: pageSize,
            total: total
          }
        }
      }
      // console.log(result)
      res.json(result)
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