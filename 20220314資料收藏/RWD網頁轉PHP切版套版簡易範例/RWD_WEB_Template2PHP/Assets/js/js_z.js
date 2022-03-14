$(function(){
	var w_w=$(window).width();
	var m_l=(1920-w_w)/2;
	
	
	$('.nav_m .n_icon').click(function(){
		$(this).siblings('.nav').slideToggle();
	});
	$('.i_mcm .flexslider .slides li .i_news:nth-child(2n)').css('margin-right',0+'px');
	$('.i_mdm .business ul li:nth-child(2n)').css('margin-right',0+'px');
	$('.open li:nth-child(2n)').css('margin-right',0+'px');
	$('.i_me dl:nth-child(2n)').css('margin-right',0+'px');
	$('.i_mdm .tabBox .tabNav li:last-child').css('margin-right',0+'px');
	
	//滑动门
	$(".tabBox .tabCont:first").css("display","block");
	$(".tabBox .tabNav li").mouseover(function(){
		$(this).siblings("li").removeClass("now");
		$(this).addClass("now");
		$(this).parents(".tabBox").find(".tabCont").css("display","none");
		var i=$(this).index();
		$(this).parents(".tabBox").find(".tabCont:eq("+i+")").css("display","block");
	});	
	
})
//js无缝滚动代码
function marquee(i, direction){
	var obj = document.getElementById("marquee" + i);
	var obj1 = document.getElementById("marquee" + i + "_1");
	var obj2 = document.getElementById("marquee" + i + "_2");
	if (direction == "up"){
		if (obj2.offsetTop - obj.scrollTop <= 0){
			obj.scrollTop -= (obj1.offsetHeight + 20);
		}else{
			var tmp = obj.scrollTop;
			obj.scrollTop++;
			if (obj.scrollTop == tmp){
				obj.scrollTop = 1;
			}
		}
	}else{
		if (obj2.offsetWidth - obj.scrollLeft <= 0){
			obj.scrollLeft -= obj1.offsetWidth;
		}else{
			obj.scrollLeft++;
		}
	}
}

function marqueeStart(i, direction){
	var obj = document.getElementById("marquee" + i);
	var obj1 = document.getElementById("marquee" + i + "_1");
	var obj2 = document.getElementById("marquee" + i + "_2");

	obj2.innerHTML = obj1.innerHTML;
	var marqueeVar = window.setInterval("marquee("+ i +", '"+ direction +"')", 40);
	obj.onmouseover = function(){
		window.clearInterval(marqueeVar);
	}
	obj.onmouseout = function(){
		marqueeVar = window.setInterval("marquee("+ i +", '"+ direction +"')", 40);
	}
}

