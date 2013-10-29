

$(document).ready(function($) {
	
    $("#menu").hide();

    $(".navicon").click(function(event) {
    	event.stopPropagation();
    	event.preventDefault()

    	console.log('click');

        $("#nav").slideToggle(200);
         return false;
    });


    $('.btn').click(function(event) {
    	 $('#confirm-delete').show();
    });

    $('.confirm-delete, .cancelme').click(function(event) {
    	$(this).parent().hide();
    });
});