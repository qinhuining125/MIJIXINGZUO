const express = require('express')
const path = require('path')
const router = express.Router()
let db = require('../models/db')

router.get('/', async (req, res) => {
  res.sendFile(path.join(__dirname, '../views', 'area.html'));
})

router.get('/area_find', async (req, res) => {
  var xingzuo = [
    { "id": "主键ID", "area_name": "区域名称","area_introduction": "区域简介","type": "1","area_area": "区域面积","polygon": "区域数据"}, 
    { "id": "主键ID", "area_name": "区域名称","area_introduction": "区域简介","type": "2","area_area": "区域面积","polygon": "区域数据"}, 
    { "id": "主键ID", "area_name": "区域名称","area_introduction": "区域简介","type": "1","area_area": "区域面积","polygon": "区域数据"}, 
    { "id": "主键ID", "area_name": "区域名称","area_introduction": "区域简介","type": "3","area_area": "区域面积","polygon": "区域数据"}
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
