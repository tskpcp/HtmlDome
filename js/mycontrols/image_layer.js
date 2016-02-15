$(function(){
	var dataHtml='<div class="item-border">\
			<div class="item-image">\
				<div class="item-image-layer">\
					<div class="item-image-top">\
						<ul>\
						<li>1</li>\
						<li>2</li>\
						<li>3</li>\
						</ul>\
					</div>\
					<div class="item-image-bottom">\
						<ul>\
						<li>4</li>\
						<li>5</li>\
						<li>6</li>\
						</ul>\
					</div>\
				</div>\
				<img src="../../img/pt_icon.png">\
			</div>\
			</div>';
	
		for(i=0;i<12;i++){
		   $(".main-layer").append(dataHtml);
		}
		for(i=0;i<12;i++){	
			
		   if((i+1)%4!=0){
		   	$(".main-layer").children().eq(i).css("margin-right","20px");
		   	$(".main-layer").children().eq(i).attr("id",i+"-"+(i+1));
		   	
		  }
		  if(i>3){
		 	$(".main-layer").children().eq(i).css("margin-top","20px");
		  }
		}
	
	
	$(".item-image").hover(function(){
	    $(this).find(".item-image-layer").stop().animate({height:"200px"},600);
	},function(){
		$(this).find(".item-image-layer").stop().animate({height:"0px"},600);
	});
	
});
/*
 * <div class="item-border">
			<div class="item-image">
				<div class="item-image-layer">
					<div class="item-image-top">
						<ul>
						<li>1</li>
						<li>2</li>
						<li>3</li>
						</ul>
					</div>
					<div class="item-image-bottom">
						<ul>
						<li>4</li>
						<li>5</li>
						<li>6</li>
						</ul>
					</div>
				</div>
				<img src="../../img/pt_icon.png">
			</div>
			</div>
 */