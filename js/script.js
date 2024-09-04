$(document).ready(function() {
    $('#formValidation').submit(function(event) {
        event.preventDefault(); // Prevent the form from submitting

        // Show an alert message when the form is submitted
        alert('Message sent successfully');
        setTimeout(function(){
            $('#formValidation')[0].reset();
        }, 1000); 
    });
   

    // Hamburger menu toggle
    var navb = $(".nav2");
    $(".fa-xmark").on("click", function() {
        navb.hide();
    });
    $(".hamb").on("click", function() {
        navb.show();
    });
});