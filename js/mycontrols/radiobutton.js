function redio_button(firstredion,nextredion){
	var returnValue="N";
	if($("#"+firstredion).hasClass("radio-button")){
		$("#"+firstredion).removeClass("radio-button").addClass("radio-button-cur");
		$("#"+nextredion).removeClass("radio-button-cur").addClass("radio-button");
		returnValue="Y";
		
	}
	return returnValue;
};
$(".radiobutton-box li a").click(function(){
	$(".radiobutton-box li a").removeClass("radio-button-cur").addClass("radio-button");
	if($(this).hasClass("radio-button")){
		$(this).removeClass("radio-button").addClass("radio-button-cur");
	}
});
