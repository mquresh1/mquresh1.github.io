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
	
	// Add smooth scrolling to all links
	$("a").on('click', function(event){
		if(this.hash !== "") {
			// Prevent default anchor click behavior
			event.preventDefault();
			
			// Store hash
			var hash = this.hash;
			
			// 800 milliseconds to scroll
			$('html, body').animate({
				scrollTop: $(hash).offset().top
			}, 800, function(){
				
				// Add hash to URL when done scrolling (default behavior)
				window.location.hash = hash;
			});
		}
	});
});