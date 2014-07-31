$(document).ready(function(){

	$('section.content-right article').hide();


	$('section.content-center #related').click(function() {
		$('section.content-center ul').slideDown();
		$('section.content-right article').slideUp();
	});

	$('section.content-center #featured').click(function() {
		$('section.content-center ul').slideUp();
		$('section.content-center a.read-more').hide();
		$('section.content-right article').slideDown();
	});

});