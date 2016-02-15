
/*
 * title:标题
 * content:正文内容
 * btnCancel:false隐藏取消按钮；true显示取消按钮
 * systype:提示符号
 * 		    0:无
 * 			1：叹号
 *          2：问号
 *          3：对号
 *          4：叉号
 */

(function($){
	$.fn.popup=function(options, callback){
		var defaults = {  
                   title: "系统提示",  
                 ccontent:null,
	             systype:0,
	             callBack:null,
	             btnCancel:false
 	         };
       var options = $.extend(defaults, options);
       if(!$("#popup").hasClass(".pop_body")){
    	   $("body").append(' <div id="popup" class="pop_body"></div>');
       } 
	}
})(jQuery); 
