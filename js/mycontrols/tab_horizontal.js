$(".tab-title-box li").click(function(){
	$(this).addClass("tab-title-cur").siblings("li").removeClass("tab-title-cur");
	$(".tab-box").find(".tab-box-centent").hide().eq($(this).index()).show();
});
