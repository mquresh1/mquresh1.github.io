$(document).ready(function() {
    // Transition navbar style on scroll
	$(window).on('scroll', function(){
		// rounded for ease
		var stop = Math.round($(window).scrollTop());
		
		if (stop > 100) {
			$('.navbar').addClass('on-main');
		} else {
			$('.navbar').removeClass('on-main');
		}
	});
});