$(document).ready(function(){

	$('section.content-right article').hide();


	$('section.content-center #related').click(function() {
		$('section.content-center ul').show();
		$('section.content-right article').hide();
	});

	$('section.content-center #featured').click(function() {
		$('section.content-center ul').hide();
		$('section.content-center a.read-more').hide();
		$('section.content-right article').show();
	});

});