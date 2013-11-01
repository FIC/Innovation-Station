

$(document).ready(function($) {
	
    $("#menu").hide();

    $(".navicon").click(function(event) {
    	event.stopPropagation();
    	event.preventDefault()

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


    $('#sign-in').click(function(event) {
        event.stopPropagation();
        event.preventDefault();

        $('.modal').show();
        $('#sign-in-dialog').show();
    });

    $('#login-close').click(function(event) {
        $(this).parent().parent().hide();
        $(this).parent().hide();
    });

    $('#print-help').click(function(event) {
        $('#wizard').fadeIn(250);
    });

    $('#wizard-close').click(function(event) {
        $(this).parent().hide();
    });



});