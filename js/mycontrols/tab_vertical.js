 $(function(){
 	var len=$(".tab-box-centent").length;
 	$(".tab-box-centent").each(function(i,value){
		  		if(i==(len-1)){
		  		  $(value).addClass("tab-box-content-border");
		  		}
	});
	$(".tab-title-box").click(function(){
		  
		  $(this).addClass("tab-box-cur").siblings("div").removeClass("tab-box-cur");
		  if( $(this).next().is(":hidden")){
		  	$(".tab-box-centent").hide();
		  	$(this).next().show();

		  }else{
		  	$(this).next().hide();
		  	$(this).removeClass("tab-box-cur");
		  }

	});
	
 });
 