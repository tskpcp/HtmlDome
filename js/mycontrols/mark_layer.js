function mark_layer(){
	var fileref = document.createElement('script');
        		fileref.setAttribute("type","text/javascript");
       			fileref.setAttribute("src","../../js/common.js");
       			document.getElementsByTagName("head")[0].appendChild(fileref);
	if(!$("#prompt").hasClass(".prompt_body")){
    	   $("body").append(' <div id="prompt" class="prompt_body"></div>');
       }
    $("#prompt").css("height",getPageSize()[1]);
}
