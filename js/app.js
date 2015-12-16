/**
 * Created by User on 10/12/2015.
 */
$(document).ready(function(){
    /**
     * checks offset from top on scroll
     * makes menu fixed on the top of the site
     *
     * this function allows for the menu to become sticky when you scroll under it
     coz it starts after the initial header
      */
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
    /**
     * hides all the slides, shows only the actual
     * changes the slide in intervals
     * when click on dot changes the slide
     * this function is allows the testimonial statemetns to be a slider, it changes
    slides over time and also when you click on the slider nav (small dots) they change the slide
    */
    function testimonialsSlider (){
        var listWithPictures = $(".testimonialsSlider").find("li");
        var sliderNavDots = $(".sliderNav").find("li");
        var visiblePicture = 0;
        var countSlides = listWithPictures.length;

        listWithPictures.eq(visiblePicture).removeClass("invisible");
        sliderNavDots.eq(visiblePicture).removeClass("sliderNavNotActiveSlide");

        /**
          * hides all the slides, shows only the actual
          * changes dots
          * @param numberOfSlide (number)
          */
        function showSlide (numberOfSlide){
            listWithPictures.hide();
            listWithPictures.eq(numberOfSlide).fadeIn('800');
            sliderNavDots.addClass("sliderNavNotActiveSlide");
            sliderNavDots.eq(numberOfSlide).removeClass("sliderNavNotActiveSlide");
        }
        /**
         * increment visiblePicture in time,
         * call function to show/hide slides.
         */
        setInterval(function(){
           if(visiblePicture >= countSlides-1){
               visiblePicture = 0;
           }
            else{
               visiblePicture++;
           }
            showSlide(visiblePicture);
        }, 6000);
        /**
         * set event clikc on all dots
         * check which is clicked
         * call show/hide slides
         */
        sliderNavDots.on("click", function(){
            visiblePicture = $(this).index();
            showSlide(visiblePicture);
        });
    }
    /**
     * on hover overlay the portfolio image
     * it overlays the portfolio gallery with a opaque foreground and a cross
    in the middle of the picture this is a 'preparation phase' before the
    portfolioGalleryBigPictures */
    function portfolioGalleryHover (){
        var pictureBox = $(".portfolioPhotoItem");
        var portfolioImgOverlay = $(".portfolioImgOverlay");

        pictureBox.hover(function(){
           $(this).find(portfolioImgOverlay).show();
        }, function(){
            $(this).find(portfolioImgOverlay).hide();
        });
    }
    /**
     * on click on a gallery item cross overlay the whole site with a big picture
     * on click on the overlay close it
     *
     * when clicked in the cross(from portfolioGalleryHover function) in the middle of the
    gallery item it shows the big picture
     in the middle of the page with a opaque background */
    function portfolioGalleryBigPictures (){
        var clickablePlus = $(".portfolioImgOverlay").find("span");
        var bigPicture = $(".portfolioOverlayBig");

        clickablePlus.on("click", function(){
           $(this).parent().parent().next().addClass("portfolioOverlayBigDisplay");
        });
        bigPicture.on("click", function(){
            $(this).removeClass("portfolioOverlayBigDisplay");
        });
    }
    /**
     * click on button above portfolio items
     * sort depending on class
     *
     * it sorts portfolio items with a 3 different classes*/
    function portfolioGallerySort (){
        var showAll = $(".portfolioSelectAll");
        var showApps = $(".portfolioSelectApps");
        var showIcons = $(".portfolioSelectIcons");
        var showUi = $(".portfolioSelectUi");
        var itemWithApps = $(".portfolioApps");
        var itemWithIcons = $(".portfolioIcons");
        var itemWithUi = $(".portfolioUi");


        showAll.on("click", function(){
            itemWithApps.show();
            itemWithIcons.show();
            itemWithUi.show();
        });
        showApps.on("click", function(){
           itemWithIcons.hide();
           itemWithUi.hide();
            itemWithApps.show();
        });
        showIcons.on("click", function(){
            itemWithApps.hide();
            itemWithUi.hide();
            itemWithIcons.show();
        });
        showUi.on("click", function(){
            itemWithApps.hide();
            itemWithIcons.hide();
            itemWithUi.show();
        });
    }
    /**
     * form validation
     */
    function formvalidation (){

    }
    formvalidation();
    stickyMenu();
    testimonialsSlider();
    portfolioGalleryHover();
    portfolioGalleryBigPictures();
    portfolioGallerySort();
});