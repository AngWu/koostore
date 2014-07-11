//jquery图片淡隐淡现
$(document).ready(function(e) {
	speed = 500; //切换图片速度
	interval = 2500; //切换图片间隔
	count = 3; //图片数量
	
	//初始化数据
	var i=0;
    $("#banner a").fadeOut();
	$("#banner a").eq(0).fadeIn(speed);
	
	//切换函数
	picChange= function(){
		if(i<count-1){
			$("#banner a").eq(i+1).show(speed);
			$("#banner a").eq(i).hide(speed);
			i++;
		}else{
			$("#banner a").eq(i).hide(speed);
			i = 0;
			$("#banner a").eq(i).show(speed);
		}
	}
	
	//启动
	change = setInterval(picChange,interval);
	
	//鼠标浮上图片停止切换
	$("#banner a,.controller span").mouseover(function(){
			clearInterval(change);
	});
	$("#banner a,.controller span").mouseleave(function(e) {
    		change = setInterval(picChange,interval);    
    });
	
	//点击数字切换图片
	$(".controller span").click(function(){
		clearInterval(change);
		var index = $(".controller span").index(this);
		if(index == i ){
		}else{
			$("#banner a").eq(i).fadeOut(speed);
			$("#banner a").eq(index).fadeIn(speed);
			i=index;
		}
	});

});