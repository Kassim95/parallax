$(document).ready(function(){
	$('.paris').hide();
	$('.paris').fadeIn(4000);
	$('.text1').hide();
	$('.text2').hide();
	$('.text1').delay(2000).fadeIn(4000)
	// display pixels scrolled
	$(window).on('scroll', function() {
	  $('.pix').html($(this).scrollTop()+ " px");
	  if($(this).scrollTop() > 780){
	  	$('.text2').fadeIn(4000)
	  }
	});


});