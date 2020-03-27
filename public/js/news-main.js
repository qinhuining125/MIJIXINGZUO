layui.use(['element','carousel','layer','table'], function(){
    
  	var element = layui.element;
    var carousel = layui.carousel;
    var layer = layui.layer;
    var table = layui.table;
      //第一个实例
  table.render({
    elem: '#demo'
    ,height: 315
    ,url: '/imglist' //数据接口
    ,page: true //开启分页
    ,cols: [[ //表头
       {field: 'time', title: '时间', width:175, sort: true, fixed: 'left'}
      ,{field: 'filename', title: '图片名', width:350}
      ,{field: 'htmlFilename', title: '预览(点击查看)', width:350}
    ]]
  });
});