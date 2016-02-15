$(".tab_title_box li").click(function(){
	$(this).addClass("tab_title_cur").siblings("li").removeClass("tab_title_cur");
	$(".tab_box").find(".tab_box_centent").hide().eq($(this).index()).show();
});
