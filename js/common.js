;
(function($) {

	$.extend({
		NV: function(name) {
			var NV = {};
			var UA = navigator.userAgent.toLowerCase();
			try {
				NV.name = !-[1, ] ? 'ie' :
					(UA.indexOf("firefox") > 0) ? 'firefox' :
					(UA.indexOf("chrome") > 0) ? 'chrome' :
					window.opera ? 'opera' :
					window.openDatabase ? 'safari' :
					'unkonw';
			} catch (e) {};
			try {
				NV.version = (NV.name == 'ie') ? UA.match(/msie ([\d.]+)/)[1] :
					(NV.name == 'firefox') ? UA.match(/firefox\/([\d.]+)/)[1] :
					(NV.name == 'chrome') ? UA.match(/chrome\/([\d.]+)/)[1] :
					(NV.name == 'opera') ? UA.match(/opera.([\d.]+)/)[1] :
					(NV.name == 'safari') ? UA.match(/version\/([\d.]+)/)[1] :
					'0';
			} catch (e) {};
			try {
				NV.shell = (UA.indexOf('360ee') > -1) ? '360极速浏览器' :
					(UA.indexOf('360se') > -1) ? '360安全浏览器' :
					(UA.indexOf('se') > -1) ? '搜狗浏览器' :
					(UA.indexOf('aoyou') > -1) ? '遨游浏览器' :
					(UA.indexOf('theworld') > -1) ? '世界之窗浏览器' :
					(UA.indexOf('worldchrome') > -1) ? '世界之窗极速浏览器' :
					(UA.indexOf('greenbrowser') > -1) ? '绿色浏览器' :
					(UA.indexOf('qqbrowser') > -1) ? 'QQ浏览器' :
					(UA.indexOf('baidu') > -1) ? '百度浏览器' :
					'未知或无壳';
			} catch (e) {}
			switch (name) {
				case 'ua':
				case 'UA':
					br = UA;
					break;
				case 'name':
					br = NV.name;
					break;
				case 'version':
					br = NV.version;
					break;
				case 'shell':
					br = NV.shell;
					break;
				default:
					br = NV.name;
			}
			return br;
		}
	});
})(jQuery);
function loadjscssfile(filename,filetype){

    if(filetype == "js"){
        var fileref = document.createElement('script');
        fileref.setAttribute("type","text/javascript");
        fileref.setAttribute("src",filename);
    }else if(filetype == "css"){
    
        var fileref = document.createElement('link');
        fileref.setAttribute("rel","stylesheet");
        fileref.setAttribute("type","text/css");
        fileref.setAttribute("href",filename);
    }
   if(typeof fileref != "undefined"){
        document.getElementsByTagName("head")[0].appendChild(fileref);
    }
    
}
/*
 * 获取浏览器和内容部分的宽高
 * getPageSize()[0](pageWidth)，getPageSize()[1](pageHeight)
 * getPageSize()[2](windowWidth)，getPageSize()[3](windowHeight)
 */
function getPageSize()
{
    var xScroll, yScroll;
    if (window.innerHeight && window.scrollMaxY)
    {
        xScroll = window.innerWidth + window.scrollMaxX;
        yScroll = window.innerHeight + window.scrollMaxY;
    } else {
        if (document.body.scrollHeight > document.body.offsetHeight)
        { // all but Explorer Mac
            xScroll = document.body.scrollWidth;
            yScroll = document.body.scrollHeight;
        } else { // Explorer Mac...would also work in Explorer 6 Strict, Mozilla and Safari
            xScroll = document.body.offsetWidth;
            yScroll = document.body.offsetHeight;
        }
    }
    var windowWidth, windowHeight;
    if (self.innerHeight)
    { // all except Explorer
        if (document.documentElement.clientWidth)
        {
            windowWidth = document.documentElement.clientWidth;
        } else {
            windowWidth = self.innerWidth;
        }
        windowHeight = self.innerHeight;
    } else {
        if (document.documentElement && document.documentElement.clientHeight)
        { // Explorer 6 Strict Mode
            windowWidth = document.documentElement.clientWidth;
            windowHeight = document.documentElement.clientHeight;
        } else {
            if (document.body)
            { // other Explorers
                windowWidth = document.body.clientWidth;
                windowHeight = document.body.clientHeight;
            }
        }
    }
    // for small pages with total height less then height of the viewport
    if (yScroll < windowHeight)
    {
        pageHeight = windowHeight;
    } else {
        pageHeight = yScroll;
    }
    // for small pages with total width less then width of the viewport
    if (xScroll < windowWidth)
    {
        pageWidth = xScroll;
    } else {
        pageWidth = windowWidth;
    }
    arrayPageSize = new Array(pageWidth, pageHeight, windowWidth, windowHeight);
    return arrayPageSize;
}