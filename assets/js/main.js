/*==================== SHOW MENU ====================*/
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    // Validate that variables exist
    if(toggle && nav){
        toggle.addEventListener('click', () =>{
            // We add the show-menu class to the div tag with the nav__menu class
            nav.classList.toggle('show-menu')
        })
    }
}

showMenu('nav-toggle','nav-menu')

/*==================== SWIPER JS ====================*/
let galleryThumbs = new Swiper('.gallery-thumbs', {
    spaceBetween: 0,
    slidesPerView: 0,
})

let galleryTop = new Swiper('.gallery-top', {
    effect: 'fade',
    loop: true,

    thumbs: {
      swiper: galleryThumbs
    }
})

/*====================  INFO MODAL ====================*/
const modalViews = document.querySelectorAll('.info__modal'),
    modalBtns = document.querySelectorAll('.info__button'),
    modalBtnsNav = document.querySelectorAll('.info__button-nav')
    modalCloses = document.querySelectorAll('.info__modal-close')

let modal = function(modalClick) {
    modalViews[modalClick].classList.add('active-modal')
}

modalBtns.forEach((modalBtn, i) => {
    modalBtn.addEventListener('click', () =>{
        modal(i)
    })
})

modalBtnsNav.forEach((modalBtnNav, j) => {
    modalBtnNav.addEventListener('click', () =>{
        modal(j)
    })
})

modalCloses.forEach((modalClose) => {
    modalClose.addEventListener('click', () =>{
        modalViews.forEach((modalView) =>{
            modalView.classList.remove('active-modal')
        })
    })
})

/*====================  GALLERY SWIPER ====================*/
let swiperPortfolio = new Swiper(".gallery__container", {
    cssMode: true,
    loop: true,

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

/*==================== POPUP ====================*/
const btnOpenVideo = document.querySelectorAll('.features__video-content')
const featuresPopup = document.getElementById('popup')

function poPup(){
    featuresPopup.classList.add('show-popup')
}
btnOpenVideo.forEach(b => b.addEventListener('click', poPup))

const btnCloseVideo = document.getElementById('popup-close')

btnCloseVideo.addEventListener('click', ()=> {
    featuresPopup.classList.remove('show-popup')
})

/*==================== GSAP ANIMATION ====================*/
const controlImg = document.querySelectorAll('.controls__img')

function scrollAnimation(){
    gsap.from('.features__subtitle', {opacity: 0, duration: .2, delay: .2, y: -20})
    gsap.from('.features__title', {opacity: 0, duration: .3, delay: .3, y: -20})
    gsap.from('.features__description', {opacity: 0, duration: .4, delay: .4, y: -20})
    gsap.from('.features__description-two', {opacity: 0, duration: .4, delay: .4, y: -20})
    gsap.from('.features__button', {opacity: 0, duration: .5, delay: .5, y: -20})
    gsap.from('.features__video-content', {opacity: 0, duration: .6, delay: .6, y: -20})

    featuresPopup.classList.remove('show-popup')
}

controlImg.forEach(c => c.addEventListener('click', scrollAnimation))
