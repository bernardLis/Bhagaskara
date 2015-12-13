/**
 * Created by User on 10/12/2015.
 */
$(document).ready(function(){
    function stickyMenu (){
        var stickyMenu =  $(".menuSticky");
        var menuOffsetFromTop = stickyMenu.position().top;
        $(window).on("scroll", function(){
            if($(window).scrollTop()>menuOffsetFromTop){
                stickyMenu.addClass("sticky");
            }
            else{
                stickyMenu.removeClass("sticky");
            }
        });
    }
    stickyMenu()


});