const express = require('express')
const path = require('path')
const router = express.Router()
let db = require('../models/db')

router.get('/', async (req, res) => {
  res.sendFile(path.join(__dirname, '../views', 'constellation_satellite.html'));
})

router.get('/con_find', async (req, res) => {
  var xingzuo = [
    {
      "id": "111", "con_name": "xingzuo1", "con_introduction": "介绍", "list": [
        { "id": "1", "sat_name": "卫星1","con": "xingzuo1","sat_introductio": "卫星介绍","lytime": "历元时间","lytime_msec": "间隔","a": "半长轴","e": "偏心率","i": "倾角","raan": "升交赤经","aop": "近地点倾角","m": "真近点角","control_frequency": "测控频率","data_frequency": "数传频率","payload_field": "视场角","payload_rang": "最大侧摆角","sat_width": "幅宽" }, 
        { "id": "1", "sat_name": "卫星2","con": "xingzuo1","sat_introductio": "卫星介绍","lytime": "历元时间","lytime_msec": "间隔","a": "半长轴","e": "偏心率","i": "倾角","raan": "升交赤经","aop": "近地点倾角","m": "真近点角","control_frequency": "测控频率","data_frequency": "数传频率","payload_field": "视场角","payload_rang": "最大侧摆角","sat_width": "幅宽" }, 
        { "id": "1", "sat_name": "卫星3","con": "xingzuo1","sat_introductio": "卫星介绍","lytime": "历元时间","lytime_msec": "间隔","a": "半长轴","e": "偏心率","i": "倾角","raan": "升交赤经","aop": "近地点倾角","m": "真近点角","control_frequency": "测控频率","data_frequency": "数传频率","payload_field": "视场角","payload_rang": "最大侧摆角","sat_width": "幅宽" }, 
        { "id": "1", "sat_name": "卫星4","con": "xingzuo1","sat_introductio": "卫星介绍","lytime": "历元时间","lytime_msec": "间隔","a": "半长轴","e": "偏心率","i": "倾角","raan": "升交赤经","aop": "近地点倾角","m": "真近点角","control_frequency": "测控频率","data_frequency": "数传频率","payload_field": "视场角","payload_rang": "最大侧摆角","sat_width": "幅宽" }, 
        { "id": "1", "sat_name": "卫星5","con": "xingzuo1","sat_introductio": "卫星介绍","lytime": "历元时间","lytime_msec": "间隔","a": "半长轴","e": "偏心率","i": "倾角","raan": "升交赤经","aop": "近地点倾角","m": "真近点角","control_frequency": "测控频率","data_frequency": "数传频率","payload_field": "视场角","payload_rang": "最大侧摆角","sat_width": "幅宽" }, 
        { "id": "1", "sat_name": "卫星6","con": "xingzuo1","sat_introductio": "卫星介绍","lytime": "历元时间","lytime_msec": "间隔","a": "半长轴","e": "偏心率","i": "倾角","raan": "升交赤经","aop": "近地点倾角","m": "真近点角","control_frequency": "测控频率","data_frequency": "数传频率","payload_field": "视场角","payload_rang": "最大侧摆角","sat_width": "幅宽" }, 
        { "id": "1", "sat_name": "卫星7","con": "xingzuo1","sat_introductio": "卫星介绍","lytime": "历元时间","lytime_msec": "间隔","a": "半长轴","e": "偏心率","i": "倾角","raan": "升交赤经","aop": "近地点倾角","m": "真近点角","control_frequency": "测控频率","data_frequency": "数传频率","payload_field": "视场角","payload_rang": "最大侧摆角","sat_width": "幅宽" }, 
      ]
    },
    { "id": "222", "con_name": "xingzuo2", "con_introduction": "介绍" , "list": [
      { "id": "1", "sat_name": "卫星1","con": "xingzuo1","sat_introductio": "卫星介绍","lytime": "历元时间","lytime_msec": "间隔","a": "半长轴","e": "偏心率","i": "倾角","raan": "升交赤经","aop": "近地点倾角","m": "真近点角","control_frequency": "测控频率","data_frequency": "数传频率","payload_field": "视场角","payload_rang": "最大侧摆角","sat_width": "幅宽" }, 
    ]},
    { "id": "333", "con_name": "xingzuo3", "con_introduction": "介绍", "list": [
      { "id": "1", "sat_name": "卫星1","con": "xingzuo1","sat_introductio": "卫星介绍","lytime": "历元时间","lytime_msec": "间隔","a": "半长轴","e": "偏心率","i": "倾角","raan": "升交赤经","aop": "近地点倾角","m": "真近点角","control_frequency": "测控频率","data_frequency": "数传频率","payload_field": "视场角","payload_rang": "最大侧摆角","sat_width": "幅宽" }, 
    ] }
  ]
  res.send(xingzuo)
})
//
router.post('/con_create', async (req, res) => {

  console.log(req.body)
  res.redirect('/constellation_satellite')
})
router.post('/con_edit', async (req, res) => {
  console.log(req.body)
  res.redirect('/constellation_satellite')
})
router.post('/con_delete', async (req, res) => {
  console.log(req.body)
  res.redirect('/constellation_satellite')
})

router.post('/sat_create', async (req, res) => {

  console.log(req.body)
  res.redirect('/constellation_satellite')
})
router.post('/sat_edit', async (req, res) => {
  console.log(req.body)
  res.redirect('/constellation_satellite')
})
router.post('/sat_delete', async (req, res) => {
  console.log(req.body)
  res.redirect('/constellation_satellite')
})
// router.get('/', function (req, res, next) {
//   var sql = 'SELECT * FROM project';
//   let connection = db.connection();
//   connection.query(sql, function (err, result) {
//     if (err) {
//       console.log('[SELECT ERROR]:', err.message);
//     }
//     console.log(result);  //数据库查询结果返回到result中
//     res.send(result)
//   });
//   db.close(connection);
// })
// router.get('/tt', function (req, res, next) {

//   let project = {id:11,project_naem: 'test', create_time: '2017-03-28 14:09:29'};
//   let sql = 'INSERT INTO project SET ?';
//   let connection = db.connection();
//   // db.insert(connection, sql, project, function(id){
//   //     console.log('inserted id is:' + id);
//   // });
//   connection.query(sql,project,function (err, result) {
//     if(err){
//      console.log('[INSERT ERROR] - ',err.message);
//      return;
//     }             
//     console.log("添加成功")
 
// });

//   db.close(connection);
//   res.send("添加成功")
// })



module.exports = router
