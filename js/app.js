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
    stickyMenu();
    function testimonialsSlider (){
        var listWithPictures = $(".testimonialsSlider").find("li");
        var prevButton = $("#prevButton");
        var nextButton = $("#nextButton");
        var visiblePicture = 0;

        listWithPictures.eq(visiblePicture).removeClass("invisible");

        nextButton.on("click", function(){
           listWithPictures.eq(visiblePicture).addClass("invisible");
            visiblePicture++;
            if(visiblePicture >= listWithPictures.length){
                visiblePicture=0;
            }
            listWithPictures.eq(visiblePicture).removeClass("invisible");
        });
        prevButton.on("click", function(){
           listWithPictures.eq(visiblePicture).addClass("invisible");
            visiblePicture--;
            if(visiblePicture < 0){
                visiblePicture = listWithPictures.length-1;
            }
            listWithPictures.eq(visiblePicture).removeClass("invisible");
        });
    }
    testimonialsSlider();
    function galleryHover (){
        var pictureBox = $(".portfolioPhotoItem");
        var portfolioImgOverlay = $(".portfolioImgOverlay");

        pictureBox.hover(function(){
           $(this).find(portfolioImgOverlay).show();
        }, function(){
            $(this).find(portfolioImgOverlay).hide();
        });
    }
    galleryHover()

});