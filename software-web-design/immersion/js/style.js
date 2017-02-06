// JavaScript Document

$(document).ready(function(){
	"use strict";
	var $window = $(window);
	$('section[data-type="background"]').each(function(){
		var $bgobj = $(this);
		$(window).scroll(function(){
			//Put together final background position
			var yPos = -($window.scrollTop()/$bgobj.data('speed'));
			var coords = '50%'+yPos+'px';
			//Move the background
			$bgobj.css({bacgroundPosition:coords});
		});
	});
});