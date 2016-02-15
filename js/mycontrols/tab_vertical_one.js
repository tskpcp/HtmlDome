 $(".tab_title_box").click(function(){
		  
		  $(this).addClass("tab_box_cur").siblings("div").removeClass("tab_box_cur");
		  if( $(this).next().is(":hidden")){
		  	$(this).next().show();
		  }else{
		  	$(this).next().hide();
		  	$(this).removeClass("tab_box_cur");
		  }

	});