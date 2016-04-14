function mark_layer(){
	if(!$("#prompt").hasClass(".prompt-body")){
    	   $("body").append(' <div id="prompt" class="prompt-body"></div>');
       }
    $("#prompt").css("height",$(document.body).height());
}
