/*单选*/
$(".redionbtn-box li a").click(function(){
	$(".redionbtn-box li a").removeClass("redionbtn-cur").addClass("redionbtn");
	if($(this).hasClass("redionbtn")){
		$(this).removeClass("redionbtn").addClass("redionbtn-cur");
	}
});
/*多选*/
$('.checkbox-box p a').click(function(){
	if($(this).hasClass("redionbtn")){
		$(this).removeClass("redionbtn").addClass("redionbtn-cur");
		$('.checkbox-box').find('a').removeClass("redionbtn").addClass("redionbtn-cur");
		/*循环获取 a标签的id的value
		  $('.checkbox-box').find('a').each(function ()
        		{
           			countallValue+="|"+$(this).attr("id");
       			});
       */      
	}else{
		$(this).removeClass("redionbtn-cur").addClass("redionbtn");
		$('.checkbox-box').find('a').removeClass("redionbtn-cur").addClass("redionbtn");
	}
});
$('.checkbox-box-data a').click(function(){
		if($(this).hasClass("redionbtn-cur")){
			$(this).removeClass("redionbtn-cur").addClass("redionbtn");
		}else{
			$(this).removeClass("redionbtn").addClass("redionbtn-cur");
		}
});
/*参考
 * // JavaScript Document
var returnValue="";
//多选
//cid:复选框ID ；oldstype：复选框未选中样式；onstyle：复选框选中后样式；dataid：显示数据容器ID;cc:dataid中的单选控件;ccname:dataid中的单选控件名称；
function checkboxall(cid,oldstype,onstyle,dataid,cc,ccname){
		 
		   //多选处理
		 if($('#'+cid).hasClass(oldstype)){
			  $('#'+cid).removeClass(oldstype).addClass(onstyle);
			  $('#'+dataid).find(cc).removeClass(oldstype).addClass(onstyle);
			  $('#'+dataid).find(cc).each(function ()
        		{
           			returnValue+="|"+$(this).attr(ccname);
       			});

		  }else{
			  $('#'+cid).removeClass(onstyle).addClass(oldstype); 
			  $('#'+dataid).find(cc).removeClass(onstyle).addClass(oldstype);
			  returnValue="no";
		  }  
		
		  return returnValue;
	}
//dataid：显示数据容器ID;；oldstype：复选框未选中样式；onstyle：复选框选中后样式；cc:dataid中的单选控件;ccname:dataid中的单选控件名称；
function checkbox(dataid,oldstype,onstyle){
					 if(  returnValue=="no"){
						   returnValue="";
					}
					 if($('#'+dataid).hasClass(oldstype)){
			 			 $('#'+dataid).removeClass(oldstype).addClass(onstyle);
			 			 returnValue+="|"+dataid;
		 			 }else{
			 		    $('#'+dataid).removeClass(onstyle).addClass(oldstype); 
			  			if(returnValue.length>0){
				 		  returnValue=returnValue.replace("|"+dataid,"");
			   			}
			   			
		 	 		}
		  if(returnValue.length==0){
			   returnValue="no"
			  }	 
		  return returnValue;
	}
	*/
 
