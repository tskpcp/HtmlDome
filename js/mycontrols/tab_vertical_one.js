 $(".tab-title-box").click(function(){
		  
		  $(this).addClass("tab-box-cur").siblings("div").removeClass("tab-box-cur");
		  if( $(this).next().is(":hidden")){
		  	$(this).next().show();
		  }else{
		  	$(this).next().hide();
		  	$(this).removeClass("tab-box-cur");
		  }

	});