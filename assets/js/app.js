$(document).ready(function(){
    
$('.datepicker').daterangepicker({
  singleDatePicker: true,
  autoApply: true,
});

$('input[name="paymentMode"]').change(function(){
  if($(this).val() == 'payInHand'){
    $('.PayQr').hide()
    $('.payInHandBox').show()
  }
  else{
    $('.PayQr').show()
    $('.payInHandBox').hide()
  }
})
// include html
  let includes = $('[data-include]')
  jQuery.each(includes, function(){
    let html = '/' + $(this).data('include') + '.html'
    $(this).load(html)
  })
  $('[data-bs-toggle="tooltip"]').tooltip()

  navigation()

  $('#eventsslider').slick({
    dots: false,
    autoPlay:true,
    infinite: true,
    slidesToShow: 1,
    prevArrow: "<button class='slick-arrow-button left-arrow'><i class='fas fa-chevron-left'></i></button>",
    nextArrow: "<button class='slick-arrow-button right-arrow'><i class='fas fa-chevron-right'></i></button>",   
  });
  new Swiper('.hero-image-slider', {
    speed: 400,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 1,
    pagination: false
  });
  new Swiper('.room-images-slider', {
    speed: 400,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 1,
    pagination: false
  });
  new Swiper('.room-images-slider2', {
    speed: 400,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 1,
    pagination: false
  });
  new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    pagination: {
      el: ".swiper-pagination",
    },
  });
  new Swiper('.photos-slider', {
    speed: 400,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 1,
    // pagination: {
    //   el: ".notice-swiper-pagination",
    // },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  new Swiper('#committee-slider', {
    speed: 400,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 40,
        centeredSlides: true,
      },
      480: {
        slidesPerView: 1,
        spaceBetween: 60,
        centeredSlides: true,
      },
      640: {
        slidesPerView: 2,
        spaceBetween: 80,
        centeredSlides: true,
      },
      992: {
        slidesPerView: 6,
        spaceBetween: 120,
        centeredSlides: true,
      }
    }
  });

  const sections = document.querySelectorAll('.section');
  const bannerSection = document.querySelector('.bannerSec');

  const observerOptions = {
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      const items = entry.target.querySelectorAll('.section-title,.subhead,.roomWrapper');
      if (entry.isIntersecting) {
        items.forEach(item=>{
          item.classList.add('visible');
        })
      } else {
        items.forEach(item=>{
          item.classList.remove('visible');
        })
      }
    });
  }, observerOptions);
  const bannerObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      const bannerTitle = entry.target.querySelectorAll('h1');
      if (entry.isIntersecting) {
        bannerTitle.forEach(banner=>{
          banner.classList.add('visible');
        })
      } 
      else {
        bannerTitle.forEach(banner=>{
          banner.classList.remove('visible');
        })
      }
    });
  }, observerOptions);
  // const observer2 = new IntersectionObserver((entries, observer) => {
  //   entries.forEach(entry => {
  //     const roomWrappers = entry.target.querySelectorAll('.roomWrapper');
  //     if (entry.isIntersecting) {
  //       roomWrappers.forEach(room=>{
  //         room.classList.add('visible');
  //       })
  //     } else {
  //       roomWrappers.forEach(room=>{
  //         room.classList.add('visible');
  //       })
  //     }
  //   });
  // }, observerOptions);

  sections.forEach(section => {
    observer.observe(section);
    // observer2.observe(section);
    // observer3.observe(section);
  });
  bannerObserver.observe(bannerSection);

    

  $('.match-height').matchHeight()
  $('.matchHeightContent').matchHeight()

  $('.navbar-toggler').click(function(){
    $('body').toggleClass('overflow-hidden')
  })

  $('.nextButton').click(function(){
    let stepname = $(this).data('step')
    $('.step').removeClass('active')
    $(`.${stepname}`).addClass('active')
  })

  $('.mob-header button').click(function(){
    $('body').toggleClass('overflow-hidden')
    $(this).find('i').toggleClass('fa-xmark')
    $('header ul').toggleClass('active')
  })

  $('[data-gallery-category]').each(function(){
    $(this).click(function(){
      $('[data-gallery-show]').hide()
      $('.gallery-categories').hide()
      $('#backButton').show()
      $(`[data-gallery-show="${$(this).attr('data-gallery-category')}"]`).show()
    })
  })
  $('#backButton').click(function(){
    $('[data-gallery-show]').hide()
    $('.gallery-categories').show()
    $(this).hide()
  })

  

})



$(document).ajaxStop(function(){
  $('.match-height').matchHeight()
  $('.card-content .card-top').matchHeight()
  $('[data-bs-toggle="tooltip"]').tooltip()

  $('.datepicker').daterangepicker({
    singleDatePicker: true,
    autoApply: true,
  });

  $(".backToTop").click(function () {
    $("html, body").animate({scrollTop: 0}, 1000);
 });

  $('.navbar-toggler').click(function(){
    $('.mobileMenuOverlay').toggleClass('active')
  })

  $('#navbarNav').on('shown.bs.collapse', function () {
    $('.navbar-overlay').addClass('show')
    $('body').addClass('overflow-hidden')
 });
 
 $('#navbarNav').on('hidden.bs.collapse', function () {
  $('.navbar-overlay').removeClass('show')
  $('body').removeClass('overflow-hidden')
 });


  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
       $('header').addClass('header-sticky');
       $('.scrollDownAnimate').removeClass('visible')
    } else {
       $('header').removeClass('header-sticky');
       $('.scrollDownAnimate').addClass('visible')
    }
    if ($(this).scrollTop() > 600) {
       $('.fixedWhatsapp,.footerFixedMenu').addClass('active');
    } else {
      $('.fixedWhatsapp,.footerFixedMenu').removeClass('active');
    }
 });

 $('#scrollToTop').click(function(e) {
  e.preventDefault();
  $('html, body').animate({ scrollTop: 0 }, 600); // 600ms for smooth scroll
  return false;
});

$('.card-title').matchHeight()

$('#clients-slider').slick({
  autoplay: true,
  autoplaySpeed: 10000,
  speed: 300,
  // cssEase: 'linear',
  slidesToShow: 6,
  slidesToScroll: 1,
  infinite: true,
  // swipeToSlide: true,
  // centerMode: true,
  // focusOnSelect: true,
  dots: false,
  arrows: true,
  prevArrow: '<button class="prevArrow"><i class="fas fa-chevron-left"></i></button>',
  nextArrow: '<button class="nextArrow"><i class="fas fa-chevron-right"></i></button>',
  responsive: [
          {
            breakpoint: 991,
            settings: {
              slidesToShow: 2,
              arrows: false,
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              arrows: false,
            }
          }
          ]
});


$('.desktopHamburger').click(function () {
  $('.deskHamburgerBox').addClass('visible')
  $('html').addClass('overflow-hidden')
})
$('#deskHamburgerClose').click(function () {
  $('.deskHamburgerBox').removeClass('visible')
  $('html').removeClass('overflow-hidden')
})
$('.navbar-toggler').click(function () {
  $('html,body').toggleClass('overflow-hidden')
})


  navigation()

    
})

function navigation(){
  const currentUrl= window.location.pathname.split('/').pop()
  $('.mob-header ul li a').removeClass('active')
  $('.mob-header ul li').each(function(){
    if($(this).hasClass('dropdown')){
      $(this).find('ul li').each(function(){
        if($(this).find('a').attr('href') === currentUrl){
          $(this).parents('li').find('.nav-link').addClass('active')
        }
      })
    }
    if($(this).find('.nav-link').attr('href') === currentUrl){
      $(this).find('.nav-link').addClass('active')
    }
  })

}