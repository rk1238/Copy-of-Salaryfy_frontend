import $ from "jquery";


function startTimer(duration, display) {
            var timer = duration, minutes, seconds;
            setInterval(function () {
                minutes = parseInt(timer / 60, 10);
                seconds = parseInt(timer % 60, 10);

                minutes = minutes < 10 ? "0" + minutes : minutes;
                seconds = seconds < 10 ? "0" + seconds : seconds;

                if (display) {
                    display.textContent = minutes + ":" + seconds;
                }
                // display.textContent = minutes + ":" + seconds;

                if (--timer < 0) {
                    timer = duration;
                }
            }, 1000);
        }

        

        window.onload = function () {
           
            var fMinutes = 60 * 5,
                display1 = document.querySelector('#time_countdown-1');
            startTimer(fMinutes, display1);

            var fiveMinutes = 60 * 5,
                display2 = document.querySelector('#time_countdown-2');
            startTimer(fiveMinutes, display2);

            var Minutes = 60 * 5,
                display3 = document.querySelector('#time_countdown-3');
            startTimer(Minutes, display3);

            var Minutes1 = 60 * 5,
                display4 = document.querySelector('#time_countdown-4');
            startTimer(Minutes1, display4);

            var Minutes2 = 60 * 1,
            display5 = document.querySelector('#time_countdown-5');
        startTimer(Minutes2, display5);

        var Minutes4 = 60 * 30,
        display6 = document.querySelector('#time_countdown-6');
    startTimer(Minutes4, display6);
        };


        var back_to_top = function () {
		$(window).scroll(function () {
			if ($(this).scrollTop() > 828) {
				$('#back-to-top').addClass('active');
			} else {
				$('#back-to-top').removeClass('active');
			}
		});
		$('#back-to-top').on('click', function () {
			$('html, body').animate({scrollTop: '0px'}, 800);
			return false;
		});
	};
	
	
	$(function () {
		back_to_top();
	});

   



    


        
    // Mobile Toggler

$(".aside-trigger").on('click', function() {
$("body").toggleClass('aside-open');
});

$(".mobile-toggler").on('click', function(e) {
      var subMenu = $(this).next(".submenu");
      e.preventDefault();
      subMenu.toggleClass("active");
    });
    
    $(".mobile-close-btn").on('click', function(e) {
       $(this).closest(".submenu.active").removeClass("active");
       e.preventDefault();
});

$(".expand-toggler").on('click', function() {
$(".mobile-aside").addClass('expanded');
});

$(".shrink-toggler").on('click', function() {
$(".mobile-aside").removeClass('expanded');
});









