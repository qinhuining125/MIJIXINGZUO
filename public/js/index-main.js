layui.use(['element','carousel','layer'], function(){
    
  	var element = layui.element;
    var carousel = layui.carousel;
    var layer = layui.layer;
			//建造实例
    // if ($(window).width() <= 750){
    //     //$("$png1.1").data-original="/img/jieshouqi-m-500.jpg";
    //     console.log(1001);
    // }else if ($(window).width() < 1140 && $(window).width() >750) {
    //     console.log(200);
    // }  
    //第一轮播     
	carousel.render({
		elem: '#test1'
		,width: '100%'
		,height: '100%' //设置容器宽度
		,arrow: 'always' //始终显示箭头
		,interval: '5000'
		,arrow: 'hover'
	//,anim: 'updown' //切换动画方式
	});
    carousel.render({
        elem: '#test2'
        ,width: '100%'
        ,height: 'auto' //设置容器宽度
        ,arrow: 'always' //始终显示箭头
        ,interval: '5000'
        ,arrow: 'hover'
        ,indicator: 'none'
    //,anim: 'updown' //切换动画方式
    });
	carousel.render({
        elem: '#test3'
        ,width: '100%'
        ,height: '100%' //设置容器宽度
        ,arrow: 'always' //始终显示箭头
        ,interval: '5000'
        ,arrow: 'hover'
    //,anim: 'updown' //切换动画方式
    });

    $(".lazy").lazyload({
        effect : "fadeIn",
        threshold : 5000,
        failure_limit : 999
    });
    //第二轮播
	$(function(){
        var json;
        var json_sm=[
            {//图1
                top:'0px',
                left:'0px',
                width:'200px',
                height:'200px',
                zIndex:6,
                opacity:0.1
            },
            {//图2
                top:'40px',
                left:'90px',
                width:'250px',
                height:'250px',
                zIndex:9,
                opacity:0.2
            },
            {//图3
                top:'70px',
                left:'200px',
                width:'300px',
                height:'300px',
                zIndex:11,
                opacity:1
            },
            {//图4
                top:'40px',
                left:'350px',
                width:'250px',
                height:'250px',
                zIndex:9,
                opacity:0.2
            },
            {//图5
                top:'0px',
                left:'480px',
                width:'200px',
                height:'200px',
                zIndex:6,
                opacity:0.1
            }
        ];
        var json_pc=[
            // {//图2
            //     top:'0px',
            //     left:'200px',
            //     width:'300px',
            //     height:'169px',
            //     zIndex:6,
            //     opacity:0.2
            // },
            // {//图3
            //     top:'44px',
            //     left:'137px',
            //     width:'350px',
            //     height:'197px',
            //     zIndex:7,
            //     opacity:0.5
            // },
            // {//图4
            //     top:'88px',
            //     left:'75px',
            //     width:'400px',
            //     height:'225px',
            //     zIndex:8,
            //     opacity:0.7
            // },
            // {//图5
            //     top:'121px',
            //     left:'150px',
            //     width:'433px',
            //     height:'244px',
            //     zIndex:9,
            //     opacity:0.8
            // },
            // {//图6
            //     top:'155px',
            //     left:'225px',
            //     width:'467px',
            //     height:'263px',
            //     zIndex:10,
            //     opacity:0.9
            // },
            // {//图7
            //     top:'188px',
            //     left:'300px',
            //     width:'500px',
            //     height:'281px',
            //     zIndex:11,
            //     opacity:1
            // },
            // {//图8
            //     top:'155px',
            //     left:'417px',
            //     width:'467px',
            //     height:'263px',
            //     zIndex:10,
            //     opacity:0.9
            // },
            // {//图9
            //     top:'121px',
            //     left:'533px',
            //     width:'433px',
            //     height:'244px',
            //     zIndex:9,
            //     opacity:0.8
            // },
            // {//图10
            //     top:'88px',
            //     left:'650px',
            //     width:'400px',
            //     height:'225px',
            //     zIndex:8,
            //     opacity:0.7
            // },
            // {//图10
            //     top:'44px',
            //     left:'625px',
            //     width:'350px',
            //     height:'197px',
            //     zIndex:7,
            //     opacity:0.5
            // },
            // {//图11
            //     top:'0px',
            //     left:'600px',
            //     width:'300px',
            //     height:'169px',
            //     zIndex:6,
            //     opacity:0.2
            // }
             {//图1
                top:'0px',
                left:'100px',
                width:'200px',
                height:'200px',
                zIndex:6,
                opacity:0.2
            },
            {//图2
                top:'40px',
                left:'200px',
                width:'300px',
                height:'300px',
                zIndex:9,
                opacity:0.2
            },
            {//图3
                top:'70px',
                left:'360px',
                width:'400px',
                height:'400px',
                zIndex:11,
                opacity:1
            },
            {//图4
                top:'40px',
                left:'600px',
                width:'300px',
                height:'300px',
                zIndex:9,
                opacity:0.2
            },
            {//图5
                top:'0px',
                left:'800px',
                width:'200px',
                height:'200px',
                zIndex:6,
                opacity:0.2
            }
        ];
        if ($(window).width()>=1140) {
            json = json_pc;
        }else{
            json = json_sm;
        }
        var jieliu=true;
//          封装一个函数，将json每个数据通过遍历加在每个'li'容器上
        function addCss(){
            for(var i in json){
                $('#wrap ul li').eq(i).css({zIndex:json[i].zIndex});
                $('#wrap ul li').eq(i).animate({
                    top:json[i].top,
                    left:json[i].left,
                    width:json[i].width,
                    height:json[i].height,
                    opacity:json[i].opacity
                },'slow',function(){
                    jieliu=true;
                });
            }               
        }
        //页面打开先调用一次，页面不会乱
        addCss();
        
        if ($(window).width() >= 750) {
            console.log(100);
            $('.prev').click(function(){
                if(jieliu==true){
                    jieliu=false;
                    //json.shift(),删除数组的第一个值，并返回第一个值
                    //json.push(json.shift())将返回的第一个值追加到数组末尾
                    json.push(json.shift());
                    //重新遍历
                    addCss();                   
                }

            });
            $('.next').click(function(){
                if(jieliu==true){
                    jieliu=false;
                    //json.pop(),删除数组的最后个值，并返回最后一个值
                    //json.unshift(json.pop())将返回的最后一个值添加到数组最前面
                    json.unshift(json.pop());
                    //重新遍历
                    addCss();
                }
            });
            var timer = setInterval(function(){
    		    if(jieliu==true){
                    jieliu=false;
                    //json.pop(),删除数组的最后个值，并返回最后一个值
                    //json.unshift(json.pop())将返回的最后一个值添加到数组最前面
                    json.unshift(json.pop());
                    //重新遍历
                    addCss();
                }    
    		}, 3000);
        }
    });
	$('#scene').parallax();
	$(document).ready(function(){

		//==================处理开场轮换图的固定效果===================
		
		$("div").scroll(function(){ 
			var ChaNum = $('#pngdiv1').offset().top === 0
					?
					$('#pngdiv2').offset().top:
					$('#pngdiv1').offset().top;
			$('#png1'		).css({'margin-top':-ChaNum*0.9+53+'px'});
			$('#car-txt1'	).css({'margin-top':-ChaNum*0.7+43+'px'});
			$('#png2'		).css({'margin-top':-ChaNum*0.9+53+'px'});
			$('#car-txt2'	).css({'margin-top':-ChaNum*0.7+43+'px'});
		//console.log($('#png1').offset().top+" "+$('#png2').offset().top);

		});
		//==================处理轮换时图片位置不正的问题===============
		$(".layui-carousel-arrow").click(function () {
			$('#png1'		).css({'margin-top':-$('#pngdiv1').offset().top*0.9+53+'px'});
			$('#car-txt1'	).css({'margin-top':-$('#pngdiv1').offset().top*0.7+43+'px'});
			$('#png2'		).css({'margin-top':-$('#pngdiv2').offset().top*0.9+53+'px'});
			$('#car-txt2'	).css({'margin-top':-$('#pngdiv2').offset().top*0.7+43+'px'});
			// 下面这种写法只能在最上位置正确修改 别的位置会跳
			// if ($('#pngdiv1').offset().top === 60) {
			// 	$('#png1,#car-txt1').css({'margin-top':0+'px'});
			// };
			// if ($('#pngdiv2').offset().top === 60) {
			// 	$('#png2,#car-txt2').css({'margin-top':0+'px'});
			// };
		});
	});
});