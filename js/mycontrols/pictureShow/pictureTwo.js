    var timeOut=500;
	var picwidth=1000;
	//图片个数
	var licount=$(".pic-list>ul>li").length;	
	//图标下标
	var suffixIndex=0;
$(function(){

	$(".pic-pic").css("margin-top",($(".pic-list ul li").height()-$(".pic-pic").height())/2);
	$(".pic-next").css("margin-left",$(".pic-main").width()-$(".pic-pic").width()-1);
	$(".pic-page").css("margin-top",$(".pic-list ul li").height()-$(".pic-page").height());
	var picbtn="";
	$(".pic-list ul li").each(function(i){
		$(this).attr("id",i);
	});
	for(i=0;i<licount;i++){
		if(i==0){
		 	picbtn+='<div class="pic-page-btn pic-page-btn-cur" id="f'+i+'" onclick="chengPic('+i+')"></div>';
		}else{
		    picbtn+='<div class="pic-page-btn" id="f'+i+'" onclick="chengPic('+i+')"></div>';
		}
	}
	$(".pic-page").append(picbtn);
	
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
		$("#f"+suffixIndex).addClass("pic-page-btn-cur").siblings(".pic-page-btn").removeClass("pic-page-btn-cur");
		$(".pic-list ul").animate({"margin-left":"-"+parseInt(parseInt(suffixIndex)*picwidth)+"px"},timeOut);		
	});
	
	//上一张图
	$(".pic-prev").click(function(){
		if(suffixIndex!=0){
			suffixIndex--;
		}
		$("#f"+suffixIndex).addClass("pic-page-btn-cur").siblings(".pic-page-btn").removeClass("pic-page-btn-cur");
		$(".pic-list ul").animate({"margin-left":"-"+parseInt(parseInt(suffixIndex)*picwidth)+"px"},timeOut);
	});
	
});
function chengPic(pciIndex){
		$("#f"+pciIndex).addClass("pic-page-btn-cur").siblings(".pic-page-btn").removeClass("pic-page-btn-cur");
		$(".pic-list ul").animate({"margin-left":"-"+parseInt(parseInt(pciIndex)*picwidth)+"px"},timeOut);		
		suffixIndex=pciIndex;
	}
