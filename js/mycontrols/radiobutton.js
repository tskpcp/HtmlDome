function redio_button(firstredion,nextredion){
	var returnValue="N";
	if($("#"+firstredion).hasClass("radio_button")){
		$("#"+firstredion).removeClass("radio_button").addClass("radio_button_cur");
		$("#"+nextredion).removeClass("radio_button_cur").addClass("radio_button");
		returnValue="Y";
		
	}
	return returnValue;
};
$(".radiobutton_box li a").click(function(){
	$(".radiobutton_box li a").removeClass("radio_button_cur").addClass("radio_button");
	if($(this).hasClass("radio_button")){
		$(this).removeClass("radio_button").addClass("radio_button_cur");
	}
});
