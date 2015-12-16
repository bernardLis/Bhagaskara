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
        var sliderNavDots = $(".sliderNav").find("li");
        var visiblePicture = 0;

        listWithPictures.eq(visiblePicture).removeClass("invisible");
        sliderNavDots.eq(visiblePicture).removeClass("sliderNavNotActiveSlide");

        function moveSlide(visiblePicture) {
            console.log("szybciutko?");
            listWithPictures.eq(visiblePicture).addClass("invisible");
            sliderNavDots.eq(visiblePicture).addClass("sliderNavNotActiveSlide");
            visiblePicture++;
            if(visiblePicture >= listWithPictures.length){
                visiblePicture=0;
            }
            listWithPictures.eq(visiblePicture).removeClass("invisible");
            sliderNavDots.eq(visiblePicture).removeClass("sliderNavNotActiveSlide")
        }


        setInterval(moveSlide(visiblePicture), 1000);

        sliderNavDots.on("click", function(){
           console.log("clickclack")
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
    galleryHover();
    function galleryBigPictures (){
        var clickablePlus = $(".portfolioImgOverlay").find("span");
        var bigPicture = $(".portfolioOverlayBig");
        clickablePlus.on("click", function(){
           $(this).parent().parent().next().addClass("portfolioOverlayBigDisplay");
        });
        bigPicture.on("click", function(){
            $(this).removeClass("portfolioOverlayBigDisplay");
        });
    }
    galleryBigPictures()
});