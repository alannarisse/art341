$(function() {


// when I click on the first video button, I'm going to change display: none to display:block on the video with class .first-vid

    $( ".first-vid-btn" ).click(function () {
        $( ".first-vid" ).css( 'display', 'block' );
        $( ".second-vid" ).css( 'display', 'none' );
    });

	$( ".second-vid-btn" ).click(function () {
        $( ".first-vid" ).css( 'display', 'none' );
        $( ".second-vid" ).css( 'display', 'block' );
    });


// dont remove this line 
  });