 $(function(){
 	var len=$(".tab_box_centent").length;
 	$(".tab_box_centent").each(function(i,value){
		  		if(i==(len-1)){
		  		  $(value).addClass("tab-box-content-border");
		  		}
	});
	$(".tab_title_box").click(function(){
		  
		  $(this).addClass("tab_box_cur").siblings("div").removeClass("tab_box_cur");
		  if( $(this).next().is(":hidden")){
		  	$(".tab_box_centent").hide();
		  	$(this).next().show();

		  }else{
		  	$(this).next().hide();
		  	$(this).removeClass("tab_box_cur");
		  }

	});
	
 });
 