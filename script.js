$(document).ready(function() {
    $("#stream1_btn").on("click", function() {
        $(".stream1").removeClass('highlight_stream');
        $(".stream2").removeClass('highlight_stream');
        $(".stream3").removeClass('highlight_stream');
        $(".stream1").addClass('highlight_stream');

        //(".stream1").show(); // Makes element show
        //(".stream1").show("slow"); // Passing slow speed to the method, for animation
        //(".stream1").show("medium"); // Passing medium speed to the method, for animation
        //(".stream1").show("fast"); // Passing fast speed to the method, for animation
        //(".stream1").show(1000); // Passing 1000 milliseconds to the method, for animation

        //(".stream1").hide(); // Makes element vanish
        //(".stream1").hide("slow"); // Passing slow speed to the method, for animation
        //(".stream1").hide("medium"); // Passing medium speed to the method, for animation
        //(".stream1").hide("fast"); // Passing fast speed to the method, for animation
        //(".stream1").hide(1000); // Passing 1000 milliseconds to the method, for animation

        //(".stream1").toggle(); // If element is shown it will be hidden - and vice-versa. Works like on/off button
        //(".stream1").toggle(1000); // Passing 1000 milliseconds to the method, i.e. sets speed

        //(".stream1").slideDown(); // Slides down a hidden HTML element so it becomes visible
        //(".stream1").slideDown(1000); // Passing 1000 milliseconds to the method, i.e. sets speed

        //(".stream1").slideUp(); // Slides up a visible HTML element so it becomes invisible
        //(".stream1").slideUp(1000); // Passing 1000 milliseconds to the method, i.e. sets speed

        //(".stream1").slideToggle(); // Shows an element if it is hidden, or hides it if it is visible
        //(".stream1").slideToggle(1000); // Passing 1000 milliseconds to the method, i.e. sets speed

        //(".stream1").fadeIn(); // Fades in hidden element
        //(".stream1").fadeIn(1000); // Passing 1000 milliseconds to the method, i.e. sets speed

        //(".stream1").fadeOut(); // Fades out visible element
        //(".stream1").fadeOut(1000); // Passing 1000 milliseconds to the method, i.e. sets speed

        //(".stream1").fadeToggle(); // Shows an element if it is hidden, or hides it if it is visible
        //(".stream1").fadeToggle(1000); // Passing 1000 milliseconds to the method, i.e. sets speed

        //(".stream1").fadeTo(1000, 0.5); // Fades an element partially in or out - makes it transparent. Speed and opacity is always passed to the method

   });
   $("#stream2_btn").on("click", function() {
        $(".stream1").removeClass('highlight_stream');
        $(".stream2").removeClass('highlight_stream');
        $(".stream3").removeClass('highlight_stream');
        $(".stream2").addClass('highlight_stream');
   });
   $("#stream3_btn").on("click", function() {
        $(".stream1").removeClass('highlight_stream');
        $(".stream2").removeClass('highlight_stream');
        $(".stream3").removeClass('highlight_stream');
        $(".stream3").addClass('highlight_stream');
   });
}); 