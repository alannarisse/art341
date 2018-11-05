$(function() {
	

	// Change .banner whenever a .thumb div is hovered over
	// and return to normal state when user rolls off .thumb
	$('.one').hover(function() {
		$('.banner').addClass('one').html('RED');
	}, function() {
		$('.banner').removeClass('one').html('');
	});	

	$('.two').hover(function() {
		$('.banner').addClass('two').html('GREEN');
	}, function() {
		$('.banner').removeClass('two').html('');
	});	

	$('.three').hover(function() {
		$('.banner').addClass('three').html('BLUE');
	}, function() {
		$('.banner').removeClass('three').html('');
	});	

	$('.four').hover(function() {
		$('.banner').addClass('four').html('YELLOW');
	}, function() {
		$('.banner').removeClass('four').html('');
	});

	
	// Hide accordion content with javascript instead of CSS
	// so that it is still visible in case the javascript 
	// doesn't load.
	$('.collapsable p').hide();

	//Toggles a slide on any h2 tags inside the sidebar.
	$('.collapsable h3').click(function() {
		$(this).next().slideToggle();
	});
	


	// Toggle checklist items as finished/unfinished
	$('.checklist li').click(function() {
		$(this).toggleClass('finished');
	});
	
	// Remove all .finished checklist items
	$('.clear').click(function() {
		$('.finished').fadeOut();
	});
	
	// Restore all .finished checklist items
	$('.reset').click(function() {
		$('.checklist li').fadeIn().removeClass("finished");
	});



});