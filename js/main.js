

$(document).ready(function($) {
	
    $("#menu").hide();

    $(".navicon").click(function(event) {
    	event.stopPropagation();
    	event.preventDefault()

    	console.log('click');

        $("#nav").slideToggle("slow");
         return false;



    });
});