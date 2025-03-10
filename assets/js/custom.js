document.addEventListener("DOMContentLoaded", function () {
    new Swiper(".heroBannerSwiper", {
        slidesPerView: 1,
        spaceBetween: 0,
        loop: true,
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true, // Allows users to click on dots to navigate
        },
        breakpoints: {
            290: { slidesPerView: 1 },
            768: { slidesPerView: 1 },
            1024: { slidesPerView: 1 },
            1320: { slidesPerView: 1 },
        },
    });
    new Swiper(".reviewSwiper", {
        slidesPerView: 2,
        spaceBetween: 30,
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: ".swiper-button-nexts",
            prevEl: ".swiper-button-prevs",
        },
        breakpoints: {
            290: { slidesPerView: 1 },
            768: { slidesPerView: 1 },
            1024: { slidesPerView: 2 },
            1320: { slidesPerView: 3 },
        }
    });
    

}); 