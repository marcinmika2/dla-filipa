
$(document).ready(function(){
    'use strict';

$('.content').hide();
	
		$('.menu-1').click(function(){
			$('.content').slideUp();
			$('.menu1').slideDown();
			console.log('dziala');
	});
	
		$('.menu-2').click(function(){
			$('.content').slideUp();
			$('.menu2').slideDown();
			console.log('dziala');
	});
	
		$('.menu-3').click(function(){
			$('.content').slideUp();
			$('.menu3').slideDown();
			console.log('dziala');
	});
	
		$('.menu-4').click(function(){
			$('.content').slideUp();
			$('.menu4').slideDown();
			console.log('dziala');
	});
});