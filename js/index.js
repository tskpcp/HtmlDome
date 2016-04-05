$(function(){
	var htemp='<ul>';
	for(i=1;i<=10;i++){
		htemp+='<li><a><span>'+i+'</span></a></li>';
	}
	htemp+='</ul>';	
	$('.navSubBox').html(htemp);
	
	$(".navBox-nth2 li a span").click(function(){
		alert($(this).html());
	
	});
});
