layui.use(['element','carousel','layer'], function(){
  	var element = layui.element;
    var carousel = layui.carousel;
    var layer = layui.layer;
			//建造实例
	carousel.render({
		elem: '#test1'
		,width: '95%'
		,height: '500px' //设置容器宽度
		,arrow: 'always' //始终显示箭头
		,interval: '5000'
		,arrow: 'hover'
	//,anim: 'updown' //切换动画方式
	});
	$('#scene').parallax();
  //…
})