const express = require('express')
const router = express.Router()
let db = require('../models/db')
var mqtt = require('mqtt');
var client = mqtt.connect('mqtt://127.0.0.1'); //连接到服务端
router.get('/', function (req, res, next) {


  //client.subscribe('presence');
  var num = 0;
  var qtt = {}; //定义消息（可以为字符串、对象等）
  qtt = 'setr=xxxxxxx1xx';
  setInterval(function() { //一秒钟发送一次 消息到主题 test 消息为 setr=xxxxxxx1xx 进行测试
      client.publish('test', qtt, { qos: 0, retain: true });  
  }, 1000);


//   var mqtt = require('mqtt');  
// var client2 = mqtt.connect("mqtt://127.0.0.1:1883");   //指定服务端地址和端口
  
client.subscribe('test',{qos:1});//订阅主题为test的消息  
  
client.on('message',function(top,message) {  
    console.log("进行测试")
    console.log(message.toString());  
});  


  var sql = 'SELECT * FROM project';
  let connection = db.connection();
  connection.query(sql, function (err, result) {
    if (err) {
      console.log('[SELECT ERROR]:', err.message);
    }
    console.log(result);  //数据库查询结果返回到result中
    res.send(result)
  });
  db.close(connection);
})
router.get('/tt', function (req, res, next) {

  let project = {id:11,project_naem: 'test', create_time: '2017-03-28 14:09:29'};
  let sql = 'INSERT INTO project SET ?';
  let connection = db.connection();
  // db.insert(connection, sql, project, function(id){
  //     console.log('inserted id is:' + id);
  // });
  connection.query(sql,project,function (err, result) {
    if(err){
     console.log('[INSERT ERROR] - ',err.message);
     return;
    }             
    console.log("添加成功")
 
});

  db.close(connection);
  res.send("添加成功")
})



module.exports = router
