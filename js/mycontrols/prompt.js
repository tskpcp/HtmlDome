
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
	$.fn.prompt=function(options, callback){
		var defaults = {  
                   title: "系统提示",  
                 ccontent:"",
	             systype:0,
	             callBack:null,
	             btnCancel:false
 	         };
       var options = $.extend(defaults, options);
       if(!$("#prompt").hasClass(".prompt-body")){
    	   $("body").append(' <div id="prompt" class="prompt-body"></div>');
       }
        $("#prompt").css("height",getPageSize()[1]);
       var box =220;
	  // var th= $(window).scrollTop() + getPageSize()[3]/1.6-box;
	   var th=$(window).height()/2-box;
	   var rw =$(window).width()/2-box;
	   var fbmodalHtml='\
	  <div class="prompt">\
	  <div class="prompt-box">\
       <div class="prompt-title">\
			<p id="prompt-title"></p>\
			<a class="prompt-title-a"></a>\
		</div>\
		<div class="prompt-content">\
			<ul>\
				<li><i/></li>\
				<li><p id="prompt-content-info"></p></li>\
			</ul>\
		</div>\
<div class="prompt-button">\
			<a id="prompt-btn-ok" class="prompt-btn-bgc">确定</a>\
			<a id="prompt-btn-cancel" class="prompt-btn-bgc btn-bgc-cancel">取消</a>\
		</div>\
</div>\
</div>';
	  
       $("body").append(fbmodalHtml);
       if(options.btnCancel){
       	$("#prompt-btn-cancel").show();
       }else{
       	$("#prompt-btn-cancel").hide();
       }
        
      // $("#prompt-title").html(options.title);
       $("#prompt-content-info").html(options.ccontent);
       

       var iclass="prompt-content-img-i-t";
       var pfontclass="prompt-content-t-c";
       var okeyclass="btn-bgc-okey-t-c";
       		
       if(options.systype==1 ||options.systype==4){
       	  if(options.systype==1){//1：叹号
       	  	iclass="prompt-content-img-i-t";
       	  }
       	  if(options.systype==4){//4：叉号
       	  	iclass="prompt-content-img-i-c";
       	  }
       	  pfontclass="prompt-content-t-c";
       	  okeyclass="btn-bgc-okey-t-c";
       }
       if(options.systype==2 ||options.systype==3){
       	 if(options.systype==2){//2：问号
       	  	iclass="prompt-content-img-i-w";
       	  }
       	  if(options.systype==3){//3：对号
       	  	iclass="prompt-content-img-i-d";
       	  }
       	  pfontclass="prompt-content-w-d";
       	   okeyclass="btn-bgc-okey-w-d";
       }
       $(".prompt-content ul li i").addClass(iclass);
       $(".prompt-content ul li p").addClass(pfontclass);
       if(options.ccontent.length>18){
       		$(".prompt-content ul li p").css({"width":"280px","size":"12px"});
       		$(".prompt-content ul").css({"padding-top":"10px","margin-left":"25px"});
       }
       
       $("#prompt-btn-ok").addClass(okeyclass);
       $(".prompt").css({"top":th,"left":rw});   
       
       if(!options.btnCancel){
       	 if(options.callBack)
   	    	{
        		callback =options.callBack;
    		}   
       }
        $("#prompt-btn-ok").click(function () {

        	 $("#prompt").remove();
        	  $(".prompt").remove();
        	 if(options.btnCancel){
        	 	 callback(true);
        	 }else{
        	 	if(callback && typeof(callback) == 'function')
       		 	{
            		callback();
        	 	}	
        	 }
      		
        });
		$("#prompt-btn-cancel").click(function () {
        	 $("#prompt").remove();
        	 $(".prompt").remove();
      		 callback(false);
        });
		$(".prompt-title a").click(function(){
			$("#prompt").remove();
			$(".prompt").remove();
		});
	}
})(jQuery); 

function prompt(ccontent){
	$(".prompt").prompt({systype:1, ccontent: ccontent},null);
}
function prompt(ccontent,callback){
	$(".prompt").prompt({systype:1, ccontent: ccontent,callBack:callback},null);
}
function prompt(systype,ccontent){
	$(".prompt").prompt({systype:systype, ccontent: ccontent},null);
}
function prompt(systype,ccontent,callback){
	$(".prompt").prompt({systype:systype, ccontent: ccontent,callBack:callback},null);
}
/*
 调用方法
 1、类似confirm并嵌套使用
$(".prompt").prompt({ccontent: "是否要取消关注?",
		     systype: 2,
		     btnCancel: true},
		     function(callback) {if (callback) {}});
2、类似alert使用
prompt("默认叹号");
prompt("默认叹号，带回调函数",function() {location.reload();});
prompt(1,"可以更改符号的函数调用");
prompt(1,"可以更改符号的函数调用",function() {location.reload();});
 */