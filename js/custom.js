$(function () {
  $(window).on("scroll", function () {
    let sct = $(window).scrollTop();
    sct > 0 ? $(".header").addClass("on") : $(".header").removeClass("on");
  });

  // 스크롤 이벤트
  $(window).on("scroll", function () {
    let sct = $(window).scrollTop();
    $("._se_").each(function () {
      if (sct + $(window).innerHeight() - 200 > $(this).offset().top) {
        $(this).addClass("on");
      } else {
        $(this).removeClass("on");
      }
    });
  });

  const mainSlide = new Swiper(".main_slide", {
    loop: true,
    parallax: true,
    speed: 1000,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    slideActiveClass: "on",
    on: {
      init: function () {},
      slideChangeTransitionEnd: function () {},
    },
  });

  $(".main_visual .arrows .left").on("click", function () {
    mainSlide.slidePrev();
  });
  $(".main_visual .arrows .right").on("click", function () {
    mainSlide.slideNext();
  });

  const noticeSlide = new Swiper(".notice_slide", {
    loop: true,
    slidesPerView: 2,
    spaceBetween: 30,
  });

  $(".main_notice .arrows .left").on("click", function () {
    noticeSlide.slidePrev();
  });
  $(".main_notice .arrows .right").on("click", function () {
    noticeSlide.slideNext();
  });
});
