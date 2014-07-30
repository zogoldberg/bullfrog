$(document).ready(function(){
//jQuery code goes here

	$('header').hide().fadeIn(2000).fadeOut(2000);
	$('#main-nav').click(function() {
		$('header').slideToggle(3000);

	});

	// $('section.content-center a').click(function() {
	// 	alert('you clicked a link');
	// });

	//target links in nav and when you hover over them, log a message in the console

	$('#main-nav a').hover(function() {
		console.log('hovering over links');
	});

	// hide all but the first link in center content links list
	function hideRestLinks() {
		$('section.content-center ul a').slice(1).hide();
	}

	// Hide all recent content links in the list
	// show first recent content link
    hideRestLinks();
    // $('section.content-center ul a:first').show();
    // when hovering on a recent content link, show the next link
    $('section.content-center ul a').hover(function() {
    	$(this).parent().next().children('a').show();
    });

    //add a minimize link after view all link
    $('section.content-center').append('<a href="#" id="minimize">Minimize</a>');
    //when clicking minimize, hide all but first link
    $('#minimize').click(function() {
    	hideRestLinks();
    });
 
 	// adding a class...then add css styling for .froggy
    // $('#horned-frog').click(function() {
    // 	$('body').toggleClass('froggy');
    // });

});