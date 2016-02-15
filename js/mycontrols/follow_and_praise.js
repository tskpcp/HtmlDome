/*
 * sysType:系统类型，0:关注；1:点赞
 * controllID:当前dom
 * num:当前数量
 * userType:当前使用类型
 * userSubType:当前使用子类型
 * callback:回调函数
 */

(function($){
	$.fn.followpraise=function(options, callback){		
		var defaults={
				fsysType:0,
				controllID:"",
				num:0,
				userType:0,
				userSubType:0,
				callback:""};
		var options = $.extend(defaults, options);
		//debugger;
		var fwHtml=null;
		var thisClass=null;
        
		if(options.fsysType==0){
			
			if($(options.controllID).hasClass("faw_follow")){
				fwHtml='<i></i><span>关注('+parseInt(options.num+1)+')</span>';
				thisClass='faw_follow_c';
			}else{
				fwHtml='<i></i><span>关注('+parseInt(options.num-1)+')</span>';
				thisClass='faw_follow';
			}
		}
		if(options.fsysType==1){
			if($(options.controllID).hasClass("faw_praise")){
				fwHtml='<i></i><span>点赞('+parseInt(options.num+1)+')</span>';
				thisClass='faw_praise_c';
			}else{
				fwHtml='<i></i><span>点赞('+parseInt(options.num-1)+')</span>';
				thisClass='faw_praise';
			}
		}
		$(options.controllID).empty().html(fwHtml);
		$(options.controllID).removeClass().addClass(thisClass);
		
		
	}
})(jQuery); 

