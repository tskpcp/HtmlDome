	
	//图片个数
	var licount=$(".pic-list>ul>li").length;	
	//图标下标
	var pic_i=0;
	var timer;
$(function(){

	$(".pic-pic").css("margin-top",($(".pic-list ul li").height()-$(".pic-pic").height())/2);
	$(".pic-next").css("margin-left",$(".pic-main").width()-$(".pic-pic").width()-1);
	$(".pic-page").css("margin-top",$(".pic-list ul li").height()-$(".pic-page").height());
	var picbtn="";
	for(i=0;i<licount;i++){
		picbtn+='<div class="pic-page-btn"></div>';
	}
	$(".pic-page").append(picbtn);

	//左右按钮
	$(".pic-list").hover(function(){		
		$(".pic-prev").show();
		$(".pic-next").show();	
	},function(){
		$(".pic-next").hide();
		$(".pic-prev").hide();
	});	
	autolunbo();
	$(".pic-page-btn").hover(function(){//鼠标放到下标上之后，和离开之后触发的事件
		pic_i=$(this).index();//获取到当前鼠标放上去的那个下标的索引，并且赋值给i
		ShowPicTab();
		clearInterval(timer);
		
	},function(){
		autolunbo();
	});
	$(".pic-prev").click(function(){
		clearInterval(timer);
		pic_i--;
		if(pic_i==-1){
			$(".pic-main ul").animate({"left":-1000*licount},300);
			pic_i=licount-1;
		}
		ShowPicTab();
		autolunbo();
	});
	$(".pic-next").click(function(){
		clearInterval(timer);
		pic_i++;		
		ShowPicTab();
		autolunbo();
	});
});
function ShowPicTab(){
	if(pic_i<licount){
			$(".pic-main ul").animate({"left":-1000*pic_i},300);
		}else{
			$(".pic-main ul").animate({"left":-1000*pic_i},300,function(){$(".pic-main ul").css("left","0px");});
			pic_i=0;
		}
		$(".pic-page-btn").eq(pic_i).addClass("pic-page-btn-cur").siblings().removeClass("pic-page-btn-cur");
}
function autolunbo(){//间隔4s，轮播
	timer=setInterval(function(){
		pic_i++;
		ShowPicTab();
	},4000);
}
