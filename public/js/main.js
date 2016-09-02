window.onload = function() {
  setTimeout(function(){
    $('.loader').hide();
    $('#fullpage').show();
  },2000)
  $('#fullpage').fullpage({
        //Navigation
        lockAnchors: false,
        navigation: false,
        navigationPosition: 'right',
        showActiveTooltip: false,
        slidesNavigation: true,
        slidesNavPosition: 'bottom',

        //Scrolling
        css3: true,
        scrollingSpeed: 700,
        autoScrolling: true,
        fitToSection: true,
        fitToSectionDelay: 1000,
        scrollBar: false,
        easing: 'easeInOutCubic',
        easingcss3: 'ease',
        loopBottom: false,
        loopTop: false,
        loopHorizontal: true,
        continuousVertical: false,
        continuousHorizontal: false,
        scrollHorizontally: false,
        interlockedSlides: false,
        resetSliders: false,
        scrollOverflow: false,
        scrollOverflowOptions: null,
        touchSensitivity: 15,
        normalScrollElementTouchThreshold: 5,
        bigSectionsDestination: null,

        //Accessibility
        keyboardScrolling: true,
        animateAnchor: true,
        recordHistory: true,

        //Design
        controlArrows: true,
        verticalCentered: true,
        responsiveWidth: 0,
        responsiveHeight: 0,
        responsiveSlides: false,

        //Custom selectors
        sectionSelector: '.section',
        slideSelector: '.slide',

        //events
        onLeave: function(index, nextIndex, direction){},
        afterLoad: function(anchorLink, index){
          if ($('.landing').hasClass('active')) {
            setTimeout((function() {
              $('.landing .section-content').animate({opacity:1, top:'50%'}, 1000);
            }), 2000);
          }
          if ($('.our-work').hasClass('active')) {
            $('.our-work i').fadeTo( "slow" , 1, function() {
                $('.our-work i').animate({'marginTop':'0px'}, 1000);
                $('.our-work h4,.our-work p').delay(500).fadeTo( "slow" , 1, function() {
                // Animation complete.
                });
            });
          }
          if ($('.who-we-are').hasClass('active')) {
            $('.who-we-are .section-content').animate({opacity:1, top:'50%'}, 1000);
          }
          if ($('.contact-us').hasClass('active')) {
              $('.contact-us-right').animate({width:'50%'}, 1500);
              $('.contact-us-left').animate({width:'50%'}, 1500);
              $('form').delay(1500).fadeTo( "slow" , 2, function() {
                // Animation complete.
              });
          }
        },
        afterRender: function(){},
        afterResize: function(){},
        afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){},
        onSlideLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex){}
    });
}
