layui.use(['element','carousel','layer'], function(){
			  	var element = layui.element;
			    var carousel = layui.carousel;
			    var layer = layui.layer;
			    var scrollTop;
  					//建造实例
  				//$("#example_video_1").hide();
		 		// window.onload = function (){ 
		 		// 	window.scroll(0,500);
		   //    //       if (document.cookie.match(/scrollTop=([^;]+)(;|$)/) != null) {  
				 //    //     var arr = document.cookie.match(/scrollTop=([^;]+)(;|$)/); //cookies中不为空，则读取滚动条位置  
				 //    //     console.log(arr);
				 //    //     document.documentElement.scrollTop = parseInt(arr[1]);  
				 //    //     document.body.scrollTop = parseInt(arr[1]);  
				 //    // }     
		   //      }
	
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
				
				$(".vjs-default-skin").hide();
				$(".video-thumbnail").on("click",function(){
					var videoName ='';
					var divHtmlHead = '<video id="example_video" class="video-js vjs-default-skin" style="margin-left: 5080px;" controls preload="auto" width="100%" height="100%"  data-setup="{}" ><source src="';
					var divHtmlEnd = '" type="video/mp4" /></video>';
					if 			(this.id == "video-1-1") {videoName = videoPath[0];}
					else if 	(this.id == "video-1-2") {videoName = videoPath[1];}
					else if 	(this.id == "video-1-3") {videoName = videoPath[2];}
					else if 	(this.id == "video-1-4") {videoName = videoPath[3];}
					else if 	(this.id == "video-1-5") {videoName = videoPath[4];}
					else if 	(this.id == "video-1-6") {videoName = videoPath[5];}
					else if 	(this.id == "video-2-1") {videoName = videoPath[6];}
					else if 	(this.id == "video-2-2") {videoName = videoPath[7];}
					else if 	(this.id == "video-2-3") {videoName = videoPath[8];}
					else if 	(this.id == "video-2-4") {videoName = videoPath[9];}
					else if 	(this.id == "video-2-5") {videoName = videoPath[10];}
					else if 	(this.id == "video-2-6") {videoName = videoPath[11];}
					else if 	(this.id == "video-3-1") {videoName = videoPath[12];}
					else if 	(this.id == "video-3-2") {videoName = videoPath[13];}
					else if 	(this.id == "video-3-3") {videoName = videoPath[14];}
					else if 	(this.id == "video-3-4") {videoName = videoPath[15];}
					else if 	(this.id == "video-3-5") {videoName = videoPath[16];}
					else if 	(this.id == "video-3-6") {videoName = videoPath[17];}
					else if 	(this.id == "video-4-1") {videoName = videoPath[18];}
					else if 	(this.id == "video-4-2") {videoName = videoPath[19];}
					else if 	(this.id == "video-4-3") {videoName = videoPath[20];}
					else if 	(this.id == "video-4-4") {videoName = videoPath[21];}
					else if 	(this.id == "video-4-5") {videoName = videoPath[22];}
					else if 	(this.id == "video-4-6") {videoName = videoPath[23];}
					$("#video-div").empty();
					var html = divHtmlHead + videoName + divHtmlEnd
					console.log(html);
					$("#video-div").append(html);
					$(".vjs-default-skin").css("margin-left","0px");
					layer.open({
					  type: 1,
					  title: '',
					  content: $(".vjs-default-skin"),
					  area: ['70%', '70%'],
					  shadeClose: false,
					  cancel: function(){
					  	$("#video-div").empty();
					  	$(".layui-layer-shade").remove();
					  	// document.cookie ="scrollTop=" + 0;
					  	// document.cookie ="scrollTop=" + (-$(".site-inline").offset().top + 60);
					  	// console.log(scrollTop);
					  	// location.reload();
					  	// console.log(document.documentElement.scrollTop);
					  	// console.log(document.body.scrollTop);
					  }
					});	
				});
			  //… 
			})