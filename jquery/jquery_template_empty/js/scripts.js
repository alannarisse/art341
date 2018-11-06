$(function(){
    
    $('.one').hover(function(){
        $('.banner').addClass('one');
        $('.banner').html('rEd');
    });
    
    $('.collapsable p').hide();
    
    
    $('.collapsable h3').click(function(){
        $(this).next().slideToggle(3000);
    });
    
    
});

