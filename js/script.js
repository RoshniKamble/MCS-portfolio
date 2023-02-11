// Get the current year for the copyright
$("#year").text(new Date().getFullYear());

// navbar
// $(window).scroll(function () {
//   $("nav").toggleClass("scrolled", $(this).scrollTop() > 0);
// });

// navbar
// const $dropdown = $(".dropdown");
// const $dropdownToggle = $(".dropdown-toggle");
// const $dropdownMenu = $(".dropdown-menu");
// const showClass = "show";

// $(window).on("load resize", function () {
//   if (this.matchMedia("(min-width: 768px)").matches) {
//     $dropdown.hover(
//       function () {
//         const $this = $(this);
//         $this.addClass(showClass);
//         $this.find($dropdownToggle).attr("aria-expanded", "true");
//         $this.find($dropdownMenu).addClass(showClass);
//       },
//       function () {
//         const $this = $(this);
//         $this.removeClass(showClass);
//         $this.find($dropdownToggle).attr("aria-expanded", "false");
//         $this.find($dropdownMenu).removeClass(showClass);
//       }
//     );
//   } else {
//     $dropdown.off("mouseenter mouseleave");
//   }
// });

// Init Scrollspy
$('body').scrollspy({ target: '#main-nav' });

// Smooth Scrolling
$("#main-nav a").on('click', function (event) {
  if (this.hash !== "") {
    event.preventDefault();

    const hash = this.hash;

    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 800, function () {

      window.location.hash = hash;
    });
  }
});


//AOS
$(function () {
  AOS.init({
    once: true,
  });
});

AOS.init({ disable: "mobile" });


