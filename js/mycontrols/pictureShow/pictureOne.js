$(function(){

	$(".pic-pic").css("margin-top",($(".pic-list ul li").height()-$(".pic-pic").height())/2);
	$(".pic-next").css("margin-left",$(".pic-main").width()-$(".pic-pic").width()-1);
	
	$(".pic-list ul li").each(function(i){
		$(this).attr("id",i);
	});
	var timeOut=500;
	var picwidth=1000;
	//图片个数
	var licount=$(".pic-list>ul>li").length;	

	//图标下标
	var suffixIndex=0;

	//图片
	$(".pic-list").hover(function(){		
		$(".pic-prev").show();
		$(".pic-next").show();	
	},function(){
		$(".pic-next").hide();
		$(".pic-prev").hide();
	});	
	
	//下一张图
	$(".pic-next").click(function(){	
		if(suffixIndex!=5){
			suffixIndex++;
		}
		$(".pic-list ul").animate({"margin-left":"-"+parseInt(parseInt(suffixIndex)*picwidth)+"px"},timeOut);		
		
		$("#p1").html(suffixIndex);

		
	});
	
	//上一张图
	$(".pic-prev").click(function(){
		if(suffixIndex!=0){
		suffixIndex--;
		}
		$(".pic-list ul").animate({"margin-left":"-"+parseInt(parseInt(suffixIndex)*picwidth)+"px"},timeOut);
		
	$("#p1").html(suffixIndex);

	});
	
});

