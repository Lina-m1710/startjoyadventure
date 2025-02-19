$('.services-list').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  variableWidth: true,
  arrows: true,
  centerMode: true,
  cssEase: 'linear'
});

$('.events-list').slick({
  infinite: true,
  slidesToShow: 2,
  slidesToScroll: 1,
  arrows: true,
  cssEase: 'linear',
  responsive: [
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 1,
      }
    },
  ]
});

$(window).on('load resize', function() {
  if ($(window).width() < 769) {
    $('.projects-list').slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      cssEase: 'linear',
      arrows: false,
    });
  } else {
    $(".projects-list").slick("unslick");
  }
});

new WOW().init();


let btn = document.querySelector('.mobile-menu')
let burger = document.querySelector('.mobile-btn')
let nav = document.querySelector('.header-nav')
let item = document.querySelectorAll('.header-nav-item')

btn.addEventListener('click', function (e) {
  nav.classList.toggle('header-nav-mobile')
  burger.classList.toggle('mobile-btn-active')
  document.body.classList.toggle('body-scroll')
})

for (let i = 0; i < item.length; i++) {
  item[i].addEventListener('click', function (e) {
    nav.classList.toggle('header-nav-mobile')
    burger.classList.toggle('mobile-btn-active')
    document.body.classList.toggle('body-scroll')
  })
}

const smoothLinks = document.querySelectorAll('a[href^="#"]');
for (let smoothLink of smoothLinks) {
  smoothLink.addEventListener('click', function (e) {
    e.preventDefault();
    const id = smoothLink.getAttribute('href');

    document.querySelector(id).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
};


let popup = document.querySelector('.popup-cookie')
let popBtn = document.querySelectorAll('.cookies-btn')
let popBtnList = document.querySelector('.cookies-btns')

for (let c = 0; c < popBtn.length; c++){
  popBtn[c].addEventListener('mouseover', function (e) {
    for (let p = 0; p < popBtnList.children.length; p++) {
      popBtnList.children[p].classList.remove('cookies-btn-active')
    }
    this.classList.add('cookies-btn-active')
  })
  popBtn[c].addEventListener('click', function (e){
    popup.style.display = 'none'
  })
}


let bannerBtn = document.querySelectorAll('.btn-link')
let btnList = document.querySelector('.banner-btns')

for (let b = 0; b < bannerBtn.length; b++) {
  bannerBtn[b].addEventListener('mouseover', function (e) {
    for (let l = 0; l < btnList.children.length; l++) {
      btnList.children[l].classList.remove('active')
    }
    this.classList.add('active')
  })
}

let faqBtn = document.querySelectorAll('.faq-item-btn')
let faqItem = document.querySelectorAll('.faq-item')

for(let f = 0; f < faqBtn.length; f++){
  faqBtn[f].addEventListener('click', function(e){
    faqItem[f].classList.toggle('faq-item-active')
  })
}