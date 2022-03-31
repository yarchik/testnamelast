window.addEventListener("load", function () {
    $(".section-js").addClass("load");
});

/*news slider*/
$(document).ready(function () {

    var swiperGallery = new Swiper(".swiper-gallery", {
        slidesPerView: 2,
        centeredSlides: true,
        spaceBetween: 20,
        loop: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        breakpoints: {
            640: {
                slidesPerView: 2,
                spaceBetween: 0,
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 0,
            },
            1024: {
                slidesPerView: 4,
                spaceBetween: 0,
            },
            1200: {
                slidesPerView: 4,
                spaceBetween: 0,
            },
            1640: {
                slidesPerView: 5,
                spaceBetween: 0,
            },
        },
    });
    var followUsSwiper = new Swiper(".s-follow-us .mySwiper", {
        slidesPerView: 1,
        spaceBetween: 0,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        breakpoints: {
            640: {
                slidesPerView: 2,
                spaceBetween: 0,
            },
            768: {
                slidesPerView: 4,
                spaceBetween: 0,
            },
            1024: {
                slidesPerView: 5,
                spaceBetween: 0,
            },
        },
    });
})

