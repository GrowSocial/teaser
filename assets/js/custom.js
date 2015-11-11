
/*=============================================================
    Authour URI: www.binarytheme.com
    License: Commons Attribution 3.0

    http://creativecommons.org/licenses/by/3.0/

    100% Free To use For Personal And Commercial Use.
    IN EXCHANGE JUST GIVE US CREDIT US AND TELL YOUR FRIENDS ABOUT US
   
    ========================================================  */

(function ($) {
    "use strict";
    var mainApp = {

        main_fun: function () {

            //PRE LOADER SCRIPTS
            $(window).load(function () {
                $("#loader").fadeOut();
                $("#pre-div").delay(1000).fadeOut("slow");
            });

            // SLIDER SCRIPTS
            $('#carousel-slider').carousel({
                interval: 2000 //TIME IN MILLI SECONDS
            })
            //  SCROLL SCRIPT FUNCTION FOR NAVBAR 
            $(function () {
                $('.move-me a').bind('click', function (event) { //just pass move-me in design and start scrolling
                    var $anchor = $(this);
                    $('html, body').stop().animate({
                        scrollTop: $($anchor.attr('href')).offset().top
                    }, 1000, 'easeInOutQuad');
                    event.preventDefault();
                });
            });
                      

            //TESTIMONIAL & SLIDEER SPEED
            $('.carousel').carousel({
                interval: 4000 //TIME IN MILLI SECONDS
            })
            // PRETTYPHOTO FUNCTION 

            $("a.preview").prettyPhoto({
                social_tools: false
            });
            
           
            /*====================================
            WRITE YOUR SCRIPTS HERE
            ======================================*/
            
            // AJAX form submission to getsimpleform.com

            // on refresh, remove the disabled property
            $('#button-submit').prop( "disabled", false );
            
            $( "#ajax-form" ).validate();
            
            $('#ajax-form').submit(function(){
              if ( !$( "#ajax-form" ).valid() ) {
                return false;
              }
              $('#button-submit').text("Message submitted, waiting for response");
              $('#button-submit').prop( "disabled", true );
              $('#button-submit').removeClass( 'btn-success' );
              $('#button-submit').addClass( 'btn-info' );
              $.ajax({
                dataType: 'jsonp',
                url: "http://getsimpleform.com/messages/ajax?form_api_token=e01a1c93f968e2c6e1f3954bbe1364a0",
                data: $('#ajax-form').serialize(),
                timeout: 10000,
                error: function() {
                  $('#button-submit').text("There was a problem. Resubmit?")
                  $('#button-submit').prop( "disabled", false );
                  $('#button-submit').addClass( 'btn-success' );
                  $('#button-submit').removeClass( 'btn-info' );
                }
              }).done(function() {
                //callback which can be used to show a thank you message
                $('#button-submit').text("Thank you for your message")
              });
              return false; //to stop the form from submitting
            });
            
        },

        initialization: function () {
            mainApp.main_fun();

        }

    }
    // Initializing ///

    // $(document).ready(function(){
      // $(".owl-carousel").owlCarousel({
        // center: true,
        // items:1,
        // loop:true,
        // autoplay:false,
        // dots:true, 
        // dotsEach:1,  // no effect seen
      // });
    // });

    $(document).ready(function () {
        mainApp.main_fun();
        // WOW FUNCTION 
        new WOW().init();
    });

}(jQuery));
