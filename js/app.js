$(document).ready(function() {

	/*$('#beer-cheers').hide().fadeIn(1000);*/4

	$('#quiz').hide()
	/*$('#intro').*/
	$('#intro').show()
	$('#outro').hide()

	
	$('#begin').one('click', function(){
		$('#quiz').fadeIn(1000);
		$('#intro').fadeOut(1000);
	});
	

});