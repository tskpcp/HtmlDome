/*
 * jQuery showLoading plugin v1.0
 * 
 * Copyright (c) 2009 Jim Keller
 * Context - http://www.contextllc.com
 * 
 * Dual licensed under the MIT and GPL licenses.
 *
 */

	jQuery.fn.showLoading = function(options) {
		
		    var indicatorID;
       		var settings = {
       			'addClass': '',
	       		'beforeShow': '', 
       			'afterShow': '',
       			'hPos': 'center', 
	       		'vPos': 'center',
	       		'parent': '',
       			'marginTop': 0,
       			'marginLeft': 0,
	       		'overlayWidth': null,
       			'overlayHeight': null
	       	};

		jQuery.extend(settings, options);
       	
       	var loadingDiv = jQuery('<div></div>');
		var overlayDiv = jQuery('<div></div>');

		//
		// Set up ID and classes
		//
		if ( settings.indicatorID ) {
			indicatorID = settings.indicatorID;
		}
		else {
			indicatorID = jQuery(this).attr('id');
		}
			
		jQuery(loadingDiv).attr('id', 'loading-indicator-' + indicatorID );
		jQuery(loadingDiv).addClass('loading-indicator');
		
		if ( settings.addClass ){
			jQuery(loadingDiv).addClass(settings.addClass);
		}


		
		//
		// Create the overlay
		//
		jQuery(overlayDiv).css('display', 'none');
		
		// Append to body, otherwise position() doesn't work on Webkit-based browsers
		jQuery(document.body).append(overlayDiv);
		
		//
		// Set overlay classes
		//
		jQuery(overlayDiv).attr('id', 'loading-indicator-' + indicatorID + '-overlay');
		
		jQuery(overlayDiv).addClass('loading-indicator-overlay');
		
		if ( settings.addClass ){
			jQuery(overlayDiv).addClass(settings.addClass + '-overlay');
		}
		
		//
		// Set any custom overlay CSS		
		//
       		if ( settings.overlayCSS ) {
       			jQuery(overlayDiv).css ( settings.overlayCSS );
       		}
       		
       		
       jQuery(overlayDiv).css ("height",getPageSize()[0]+"px");

		//
		// We have to append the element to the body first
		// or .width() won't work in Webkit-based browsers (e.g. Chrome, Safari)
		//
		jQuery(loadingDiv).css('display', 'none');
		jQuery(document.body).append(loadingDiv);
		
		//
		// set horizontal position
		//
		jQuery(loadingDiv).css('left',$(window).width()/2-80);
		jQuery(loadingDiv).css('top',($(window).height()-80)/2);
		
		
		//
		// Set up callback options
		//
		var callback_options = 
			{
				'overlay': overlayDiv,
				'indicator': loadingDiv,
				'element': this
			};
	
		//
		// beforeShow callback
		//
		if ( typeof(settings.beforeShow) == 'function' ) {
			settings.beforeShow( callback_options );
		}
		
		//
		// Show the overlay
		//
		jQuery(overlayDiv).show();
		
		//
		// Show the loading indicator
		//
		jQuery(loadingDiv).show();

		//
		// afterShow callback
		//
		if ( typeof(settings.afterShow) == 'function' ) {
			settings.afterShow( callback_options );
		}

		return this;
    	 };


	jQuery.fn.hideLoading = function(options) {
		
		
       		var settings = {};
	
       		jQuery.extend(settings, options);

		if ( settings.indicatorID ) {
			indicatorID = settings.indicatorID;
		}
		else {
			indicatorID = jQuery(this).attr('id');
		}
       	
   		jQuery(document.body).find('#loading-indicator-' + indicatorID ).remove();
		jQuery(document.body).find('#loading-indicator-' + indicatorID + '-overlay' ).remove();
		
		return this;
     	};
