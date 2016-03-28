$(function(){
	var hederHeight=$("header").height();
	var footerHeight=$("footer").height();
	var windowHeight=$(window).height();
	var navHeight=$("nav").height();
	var contentHeight=0;
	var tempHeight=0;
	tempHeight=windowHeight-hederHeight-footerHeight;
	if(tempHeight>navHeight){
		contentHeight=tempHeight;
	}else{
		contentHeight=navHeight;
	}
	$("nav").css({height:contentHeight});
	$("section").css({height:contentHeight});
	$(".tooltip-tip").click(function(){
		alert("aa");
	});
});
