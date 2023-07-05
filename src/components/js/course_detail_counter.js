import $ from "jquery";
$(document).ready(function () {
  $(".counter").each(function () {
    $(this)
      .prop("Counter", 0)
      .animate(
        {
          Counter: $(this).text(),
        },
        {
          duration: 4000,
          easing: "swing",
          step: function (now) {
            $(this).text(Math.ceil(now));
          },
        }
      );
  });

  $(window).scroll(function () {
    if ($(this).scrollTop() > 950 && $(this).scrollTop() < 2570) {
      $(".fixed_top").addClass("sticky-fixed-section");
    } else {
      $(".fixed_top").removeClass("sticky-fixed-section");
    }
  });
});

$(document).ready(function () {
  $("#small_card").click(function () {
    const largeCard = document.querySelector(".large");
    largeCard.className = "cardss small";
    $("#small_card").removeClass("cardss small");
    $(".left_img").removeClass("col-lg-5 col-md-5 col-sm-5 col-5");
    $(".small_card_class").addClass("col-lg-5 col-md-5 col-sm-5 col-5");
    $(".fresher_card").hide();
    $(".exp_card").show();
    $(".exp_p").hide();
    $("#experienced_tab").show();
    $("#fresher_tab").hide();
    $("#fresher_class").append('<p class="fresher_p">Fresher</p> ');
    $("#fresher_class_both").append('<p class="fresher_p">Skilled placement</p> ');
    $("#small_card").addClass("cardss large");
  });
  $("#big_card").click(function () {
    const largeCard = document.querySelector(".large");
    largeCard.className = "cardss small";
    $("#big_card").removeClass("cardss small");
    $(".left_img").addClass("col-lg-5 col-md-5 col-sm-5 col-5");
    $(".small_card_class").removeClass("col-lg-5 col-md-5 col-sm-5 col-5");
    $(".fresher_card").show();
    $(".exp_card").hide();
    $(".fresher_p").hide();
    $("#experienced_tab").hide();
    $("#fresher_tab").show();
    $("#small_card_class_landing").append('<p class="exp_p">Experienced</p> ');
    $("#small_card_class_both").append('<p class="exp_p">Direct placement</p> ');
    $("#big_card").addClass("cardss large");
  });

  $("#FixedTimerOuterDiv").hover(
    function () {
      $(".landing_hide").stop(true, true).fadeIn();
      //   $(".landing_hide").css({"pointer-events":"block"});
    },
    function () {
      $(".landing_hide").stop(true, true).fadeOut();
    }
  );
  $("#basket_payment_zoom_hover").hover(
    function () {
      $("#Zoom_page_show").hide(500);
      $("#Zoom_page_hide").show(500);
      $("#Basket_Payment_hide_show_text").hide(200);
      $("#Basket_Payment_hide_text").show(200);
    },
    function () {
      $("#Zoom_page_show").show(500);
      $("#Zoom_page_hide").hide(500);
      $("#Basket_Payment_hide_show_text").show(200);
      $("#Basket_Payment_hide_text").hide(200);
    }
  );

  $(".direct-premium-card").find(".img-two").hide();
  $(".direct-professional-card").hover(
    function () {
      $(".direct-premium-card").addClass("direct-placement-card-2");
      $(".direct-placement-heading").removeClass("hovered_card_bg");
      $(".direct-premium-card").find(".img-two").show();

      // this.$('.img-two').hide()
    },
    function () {
      $(".direct-premium-card").removeClass("direct-placement-card-2");
      $(".direct-placement-heading").addClass("hovered_card_bg");
      $(".direct-premium-card").find(".img-two").hide();
    }
  );


  $(".tertiary").hover(
    function (e) {
      $(this).children(".img-1").hide();
      $(this).children(".img-2").show();
    },
    function (e) {
      $(this).children(".img-1").show();
      $(this).children(".img-2").hide();
    }
  );

  // Mobile Toggler

  $(".aside-trigger").on("click", function () {
    $("body").toggleClass("aside-open");
  });

  $(".mobile-toggler").on("click", function (e) {
    var subMenu = $(this).next(".submenu");
    e.preventDefault();
    subMenu.toggleClass("active");
  });

  $(".mobile-close-btn").on("click", function (e) {
    $(this).closest(".submenu.active").removeClass("active");
    e.preventDefault();
  });

  $(".expand-toggler").on("click", function () {
    $(".mobile-aside").addClass("expanded");
  });

  $(".shrink-toggler").on("click", function () {
    $(".mobile-aside").removeClass("expanded");
  });

  var readURL = function(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $('.profile-pic').attr('src', e.target.result);
        }

        reader.readAsDataURL(input.files[0]);
    }
}


$(".file-upload").on('change', function(){
    readURL(this);
});

$(".upload-button").on('click', function() {
   $(".file-upload").click();
});
});


