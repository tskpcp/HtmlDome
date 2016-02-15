$(function() {
	//鼠标在一级菜单上
	$(".two a").hover(function() {

		//删除所有菜单的样式
		$(".h-menu").find("a").removeClass("h-menu-cur");

		//显示二级菜单
		$(this).parent().parent().find(".two-menu").stop().animate({
			height: "0px"
		}, 600).addClass("ow");
		$(this).parent().find(".two-three-menu").hide();
		$(this).parent().find(".two-menu").removeClass("ow").show().stop().animate({
			height: "150px"
		}, 600);
	}, function() {

		//鼠标离开一级菜单
		//鼠标在二级菜单上
		$(this).parent().find(".two-menu a").hover(function() {
			//给一级菜单添加样式
			$(this).parent().parent().parent().parent().find("a").addClass("h-menu-cur");
			//删除二级菜单的样式
			//alert($(this).parent().parent().find("li a").html());
			$(this).parent().parent().find("li a").removeClass("h-menu-cur");
			//显示三级菜单	
			$(this).parent().parent().find(".two-three-menu").hide();
			$(this).parent().find(".two-three-menu").removeClass("ow").show().stop().animate({
				height: "150px"
			}, 300);
		}, function() {

			//鼠标离开二级菜单
			//鼠标在三级菜单上
			$(this).parent().find(".two-three-menu a").hover(function() {
				//给一级菜单添加样式
				$(this).parent().parent().parent().parent().parent().parent().parent().find("a:first").addClass("h-menu-cur");
				//给三级菜单添加样式
				$(this).addClass("h-menu-cur");
			}, function() {

			});
			$(this).parent().find(".two-three-menu").hover(function() {}, function() {

				//鼠标离开三级菜单 隐藏三级菜单
				$(this).stop().animate({
					height: "0px"
				}, 600).addClass("ow");
				$(".h-menu").find("a").removeClass("h-menu-cur");
			});

		});
		//鼠标在二级菜单上
		$(this).parent().find(".two-menu").hover(function() {}, function() {

			//鼠标离开二级菜单 隐藏二级菜单
			$(this).stop().animate({
				height: "0px"
			}, 600).addClass("ow");

		});

	});
	/*three menu start*/
	/// wrap inner content of each anchor with first layer and append background layer
	$("#three li a").wrapInner('<span class="out"></span>').append('<span class="bg"></span>');
	// loop each anchor and add copy of text content
	$("#three li a").each(function() {
		$('<span class="over">' + $(this).text() + '</span>').appendTo(this);
	});
	$("#three li a").hover(function() {
		// this function is fired when the mouse is moved over
		$(".out", this).stop().animate({
			'top': '60px'
		}, 250); // move down - hide
		$(".over", this).stop().animate({
			'top': '0px'
		}, 250); // move down - show
		$(".bg", this).stop().animate({
			'top': '0px'
		}, 120); // move down - show
	}, function() {
		// this function is fired when the mouse is moved off
		$(".out", this).stop().animate({
			'top': '0px'
		}, 250); // move up - show
		$(".over", this).stop().animate({
			'top': '-60px'
		}, 250); // move up - hide
		$(".bg", this).stop().animate({
			'top': '-60px'
		}, 120); // move up - hide
	});

	/* three menu end*/
	/*four menu start*/
	$("#four li a").wrapInner('<span class="out"></span>');
	$("#four li a").each(function() {
		$('<span class="over">' + $(this).text() + '</span>').appendTo(this);
	});
	$("#four li a").hover(function() {
		$(".out", this).stop().animate({
			'top': '60px'
		}, 200); // move down - hide
		$(".over", this).stop().animate({
			'top': '0px'
		}, 200); // move down - show
	}, function() {
		$(".out", this).stop().animate({
			'top': '0px'
		}, 200); // move up - show
		$(".over", this).stop().animate({
			'top': '-60px'
		}, 200); // move up - hide
	});
	/*four menu end*/
	/*five menu start*/
	$(".five li").click(function (e) {
		// make sure we cannot click the slider
		if ($(this).hasClass('slider')) {
			return;
		}
		/* Add the slider movement */
		// what tab was pressed
		var whatTab = $(this).index();
		// Work out how far the slider needs to go
		var howFar = 100 * whatTab;
		$(".slider").css({
			left: howFar + "px"
		});
		/* Add the ripple */
		// Remove olds ones
		$(".ripple").remove();
		// Setup
		var posX = $(this).offset().left,
	  posY = $(this).offset().top,
	  buttonWidth = $(this).width(),
	  buttonHeight = $(this).height();
		// Add the element
		$(this).prepend("<span class='ripple'></span>");
		// Make it round!
		if (buttonWidth >= buttonHeight) {
			buttonHeight = buttonWidth;
		} else {
			buttonWidth = buttonHeight;
		}
		// Get the center of the element
		var x = e.pageX - posX - buttonWidth / 2;
		var y = e.pageY - posY - buttonHeight / 2;
		// Add the ripples CSS and start the animation
		$(".ripple").css({
			width: buttonWidth,
			height: buttonHeight,
			top: y + 'px',
			left: x + 'px'
		}).addClass("rippleEffect");
	});
	/*five menu end*/

});