

$(document).ready(function($) {
	
    $("#menu").hide();

    $(".navicon").click(function(event) {
    	event.stopPropagation();
    	event.preventDefault()

    	console.log('click');

        $("#nav").slideToggle(200);
         return false;
    });


    $('.remove').click(function(event) {
        $('.modal').show();
    	 $('#confirm-delete').show();
    });


    $('.cancel').click(function(event) {
        $('.modal').show();
        $('#confirm-cancel').show();
    });

    $('#confirm, .cancelme').click(function(event) {
    	$(this).parent().hide();
        $(this).parent().parent().hide();
    });




});