$(function () {
  $('[data-toggle="tooltip"]').tooltip();
  $('[data-toggle="popover"]').popover();

  $(window).load(function () {
    $(".disappear").hide();
    ('.disappear').css("display", "block");
  });



  $('.trigger').on('click', function (e) {

    e.preventDefault();

    $(".trigger .active").removeClass("active");
    $(e.target).closest("li").addClass("active");
    var $place = $(e.target).closest("li").attr("id");

    if ($place === "ny") {
      $(".now").fadeOut("slow", function () {
        $(this).hide();
        $(".ny").fadeIn("slow").addClass("now");
      }).removeClass("now");
    } else if ($place === "sd") {
      $(".now").fadeOut("slow", function () {
        $(this).hide();
        $(".sd").fadeIn("slow").addClass("now");
      }).removeClass("now");
    } else if ($place === "dallas") {
      $(".now").fadeOut("slow", function () {
        $(this).hide();
        $(".dallas").fadeIn("slow").addClass("now");
      }).removeClass("now");
    } else if ($place === "atl") {
      $(".now").fadeOut("slow", function () {
        $(this).hide();
        $(".atl").fadeIn("slow").addClass("now");
      }).removeClass("now");
    }
  });



  $('#menus').on('click', function (e) {
    e.preventDefault();
    var $menus = $(e.target).text();
    if ($menus === "Breakfast") {
      $(".current_2").hide().removeClass("current_2");
      $(".breakfast").show().addClass("current_2");

      /*modal nav bar */

      $("#menus_2 .active").removeClass("active");
      $("#breakfast").addClass("active");
    } else if ($menus === "Lunch") {
      $(".current_2").hide().removeClass("current_2");
      $(".lunch").show().addClass("current_2");

      /*modal nav bar */

      $("#menus_2 .active").removeClass("active");
      $("#lunch").addClass("active");
    } else if ($menus === "Dinner") {
      $(".current_2").hide().removeClass("current_2");
      $(".dinner").show().addClass("current_2");

      /*modal nav bar */

      $("#menus_2 .active").removeClass("active");
      $("#dinner").addClass("active");
    } else if ($menus === "Beverages") {
      $(".current_2").hide().removeClass("current_2");
      $(".beverages").show().addClass("current_2");

      /*modal nav bar */

      $("#menus_2 .active").removeClass("active");
      $("#beverages").addClass("active");
    }



  });


  $('#menus_2').on('click', function (e) {
    e.preventDefault();

    var $menus_2 = $(e.target).text();


    if ($menus_2 === "Breakfast") {
      $(".current_2").fadeOut("fast", function () {
        $(this).hide();
        $(".breakfast").fadeIn("fast").addClass("current_2");
      }).removeClass("current_2");

      $("#menus_2 .active").removeClass("active");
      $("#breakfast").addClass("active");

    } else if ($menus_2 === "Lunch") {
      $(".current_2").fadeOut("fast", function () {
        $(this).hide();
        $(".lunch").fadeIn("fast").addClass("current_2");
      }).removeClass("current_2");
      $("#menus_2 .active").removeClass("active");
      $("#lunch").addClass("active");
    } else if ($menus_2 === "Dinner") {
      $(".current_2").fadeOut("fast", function () {
        $(this).hide();
        $(".dinner").fadeIn("fast").addClass("current_2");
      }).removeClass("current_2");

      $("#menus_2 .active").removeClass("active");
      $("#dinner").addClass("active");

    } else if ($menus_2 === "Beverages") {
      $(".current_2").fadeOut("fast", function () {
        $(this).hide();
        $(".beverages").fadeIn("fast").addClass("current_2");
      }).removeClass("current_2");

      $("#menus_2 .active").removeClass("active");
      $("#beverages").addClass("active");

    }
  });


  $('.about-img').on('mouseenter', function (e) {
    $(e.target).siblings('.about-p').css("visibility", "visible");
    $(e.target).addClass("img-dark");
  });

  $('.about-img').on('mouseleave', function (e) {
    $(e.target).siblings(".about-p").css("visibility", "hidden");
    $(e.target).removeClass("img-dark");
  });
  var input = [$("#one"), $("#two"), $("#three"), $("#four")]

  $('.submit-button').on('click', function (e) {
    e.preventDefault();

    for (i = 0; i < 4; i++) {
      if (input[i].val().length < 1) {

        input[i].parent().addClass("has-error");
        input[i].popover("show");
      } else if (i === 3 && input[i].val().length < 21) {
        input[i].parent().addClass("has-error");
        input[i].popover("show");

      }

    }
    if ($(".has-error").length === 0) {
      $(".submit-button").attr("class", "btn  submit-button btn-success");
      $(".submit-button").html("Message Sent <span class='glyphicon glyphicon-ok'></span>");
    }
  });

  $(".contact-form").on('focusin', function (e) {
    $(e.target).parent().removeClass("has-error");
    $(e.target).popover("hide");
  });

  $('.page-navigation').onePageNav();

  var $window = $(window);
  var $navbar = $("#navbar");
  var endzone = $(".ny").offset().top - 320;

  $window.on("scroll", function () {

    if ((endzone) < $window.scrollTop()) {
      $navbar.attr("id", "website-header");
    } else if ((endzone) > $window.scrollTop()) {
      $navbar.attr("id", "navbar");
    }
  });

});
