
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
	$(".pic-main ul li").eq(0).show().siblings().hide();//表示第一张图片显示，其余图片的隐藏
	$(".pic-page-btn").eq(0).addClass("pic-page-btn-cur");
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
			pic_i=licount-1;
		}
		ShowPicTab();
		autolunbo();
	});
	$(".pic-next").click(function(){
		clearInterval(timer);
		pic_i++;
		if(pic_i==licount){
			pic_i=0;
		}
		ShowPicTab();
		autolunbo();
	});
});
function ShowPicTab(){
	$(".pic-main ul li").eq(pic_i).fadeIn(300).siblings().fadeOut(300);//当前的图片显示，其余的图片隐藏
	$(".pic-page-btn").eq(pic_i).addClass("pic-page-btn-cur").siblings().removeClass("pic-page-btn-cur");//设置当前按钮颜色
}
function autolunbo(){//间隔4s，轮播
	timer=setInterval(function(){
		pic_i++;
		if(pic_i==licount){
			pic_i=0;
		}
		ShowPicTab();
	},4000);
}
