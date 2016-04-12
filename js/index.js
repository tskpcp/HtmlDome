$(function(){
	var htheader="<div class='navBox'><ul><li>技术空间</li><li><ul class='navBox-nth2'>"+
			  "<li><a><span id='0'>首页</span></a></li>"+
			  "<li><a><span id='b'>blog</span></a></li>"+
			  "<li><a><span id='a'>baout me</span></a></li>"+
			  
			  "<li><a><span id='u'>us</span></a>"+
			  "</li></ul></li><li><input type='search'><a id='a-search'></a></li><li><a>登录</a><a>注册</a></li>"+
			  "</ul></div><!--顶部菜单--><div class='navSubBox'></div>";
	$('header').html(htheader);
	
	var htdata={'data':[{'key':'html/index.html','value':'前端技术'},
						{'key':2,'value':'产品经理'},
						{'key':3,'value':'云计算'},
						{'key':4,'value':'大数据'},
						{'key':5,'value':'软件设计师'},
						{'key':6,'value':'VR&AR'},
						{'key':7,'value':'关系型数据库'},
						{'key':8,'value':'类易企秀功能'}]};
	subBoxOnClick(htdata);
	$('.navSubBox').html(htemp);
	$(".navBox-nth2 li").click(function(){
		switch($(this).find('span').attr('id')){
			case 'b':
				htdata={'data':[{'key':1,'value':'b-1'},{'key':2,'value':'b-2'},{'key':3,'value':'b-3'},{'key':4,'value':'b-4'},{'key':5,'value':'b-5'},{'key':6,'value':'b-6'},{'key':7,'value':'b-7'}]};
				break;
			case 'a':
				htdata={'data':[{'key':1,'value':'a-1'},{'key':2,'value':'a-2'},{'key':3,'value':'a-3'},{'key':4,'value':'a-4'},{'key':5,'value':'a-5'},{'key':6,'value':'a-6'},{'key':7,'value':'a-7'}]};			
				break;
			case 'u':
				htdata={'data':[{'key':1,'value':'u-1'},{'key':2,'value':'u-2'},{'key':3,'value':'u-3'},{'key':4,'value':'u-4'},{'key':5,'value':'u-5'},{'key':6,'value':'u-6'},{'key':7,'value':'u-7'}]};				
				break;				
			default:
				htdata={'data':[{'key':'html/index.html','value':'前端技术'},
						{'key':2,'value':'产品经理'},
						{'key':3,'value':'云计算'},
						{'key':4,'value':'大数据'},
						{'key':5,'value':'软件设计师'},
						{'key':6,'value':'VR&AR'},
						{'key':7,'value':'关系型数据库'},
						{'key':8,'value':'类易企秀功能'}]};
				break;
		}
		subBoxOnClick(htdata);
	
	});
	function subBoxOnClick(obj){
		htemp='<ul>';
		for(i=0;i<obj.data.length;i++){
			with(obj.data[i]){
				htemp+='<li><a href="'+key+'" target="_blank"><span>'+value+'</span></a></li>';	
			}	 
		}
		htemp+='</ul>';	
		$('.navSubBox').html(htemp);
	}
	
});
