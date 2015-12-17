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
     * Show more less button in gallery, DOES NOT WORK.
     * */
    /*
    function portfolioGalleryShowMore (){
        var portfolioHiddenItem = $(".portfolioHide");
        var portfolioButtonClick = $(".portfolioBottomButton");
        var portfolioButtonMore = $(".portfolioButtonMore");
        var portfolioButtonLess = $(".portfolioButtonLess");
        var portfolioItems = $(".portfolioCol");

        portfolioButtonClick.on("click", function(event){
            event.preventDefault();
            portfolioItems.toggleClass("portfolioHide");
            portfolioButtonMore.toggleClass("portfolioHiddenButton");
            portfolioButtonLess.toggleClass("portfolioHiddenButton");
            });
        portfolioButtonMore.on("click", function(event){
            portfolioItems.removeClass(".portfolioHide");

        });
    }
*/

    /**
     * form validation
     * checks whether name is not numeric and has more than 5 characters
     * checks whether email is correctly written
     */
    function formValidation (){
        var name = $("#contactName");
        var email = $("#contactEmail");
        var contactForm = $(".contactForm");
        var formError = $(".formError");
        /**
         *
         * checks if the value in the field is numeric and longer than 5 characters
         * if yes displays warning if no everything is fine.
         *
         */
        name.on("input", function(event){
            if($.isNumeric($(this).val())===true || $(this).val().length<5){
                $(this).next().removeClass("formErrorHide");
                $(this).next().addClass("formErrorShow");
            }
            else{
                $(this).next().removeClass("formErrorShow");
                $(this).next().addClass("formErrorHide");
            }
        });
        /**
         * checks whether email is correctly written
         * if not displays message
         * @param $email
         * @returns {boolean}
         */
        function validateEmail($email) {
            var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
            return $email.length > 3 && emailReg.test($email);
        }
        email.on("input", function(event){
            if(validateEmail(email.val())){
                console.log("Asdasdads");
                $(this).next().removeClass("formErrorShow");
                $(this).next().addClass("formErrorHide");
            }
            else{
                console.log("qwoieuqowiru");
                $(this).next().removeClass("formErrorHide");
                $(this).next().addClass("formErrorShow");
            }
        });

    }

    /**
     * this 2 functions are connected with each other.
     * first is responsible for changing the skillsset depending on a choosen team member
     * second is resposible for changing the teammember on the arrow clikc.
     *
     * first - takes data sets from html data sets and adds it as widths of the colored bars
     * and takes said data sets and adds it as a number to next to the skill name.
     */
    function teamSetSkillSets (){
        var active = $(".active");
        var webBar = $(".fullWebBar");
        var htmlBar = $(".fullHtmlBar");
        var graphicBar = $(".fullGraphicBar");
        var uiBar = $(".fullUiBar");
        var webPercent = $("#webPercent");
        var htmlPercent = $("#htmlPercent");
        var graphicPercent = $("#graphicPercent");
        var uiPercent = $("#uiPercent");
        var dataWeb = active.data('web');
        var dataHtml = active.data('html');
        var dataGraphic = active.data('graphic');
        var dataUi = active.data('ui');

        webPercent.html(dataWeb);
        htmlPercent.html(dataHtml);
        graphicPercent.html(dataGraphic);
        uiPercent.html(dataUi);

        webBar.animate({
            width:dataWeb
        });
        htmlBar.animate({
           width:dataHtml
        });
        graphicBar.animate({
           width:dataGraphic
        });
        uiBar.animate({
           width:dataUi
        });
    }
    /**
     * when clicked left the highlighted team member changes to the one left
     * when clicked right the highlighted team memebr changes to the one right
     *
     */
    function teamFunctionality (){
        var teamArrowLeft = $(".teamArrowLeft");
        var teamArrowRight = $(".teamArrowRight");
        var teamMembers = $(".teamOpaque");

        teamArrowLeft.on("click", function(){
            var active = $(".active");
            var indexActive = active.index();
            if(indexActive < 0){
                indexActive=teamMembers.length-1;
            }
            else {
                indexActive--;
            }
            var prevActive = teamMembers.eq(indexActive);
            teamMembers.removeClass("active");
            prevActive.addClass("active");
            teamSetSkillSets();
        });
        teamArrowRight.on("click", function(){
            console.log("clickclack");
            var active = $(".active");
            var indexActive = active.index();
            if(indexActive>=teamMembers.length-1){
                indexActive=0;
            }
            else{
                indexActive++;
            }
            var nextActive = teamMembers.eq(indexActive);
            teamMembers.removeClass("active");
            nextActive.addClass("active");
            teamSetSkillSets();
        });
    }


    formValidation();
    teamSetSkillSets();
    teamFunctionality();
    stickyMenu();
    testimonialsSlider();
    //portfolioGalleryShowMore();
    portfolioGalleryHover();
    portfolioGalleryBigPictures();
    portfolioGallerySort();
});