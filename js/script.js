jQuery(document).ready(function($){
    $('.clickme').click(function(){
        $(this).closest('div').find('.hidden').toggleClass('showing');
    });
});