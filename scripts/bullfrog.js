$(document).ready(function(){

	$('section.content-right article').hide();

	$('section.content-center h2').click(function() {
		$('section.content-center ul').show();
		$('section.content-right article').hide();
	});

	$('section.content-right h2').click(function() {
		$('section.content-center ul').hide();
		$('section.content-center a.read-more').hide();
		$('section.content-right article').show();
	});

});